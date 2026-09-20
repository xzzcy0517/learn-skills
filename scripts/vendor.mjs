#!/usr/bin/env node
/**
 * vendor.mjs —— 上游 Skill 快照管理工具(零 npm 依赖,直接调用 git)
 *
 * fetch  :把上游 skill 的某一时点快照下载到 vendor/<name>/,生成 SOURCE.yml 出处记录
 * update :按 SOURCE.yml 记录重新拉取快照,更新 commit/日期,打印上游对比链接提示再学习
 *
 * 用法(仓库根目录):
 *   npm run vendor:fetch -- <github-url> [name] [--subdir <仓库内路径>] [--ref <分支或tag>]
 *   npm run vendor:update -- <name>
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const VENDOR = path.join(ROOT, 'vendor')

const git = (args, cwd) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim()
const today = () => new Date().toISOString().slice(0, 10)
const short = (sha) => String(sha).slice(0, 10)

// ---------- 参数解析 ----------
function parseArgs(argv) {
  const pos = []
  const opts = {}
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--subdir') opts.subdir = argv[++i]
    else if (argv[i] === '--ref') opts.ref = argv[++i]
    else pos.push(argv[i])
  }
  return { pos, opts }
}

function parseRepoUrl(url) {
  const m = url.match(/github\.com[:/]([^/]+)\/([^/]+?)(\.git)?$/)
  if (!m) throw new Error(`目前仅支持 GitHub 仓库地址,收到:${url}`)
  return { owner: m[1], repo: m[2], url: `https://github.com/${m[1]}/${m[2]}` }
}

// ---------- SOURCE.yml(扁平 key: value,零依赖手写解析) ----------
const META_KEYS = ['name', 'source', 'ref', 'subdir', 'commit', 'license', 'vendored_at', 'updated_at', 'notes', 'status']

function parseMeta(text) {
  const out = {}
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^([a-z_]+):\s*(.*)$/)
    if (m) out[m[1]] = m[2].trim()
  }
  return out
}

function dumpMeta(m) {
  const header =
    '# 上游快照出处 —— 由 scripts/vendor.mjs 维护,请勿手改 name/source/ref/subdir/commit\n' +
    '# license 与 status 需要人工核对修改(status: draft 笔记未写完 / verified 已验证 / outdated 上游已更新待复学)\n'
  return (
    header +
    META_KEYS.filter((k) => m[k] !== undefined)
      .map((k) => `${k}: ${m[k]}`)
      .join('\n') +
    '\n'
  )
}

// ---------- git 操作 ----------
function clone(url, ref, subdir) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vendor-'))
  const args = ['clone', '--depth', '1']
  if (ref) args.push('--branch', ref)
  if (subdir) args.push('--sparse')
  git([...args, url, dir])
  if (subdir) git(['sparse-checkout', 'set', subdir], dir)
  const commit = git(['rev-parse', 'HEAD'], dir)
  const actualRef = ref || git(['rev-parse', '--abbrev-ref', 'HEAD'], dir)
  return { dir, commit, actualRef }
}

function copySkill(tmpDir, dest, subdir) {
  const from = subdir ? path.join(tmpDir, subdir) : tmpDir
  if (!fs.existsSync(from)) throw new Error(`仓库内不存在该路径:${subdir}`)
  fs.mkdirSync(dest, { recursive: true })
  fs.cpSync(from, dest, { recursive: true, filter: (s) => path.basename(s) !== '.git' })
  // 只 vendored 子目录时,把仓库根的 LICENSE/README/COPYING 一并带上,保留版权出处
  if (subdir) {
    for (const f of fs.readdirSync(tmpDir)) {
      if (/^(license|licence|readme|copying)/i.test(f) && !fs.existsSync(path.join(dest, f))) {
        fs.copyFileSync(path.join(tmpDir, f), path.join(dest, f))
      }
    }
  }
}

const readmeTemplate = (m) => `# SNAPSHOT.md —— 本快照说明(脚本自动生成,上游原文见 README.md / SKILL.md)

> 本目录是 [${m.source}](${m.source}) 在 **${m.vendored_at}**(commit \`${short(m.commit)}\`)时点的快照,
> 由 \`scripts/vendor.mjs\` 生成,用于配合 [学习笔记](../../docs/skills/${m.notes.replace('docs/skills/', '')}/index.md) 的"时点学习"。

- **原始文档与版权**:文件内容归原作者所有,许可证见 SOURCE.yml 与本目录 LICENSE(如有)
- **学习笔记**:\`docs/skills/${m.name}/\`
- **更新快照**:仓库根目录执行 \`npm run vendor:update -- ${m.name}\`,按提示对照上游 diff 复学
- 本文件与 SOURCE.yml 由脚本维护,请勿在快照目录内手写笔记
`

// ---------- 子命令 ----------
function cmdFetch(urlArg, nameArg, opts) {
  if (!urlArg) throw new Error('缺少仓库地址\n用法:npm run vendor:fetch -- <github-url> [name] [--subdir <path>] [--ref <branch|tag>]')
  const { repo, url } = parseRepoUrl(urlArg)
  const name = nameArg || repo
  const dest = path.join(VENDOR, name)
  if (fs.existsSync(path.join(dest, 'SOURCE.yml'))) {
    throw new Error(`vendor/${name} 已有快照,刷新请用:npm run vendor:update -- ${name}`)
  }
  console.log(`⬇️  拉取 ${url}${opts.subdir ? `(子目录 ${opts.subdir})` : ''}${opts.ref ? ` @ ${opts.ref}` : ''} ...`)
  const { dir, commit, actualRef } = clone(url, opts.ref, opts.subdir)
  copySkill(dir, dest, opts.subdir)
  fs.rmSync(dir, { recursive: true, force: true })

  const meta = {
    name,
    source: url,
    ref: actualRef,
    subdir: opts.subdir || 'null',
    commit,
    license: 'TODO 请核对上游 LICENSE 后修改',
    vendored_at: today(),
    notes: `docs/skills/${name}`,
    status: 'draft',
  }
  fs.writeFileSync(path.join(dest, 'SOURCE.yml'), dumpMeta(meta))
  fs.writeFileSync(path.join(dest, 'SNAPSHOT.md'), readmeTemplate(meta))
  console.log(`✅ 快照已保存到 vendor/${name}/(commit ${short(commit)})`)
  console.log(`   下一步:
   1. 核对并填写 vendor/${name}/SOURCE.yml 的 license
   2. 复制 docs/skills/template.md → docs/skills/${name}/index.md 开始写笔记
   3. 在 docs/skills/index.md 登记表加一行,并在 docs/.vitepress/config.mts 侧边栏补链接
   4. git add -A && git commit -m "docs: vendor <name> snapshot @ ${short(commit)}"`)
}

function cmdUpdate(name) {
  if (!name) throw new Error('缺少 skill 名\n用法:npm run vendor:update -- <name>')
  const dest = path.join(VENDOR, name)
  const ymlPath = path.join(dest, 'SOURCE.yml')
  if (!fs.existsSync(ymlPath)) throw new Error(`vendor/${name}/SOURCE.yml 不存在,请先 fetch`)
  const meta = parseMeta(fs.readFileSync(ymlPath, 'utf8'))
  const opts = (v) => (v && v !== 'null' ? v : undefined)
  console.log(`⬇️  重新拉取 ${meta.source} ...`)
  const { dir, commit } = clone(meta.source, opts(meta.ref), opts(meta.subdir))
  if (commit === meta.commit) {
    fs.rmSync(dir, { recursive: true, force: true })
    console.log(`✅ ${name} 已是最新(commit ${short(commit)}),无需复学`)
    return
  }
  const old = meta.commit
  fs.rmSync(dest, { recursive: true, force: true })
  copySkill(dir, dest, opts(meta.subdir))
  fs.rmSync(dir, { recursive: true, force: true })

  meta.commit = commit
  meta.vendored_at = today()
  meta.updated_at = today()
  meta.status = meta.status === 'verified' ? 'outdated' : meta.status
  fs.writeFileSync(ymlPath, dumpMeta(meta))
  fs.writeFileSync(path.join(dest, 'SNAPSHOT.md'), readmeTemplate(meta))
  console.log(`🔄 ${name} 快照已更新:${short(old)} → ${short(commit)}`)
  console.log(`   上游变更对比:${meta.source}/compare/${old}...${commit}`)
  console.log(`   下一步:对照 compare 链接看上游改了什么 → 复学并更新 docs/skills/${name}/ 笔记 → 把 SOURCE.yml 的 status 改回 verified`)
}

function usage() {
  console.log(`用法:
  npm run vendor:fetch -- <github-url> [name] [--subdir <仓库内路径>] [--ref <分支或tag>]
  npm run vendor:update -- <name>

示例:
  npm run vendor:fetch -- https://github.com/anthropics/skills anthropics-skills --subdir skills
  npm run vendor:update -- anthropics-skills`)
}

// ---------- main ----------
try {
  const [cmd, ...rest] = process.argv.slice(2)
  const { pos, opts } = parseArgs(rest)
  if (cmd === 'fetch') cmdFetch(pos[0], pos[1], opts)
  else if (cmd === 'update') cmdUpdate(pos[0])
  else usage()
} catch (e) {
  console.error(`❌ ${e.message}`)
  process.exit(1)
}

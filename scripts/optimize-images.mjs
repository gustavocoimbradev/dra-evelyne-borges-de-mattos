import { readdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises'
import { extname, join, relative, sep } from 'node:path'
import sharp from 'sharp'

const DIST_DIR = new URL('../dist/', import.meta.url)
const IMAGES_DIR = new URL('../dist/assets/images/', import.meta.url)
const RASTER_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const TEXT_EXTENSIONS = new Set(['.css', '.html', '.js', '.json', '.map', '.svg', '.txt', '.webmanifest', '.xml'])

// Limites em pixels físicos (aproximadamente 2x o maior tamanho exibido).
const IMAGE_SETTINGS = {
  '/assets/images/banner-internal.jpg': {
    width: 1920,
    height: 640,
    fit: 'cover',
    quality: 62,
  },
  '/assets/images/bg-1.jpg': { width: 1200 },
  '/assets/images/casal-plastica.webp': { width: 1200 },
  '/assets/images/evelyne.webp': { width: 1000 },
  '/assets/images/footer-logo.webp': { width: 320, quality: 75 },
  '/assets/images/logo.webp': { width: 320, quality: 75 },
  '/assets/images/video1.webp': { width: 560 },
  '/assets/images/video2.webp': { width: 560 },
  '/assets/images/video3.webp': { width: 560 },
  '/assets/images/video4.webp': { width: 560 },
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name)
      return entry.isDirectory() ? walk(path) : [path]
    }),
  )

  return nested.flat()
}

function publicPath(file) {
  return `/${relative(DIST_DIR.pathname, file).split(sep).join('/')}`
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

const distFiles = await walk(DIST_DIR.pathname)
const textFiles = distFiles.filter((file) => TEXT_EXTENSIONS.has(extname(file).toLowerCase()))
const documents = new Map(
  await Promise.all(textFiles.map(async (file) => [file, await readFile(file, 'utf8')])),
)

const imageFiles = (await walk(IMAGES_DIR.pathname)).filter((file) =>
  RASTER_EXTENSIONS.has(extname(file).toLowerCase()),
)

let bytesBefore = 0
let bytesAfter = 0
let optimized = 0
let removed = 0
const replacements = new Map()

for (const file of imageFiles) {
  const sourceUrl = publicPath(file)
  const sourceSize = (await stat(file)).size
  bytesBefore += sourceSize

  const isReferenced = [...documents.values()].some((content) => content.includes(sourceUrl))
  if (!isReferenced) {
    await rm(file)
    removed += 1
    continue
  }

  const output = file.replace(/\.(?:jpe?g|png|webp)$/i, '.avif')
  const outputUrl = sourceUrl.replace(/\.(?:jpe?g|png|webp)$/i, '.avif')
  const settings = IMAGE_SETTINGS[sourceUrl] ?? { width: 1600 }
  const { quality = 62, ...resize } = settings
  const temporaryOutput = `${output}.tmp`

  await sharp(file)
    .rotate()
    .resize({ ...resize, withoutEnlargement: true })
    .avif({ quality, effort: 4 })
    .toFile(temporaryOutput)

  await rm(file)
  await rename(temporaryOutput, output)

  replacements.set(sourceUrl, outputUrl)
  bytesAfter += (await stat(output)).size
  optimized += 1
}

for (const [file, originalContent] of documents) {
  let content = originalContent
  for (const [sourceUrl, outputUrl] of replacements) {
    content = content.replaceAll(sourceUrl, outputUrl)
  }
  if (content !== originalContent) await writeFile(file, content)
}

const saved = bytesBefore - bytesAfter
const percentage = bytesBefore ? Math.round((saved / bytesBefore) * 100) : 0

console.log(
  `Imagens: ${optimized} convertidas para AVIF, ${removed} não utilizadas removidas; ` +
    `${formatBytes(bytesBefore)} → ${formatBytes(bytesAfter)} (${percentage}% menor).`,
)

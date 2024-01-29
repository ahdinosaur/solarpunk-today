#!/usr/bin/env node

const { readdir, writeFile } = require('fs/promises')
const { join } = require('path')
const title = require('title')

if (!process.argv[2]) {
  console.error('Usage: ./scripts/generate-meta.js <directory> [<directory>]...')
  return
}

main(process.argv.slice(2))

async function main(contentDirs) {
  await Promise.all(contentDirs.map(async (contentDir) => {
    const contentDirEntries = (await readdir(contentDir))
      .filter(item => item !== '_meta.json')
      .sort()
    const metaObj = contentDirEntries.reduce(
      (sofar, next) => {
        const id = next.split('.')[0]

        let name = id
        name = name.replace(/-/g, ' ')
        name = title(name)

        sofar[id] = title(name)
        return sofar
      },
      {}
    )

    const metaFile = JSON.stringify(metaObj, null, 2)
    const metaPath = join(contentDir, '_meta.json')
    await writeFile(metaPath, metaFile, 'utf8')
  }))
}

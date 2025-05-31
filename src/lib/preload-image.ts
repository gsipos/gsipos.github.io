import fs from 'fs'

const getName = (url: string) => {
  const urlObj = new URL(url)
  const ext = urlObj.pathname.split('.').pop() || ''
  const name = urlObj.hostname
    .concat(urlObj?.pathname)
    .replace('www.', '')
    .replaceAll('.', '-')
    .replaceAll('/', '-')
    .concat(`.${ext}`)
  return name
}

export const preloadImage = async (url: string) => {
  const name = getName(url)

  if (!name) {
    throw `[astro-preload] name not provided and cannot be extracted from the url ${url}.\nPlease, provide a name.`
  }
  const preloadedUrl = import.meta.env.BASE_URL + `assets/preloaded/${name}`

  // Download only on production to avoid downloading multiple times
  if (process.env.NODE_ENV === 'production' && !url.startsWith('/')) {
    try {
      const preloadDir = 'src/assets/preloaded'
      const path = `${preloadDir}/${name}`

      if (!fs.existsSync(path)) {
        if (!fs.existsSync(preloadDir)) {
          fs.mkdirSync(preloadDir, { recursive: true })
        }
        const response = await fetch(url)
        const blob = await response.blob()

        fs.writeFileSync(path, new Uint8Array(await blob.arrayBuffer()))
        console.log(`[astro-preload]: Downloaded image ${name} into ${path}`)
      } else {
        console.log(`[astro-preload]: Image ${name} already exists at ${path}`)
      }

      return preloadedUrl
    } catch {
      console.log(`[astro-preload]: Failed to load image '${name}', fallback to using '${preloadedUrl}'`)
      return preloadedUrl
    }
  }
  return url
}

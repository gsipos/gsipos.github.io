import fs from 'fs'

const getName = (url: string) => {
  const urlObj = new URL(url)
  const ext = urlObj.pathname.split('.').pop() ?? '.jpg'
  const name = urlObj.hostname
    .concat(urlObj?.pathname)
    .replace('www.', '')
    .replaceAll('.', '-')
    .replaceAll('/', '-')
    .replaceAll('%20', '_')
    .concat(`.${ext}`)
  return name
}

const importImageByName = async (name: string) => {
  const preloadedImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/preloaded/*')
  const importedImageKey = Object.keys(preloadedImages).find((key) => key.includes(name))
  const module = importedImageKey ? await preloadedImages[importedImageKey]() : null
  return module?.default.src
}

const preloadDir = 'src/assets/preloaded'

const loadImage = async (name: string, url: string, path: string) => {
  if (!fs.existsSync(preloadDir)) {
    fs.mkdirSync(preloadDir, { recursive: true })
  }
  const response = await fetch(url)
  const blob = await response.blob()

  const contentType = response.headers.get('Content-Type')

  const ext = contentType?.split('/')[1] || 'jpg'
  const pathWithExt = `${path}.${ext}`

  fs.writeFileSync(pathWithExt, new Uint8Array(await blob.arrayBuffer()))
  console.log(`[astro-preload]: Downloaded image ${name} into ${pathWithExt}`)
}

export const preloadImage = async (name: string, url: string) => {
  if (!name) {
    throw `[astro-preload] name not provided and cannot be extracted from the url ${url}.\nPlease, provide a name.`
  }
  const preloadedUrl = import.meta.env.BASE_URL + `/src/assets/preloaded/${name}`
  const path = `${preloadDir}/${name}`

  const preloadedImage = await importImageByName(name)
  if (preloadedImage) {
    return preloadedImage
  }

  // Download only on production to avoid downloading multiple times
  if (process.env.NODE_ENV === 'production' && !url.startsWith('/')) {
    try {
      await loadImage(name, url, path)
      return await importImageByName(name)
    } catch {
      console.log(`[astro-preload]: Failed to load image '${name}', fallback to using '${url}'`)
      return url
    }
  }
  return url
}

import slugify from 'slugify'

export const slugifyName = (name: string) => {
  const slugifyData = slugify(name)
  return slugifyData
}
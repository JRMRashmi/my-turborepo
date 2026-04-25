export const homePageQuery = `
*[_type == "page" && slug.current == "home"][0]{
  title,
  slug,
  sections
}
`
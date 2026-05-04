// export const homePageQuery = `
// *[_type == "page" && slug.current == "home"][0]{
//   title,
//   slug,
//   sections
// }
// `


export const homePageQuery = `
*[_type == "page" && slug.current == "home"][0]{
  title,
  slug,
  sections[]{
    _key,
    _type,

    // HERO
    _type == "hero" => {
      heading,
      subheading,

      // ✅ image with asset
      image{
        asset->{
          _id,
          url
        }
      },

      // ✅ rich text
      richText,

      // ✅ nested CTA
      cta{
        title,
        buttonText,
        buttonLink
      }
    }

    // (Optional: keep for future sections)
    // _type == "richText" => {...}
    // _type == "cta" => {...}
  }
}
`
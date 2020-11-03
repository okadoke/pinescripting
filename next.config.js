const mdxPrism = require("mdx-prism")
const withMDX = require('@next/mdx')({
  // mdx options go here
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [mdxPrism]
  }
})

module.exports = withMDX({
  // next options go here
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx']
})

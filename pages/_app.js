import 'prismjs/themes/prism-tomorrow.css'
import '../styles/app.css'

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Article from "../layouts/article"
import Snippet from "../components/snippet"
const components = {
  Article,
  pre: Snippet,
  wrapper: ({children, ...props}) => {
    console.log(props)
    if (props.meta.layout === 'Article') {
      return (
        <Article title={props.meta.title}>{children}</Article>
      )
    }
    return <>{children}</>
  }
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
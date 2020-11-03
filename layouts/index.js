import React from 'react'

export default (frontMatter) => {
  return ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
  }
}
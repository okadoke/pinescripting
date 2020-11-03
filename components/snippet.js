import React from 'react'

export default function Snippet({ children }) {
    return (
        <pre>
          <div className="flex">
            <button className="ml-auto px-1 rounded-md shadow border-2 focus:outline-none hover:bg-gray-700 active:bg-gray-600">Copy</button>
          </div>
          {children}
        </pre>
    )
}
import React from 'react'

export default function Article({ children }) {
    return (
        <div className="container mx-auto prose">
            {children}
        </div>
    )
}
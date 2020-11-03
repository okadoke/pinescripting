import React from 'react'

export default function Article(props) {
    console.log(props)
    return (
        <div className="max-w-2xl mx-auto prose">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}
import React from "react"
import { Heading1, Heading2, Heading3 } from "../../stories/Heading.stories"

export interface HeadingProps {
    level: 1 |  2 |  3
    children: React.ReactNode
}


export default function Heading({level, children}: HeadingProps) {
    const Component = ({
        1: Heading1,
        2: Heading2,
        3: Heading3
    }[level])

    return (
        <h1> { children } </h1>
    )
}
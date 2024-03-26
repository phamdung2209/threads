import React from 'react'
import { Link } from 'react-router-dom'

type TProps = {
    to?: string
    onClick?: () => void
    passProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Buttons = ({
    to,
    onClick,
    children,
    className,
    ...passProps
}: {
    to?: string
    onClick?: () => void
    children: Readonly<React.ReactNode>
    className?: string
    passProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}) => {
    let Comp: React.ElementType = 'button'
    const props: TProps = {
        onClick,
        ...passProps,
    }

    if (to) {
        Comp = Link
        props.to = to
    }

    return (
        <Comp className={className} {...props}>
            {children}
        </Comp>
    )
}

export default Buttons

import { ButtonHTMLAttributes  } from 'react'

import "./styles.scss"

interface PressButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function PressButton({text, ...rest}: PressButtonProps) {
    return(
        <button className="pressButton" {...rest}>
        {text}
        </button>
    )
}
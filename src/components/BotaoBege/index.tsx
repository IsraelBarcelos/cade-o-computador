import { ButtonHTMLAttributes } from "react"
import "./styles.scss"

type BotaoBegeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}


export function BotaoBege(props : BotaoBegeProps) {
  return (
    <button className="botao-bege" {...props}>
      {props.children}
    </button>
  )
}
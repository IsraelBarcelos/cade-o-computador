
import "./styles.scss"

type OrangeBoxProps = {
    children: React.ReactNode
}

export function OrangeBox({children} : OrangeBoxProps) {
    return (
        <div className="orange-box">
            {children}
        </div>
    )
}
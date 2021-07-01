import "../styles/area-de-trabalho.scss"

type AreaDeTrabalhoPropsType = {
    children: React.ReactNode
}

export function AreaDeTrabalho(props: AreaDeTrabalhoPropsType) {
    return (
        <div className="area">
            {props.children}
        </div>
    )
}


import "./styles.scss"

import computadores from "../../assets/images/computers.svg"

export function Titulo(){
    return (
        <div className="titulo">
            <img src={computadores} alt="Computers" />
            <h1>
                Cadê o computador?
            </h1>
        </div>
    )
}

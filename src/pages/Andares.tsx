import { PressButton } from "../components/PressButton"

import "../styles/andares.scss"

export function Andares() {

  const andares = [1,2,3,4,5,6,7,8,9,10]

  /*
      Página de Andares

    Esta página deve listar os andares da defensoria, como o projeto é
    limitado à unidade, deve ser hardcoded, porém deve ser utilizado
    props e components para cada botão criado.
  */

  return (
    <div className="container">
      <div className="content">
        {
          andares.map((andar, index) => {
            return <PressButton key={index} text={`${andar}° andar`} />
          })
        }
      </div>
      <div className="calendario"> 1231232</div>

    </div>
  );
}
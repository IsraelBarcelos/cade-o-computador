import { PressButton } from "../../components/PressButton"

import "./styles.scss"

export function Andares() {

  const andares = [1,2,3,4,5,6,7,8,9,10]

  /*
      Página de Andares

    Esta página deve listar os andares da defensoria, como o projeto é
    limitado à unidade, deve ser hardcoded, porém deve ser utilizado
    props e components para cada botão criado.
  */

  return (
    <div className='some-page-wrapper'>
      <div className='row'>
        <div className='column'>
          <div className='blue-column'>
            Some Text in Column One
          </div>
        </div>
        <div className='column'>
          <div className='green-column'>
            Some Text in Column Two
          </div>
        </div>
      </div>
    </div>    
  );
}


{/*<div className="container">
      <div className="content">
        {
          andares.map((andar, index) => {
            return <PressButton key={index} text={`${andar}° andar`} />
          })
        }
      </div>
      <div className="calendario"> 1231232</div>

      </div>*/}
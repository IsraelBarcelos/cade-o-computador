import { Aside } from "../../components/Aside";
import { OrangeBox } from "../../components/OrangeBox";
import { PressButton } from "../../components/PressButton"

import "./styles.scss"

export function Andares() {

  const andares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  /*
      Página de Andares

    Esta página deve listar os andares da defensoria, como o projeto é
    limitado à unidade, deve ser hardcoded, porém deve ser utilizado
    props e components para cada botão criado.
  */

  return (
    <div className="andares-cointainer">

      <Aside>
        <div className="buttons">
          {
            andares.map(andar => {
              return <PressButton text={`${andar}º andar`} />
            })
          }
        </div>
      </Aside>
      
      <OrangeBox>
        <header className="title-andares">
          <span>O que tem para hoje?</span>
        </header>
      </OrangeBox>

    </div>
  );
}
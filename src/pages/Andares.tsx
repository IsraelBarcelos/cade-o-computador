import { PressButton } from "../components/PressButton"

import "../styles/andares.scss"

export function Andares() {

  const andares = ['1º andar','2º andar','3º andar','4º andar','5º andar','6º andar','7º andar','8º andar','9º andar','10º andar',]

  /*
      Página de Andares

    Esta página deve listar os andares da defensoria, como o projeto é
    limitado à unidade, deve ser hardcoded, porém deve ser utilizado
    props e components para cada botão criado.
  */

  return (
    <div className="container">
      <main className="content">
        {
          andares.map((andar, index) => {
            return <PressButton key={index} text={andar} />
          })
        }
      </main>
    </div>
  );
}
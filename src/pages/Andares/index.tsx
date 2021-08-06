import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
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
    <div className="andares-container">
      <Aside>
        <div className="buttons">
          {
            andares.map((andar, index) => {
              return <PressButton key={index} text={`${andar}º andar`} />
            })
          }
        </div>
      </Aside>

      <OrangeBox>
        <div className="andares-page">
          <header className="title-andares">
            <span className="span-titulo">O que tem para hoje?</span>
          </header>


          <div className="calendario">
            <div className="informacoes-dias">

              <div className="info-dia">
                <table className="div-tabela">
                  <thead className="cabecalho-tabela">
                    <tr className="linha-cabecalho-tabela">
                      <th className="linha-cabecalho">
                        Segunda-feira
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="linha-tabela">
                      <td>Info1</td>
                    </tr>
                    <tr>
                      <td>Info2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tabela-dias">

              </div>
            </div>

          </div>

        </div>
        <hr />
        <Footer>
          Aqui um texto footer
        </Footer>
      </OrangeBox>

    </div>
  );
}
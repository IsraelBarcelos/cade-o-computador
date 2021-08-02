import { FormEvent } from "react"

import { BotaoBege } from "../../components/BotaoBege"

import githubLogo from "../../assets/images/githubLogo.svg"
import googleLogo from '../../assets/images/googleLogo.svg'
import "./styles.scss"



export function Login() {

  function handleForm(event: FormEvent) {
    event.preventDefault()

    return;
  }

  return (

    /* 
      Página inicial do projeto
      Deve conter:

      -Área de login;
      -Criação de oAuth;
      -Storage dos dados a partir dessa pagina;
      -Receber redirecionamentos de usuários não logados.
    */

    <div className="login-page">

      <header className="title-login">
        Faça o seu login
      </header>

      <form onSubmit={handleForm}>
        <div className="login-fields">

          <div className="login-field">
            <label htmlFor="email">E-mail</label>
            <input className="input-field" type="text" />
          </div>

          <div className="login-field">
            <label htmlFor="senha">Senha</label>
            <input className="input-field" type="password" />
          </div>
        </div>

        <div className="login-buttons">
          <div className="linha1">
          <BotaoBege>
              Entrar
            </BotaoBege>
          </div>

          <div className="linha2">
            

            <BotaoBege>
              <img src={googleLogo} alt="Google" /> <span>Google</span>
            </BotaoBege>
            <BotaoBege>
              <img src={githubLogo} alt="GitHub" /> <span>GitHub</span>
            </BotaoBege>
          </div>
        </div>

      </form>
    </div>
  )
}
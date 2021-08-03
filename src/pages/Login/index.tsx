import { FormEvent, useState } from "react"

import { BotaoBege } from "../../components/BotaoBege"

import githubLogo from "../../assets/images/githubLogo.svg"
import googleLogo from '../../assets/images/googleLogo.svg'
import "./styles.scss"



export function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleForm(event: FormEvent) {
    event.preventDefault()
    const dataSent = {
      email,
      password
    }
    console.log(dataSent)
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
        <span>Faça o seu login</span>
      </header>

      <form onSubmit={handleForm}>
        <div className="login-fields">

          <div className="login-field">
            <label htmlFor="email">E-mail</label>
            <input className="input-field" type="text" value={email} onChange={event => setEmail(event.target.value)} />
          </div>

          <div className="login-field">
            <label htmlFor="senha">Senha</label>
            <input className="input-field" type="password" value={password} onChange={event => setPassword(event.target.value)} />
          </div>
        </div>

        <div className="login-buttons">
          <div className="linha1">
          <BotaoBege type="submit">
              <span>Entrar</span>
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
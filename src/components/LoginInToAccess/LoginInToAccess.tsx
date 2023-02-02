import * as S from './style'
import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { UserAuth } from '../../context/AuthContext'

export function LoginInToAccess() {
  const { googleSignIn } = UserAuth()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <S.loginInToAccess isVisible={true}>
      <div className="alertBox">
        <div className="background">
          <img
            src="src\assets\Meme-erro.jpg"
            alt="Imagem de garota sorrindo e fogo ao fundo"
          />
          <div className="absolute"></div>
          <div id="oops">
            <FiAlertCircle size={90} />
            <h2>OOPS!</h2>
          </div>
        </div>
        <div className="message">
          <p>Logue para poder acessar esta função.</p>
          <button className="button blue " onClick={() => handleGoogleSignIn()}>
            LOGAR
          </button>
          <button className="button red">VOLTAR</button>
        </div>
      </div>
    </S.loginInToAccess>
  )
}
{
}
function googleSignIn() {
  throw new Error('Function not implemented.')
}

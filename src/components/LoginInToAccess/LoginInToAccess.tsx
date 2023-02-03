import * as S from './style'
import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { UserAuth } from '../../context/AuthContext'
import { useTabs } from '../../providers/hook'
import { Link } from 'react-router-dom'

export function LoginInToAccess() {
  const { googleSignIn, user } = UserAuth()
  const { setShowLoginInToAccess, showLoginInToAccess, setInEditor } = useTabs()
  const handleGoogleSignIn = () => {
    try {
      googleSignIn()
    } catch (e) {
      console.log(e)
    }
  }

  if (user != undefined) {
    return (
      <S.loginInToAccess isVisible={showLoginInToAccess}>
        <div className="alertBox">
          <div className="background">
            <img
              src="src\assets\success.jpg"
              alt="Imagem de criança comemorando o sucesso"
            />
            <div className="absolute green"></div>
            <div id="oops">
              <IoCheckmarkCircleOutline size={90} />
              <h2>Sucesso</h2>
            </div>
          </div>
          <div className="message messageSuccess">
            <p>Obrigado por logar!</p>
            <Link to={'/editor'}>
              <button
                className="button editor "
                onClick={() => {
                  setInEditor('Editor')
                  setShowLoginInToAccess(false)
                }}
              >
                EDITOR
              </button>
            </Link>

            <button
              className="button green "
              onClick={() => setShowLoginInToAccess(false)}
            >
              VOLTAR
            </button>
          </div>
        </div>
      </S.loginInToAccess>
    )
  } else {
    return (
      <S.loginInToAccess isVisible={showLoginInToAccess}>
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
            <p>Logue com o google para mais funcionalidades.</p>
            <button
              className="button blue "
              onClick={() => handleGoogleSignIn()}
            >
              LOGAR
            </button>
            <button
              className="button red "
              onClick={() => setShowLoginInToAccess(false)}
            >
              VOLTAR
            </button>
          </div>
        </div>
      </S.loginInToAccess>
    )
  }
}

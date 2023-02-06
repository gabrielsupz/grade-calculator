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
              src="https://user-images.githubusercontent.com/102992996/216957519-0ff6cd2c-6372-4057-a68c-c43dce035336.jpg"
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
              src="data:image/jpeg;base64,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"
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

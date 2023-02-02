import React, { useState } from 'react'

import { IoReorderFourSharp } from 'react-icons/io5'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

import { Button } from '../Button/Button'
import { SocialLinks } from '../SocialLinks/SocialLinks'

import * as S from './style'

export function MenuMobile() {
  const { googleSignIn, user, logOut } = UserAuth()
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignOut = async () => {
    try {
      await logOut()
      alert('Deslogado com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  function menu() {
    if (user != null) {
      return (
        <S.ShowMenu isVisible={menuIsVisible}>
          <AiOutlineCloseCircle
            className="closeMenu"
            onClick={() => setMenuIsVisible(false)}
            size={40}
            color="#4d4d56"
          />
          <div className="contentMenu">
            <img
              className="userImage"
              src={user.photoURL}
              alt="Foto do usuário"
            />
            <Link to={'/'}>
              <Button title="Início" onClick={() => setMenuIsVisible(false)} />
            </Link>
            <Button title="Sair" onClick={handleSignOut} />
            <Link to={'/editor'}>
              <Button title="Editor" onClick={() => setMenuIsVisible(false)} />
            </Link>
          </div>

          <div className="contentMenu">
            <S.NoticeDiv>Redes sociais do criador</S.NoticeDiv>
            <SocialLinks />
          </div>
        </S.ShowMenu>
      )
    } else {
      return (
        <S.ShowMenu isVisible={menuIsVisible}>
          <AiOutlineCloseCircle
            className="closeMenu"
            onClick={() => setMenuIsVisible(false)}
            size={40}
          />
          <div className="contentMenu">
            <Button icon title="Entrar" onClick={handleGoogleSignIn} />
          </div>
          <div className="contentMenu">
            <S.NoticeDiv>Logue para mais funcionalidades:</S.NoticeDiv>
            <Button title="Editor" /> <Button title="Modelos pesonalizados" />
          </div>
        </S.ShowMenu>
      )
    }
  }

  return (
    <S.MenuMoBileBox>
      <IoReorderFourSharp
        onClick={() => {
          window.scrollTo(0, 0)
          setMenuIsVisible(true)
        }}
        size={55}
        color="var(--text-color)"
      />
      {menu()}
    </S.MenuMoBileBox>
  )
}

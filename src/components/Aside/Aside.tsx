import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button/Button'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { UserAuth } from '../../context/AuthContext'
import { MenuMobile } from '../MenuMobile/MenuMobile'
import { InfoMessage } from '../InfoMessage/InfoMessage'
import { AlertMessage } from '../AlertMessage/AlertMessage'

import * as S from './style'

export function Aside() {
  const { googleSignIn, user, logOut } = UserAuth()

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

  if (user != null) {
    return (
      <S.AsideMenu>
        {' '}
        <S.AsideTablet>
          <MenuMobile />
          <InfoMessage />

          <AlertMessage
            text="Calcule a sua nota final ou a nota que precisa tirar para atingir a
média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas"
          />
        </S.AsideTablet>
        <S.AsideFlex>
          <div>
            <img className="userImage" src={user.photoURL} alt="" />
            <Link to={'/'}>
              <Button title="Início" />
            </Link>
            <Button title="Sair" onClick={handleSignOut} />
            <Link to={'/editor'}>
              <Button title="Editor" />
            </Link>
          </div>

          <div>
            {' '}
            <S.NoticeDiv>Redes sociais do criador</S.NoticeDiv>
            <SocialLinks />
          </div>
        </S.AsideFlex>
      </S.AsideMenu>
    )
  } else {
    return (
      <S.AsideMenu>
        <S.AsideTablet>
          <MenuMobile />

          <InfoMessage />

          <AlertMessage
            text="Calcule a sua nota final ou a nota que precisa tirar para atingir a
média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas"
          />
        </S.AsideTablet>
        <S.AsideFlex>
          <div>
            <Button icon title="Entrar" onClick={handleGoogleSignIn} />
          </div>

          <div>
            <S.NoticeDiv>Logue para mais funcionalidades:</S.NoticeDiv>
            <Button title="Editor" /> <Button title="Modelos pesonalizados" />
          </div>
        </S.AsideFlex>
      </S.AsideMenu>
    )
  }
  return <></>
}

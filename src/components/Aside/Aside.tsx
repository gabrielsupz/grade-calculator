import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button/Button'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { UserAuth } from '../../context/AuthContext'

import * as S from './style'

interface AsideProps {
  logged: boolean
}

export function Aside({ logged }: AsideProps) {
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
    )
  } else {
    return (
      <S.AsideFlex>
        <div>
          <Button title="Entrar" onClick={handleGoogleSignIn} />
        </div>

        <div>
          {' '}
          <S.NoticeDiv>Logue para mais funcionalidades:</S.NoticeDiv>
          <Button title="Editor" /> <Button title="Modelos pesonalizados" />
        </div>
      </S.AsideFlex>
    )
  }
  return <></>
}

import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth, createUser } from '../../services'
import { Button } from '../Button/Button'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import * as S from './style'

interface AsideProps {
  logged: boolean
}

export function Aside({ logged }: AsideProps) {
  function login() {
    createUser()
      .then(() => alert('Logado com sucesso!'))
      .catch(error => alert(error))
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid
      } else {
      }
    })
  }, [])

  if (logged === true) {
    return (
      <S.AsideFlex>
        <div>
          <img
            className="userImage"
            src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
            alt=""
          />
          <Button title="Início" />
          <Link to={'/'}>
            <Button title="sair" />
          </Link>
        </div>

        <div>
          {' '}
          <S.NoticeDiv>Redes sociais do criador</S.NoticeDiv>
          <SocialLinks />
        </div>
      </S.AsideFlex>
    )
  }

  if (logged === false) {
    return (
      <S.AsideFlex>
        <div>
          <Button title="Entrar" onClick={login} />

          <Button title="Registre-se" />
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

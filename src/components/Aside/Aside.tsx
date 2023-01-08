import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import * as S from './style'

interface AsideProps {
  logged: boolean
}

export function Aside({ logged }: AsideProps) {
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
          <Link to={'/editor'}>
            <Button title="Entrar" />
          </Link>
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

import React from 'react'
import * as S from './style'
import { FiGithub, FiMail } from 'react-icons/fi'
import { TbBrandLinkedin } from 'react-icons/tb'
import { RxInstagramLogo } from 'react-icons/rx'
export function SocialLinks() {
  return (
    <S.SocialBox>
      <div className="socialLinks">
        <a target="_blank" href="https://www.instagram.com/gabriel_supz/">
          <RxInstagramLogo size={30} color="#b45cb0" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gabriel-suptitz-51340124a/"
        >
          {' '}
          <TbBrandLinkedin size={30} color="#8777cc" />
        </a>

        <a href="mailto:gabrielsuptitz@gmail.com">
          {' '}
          <FiMail size={30} color={'var(--text-color)'} />
        </a>

        <a target="_blank" href="https://github.com/gabrielsupz">
          {' '}
          <FiGithub size={30} color="#b3afc4" />
        </a>
      </div>
    </S.SocialBox>
  )
}

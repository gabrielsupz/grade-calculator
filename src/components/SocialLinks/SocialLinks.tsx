import React from 'react'
import * as S from './style'
export function SocialLinks() {
  return (
    <S.SocialBox>
      <div className="socialLinks">
        <a target="_blank" href="https://www.instagram.com/gabriel_supz/">
          <img src="src\assets\InstagramLogo.svg" alt="Instagram logo" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gabriel-suptitz-51340124a/"
        >
          {' '}
          <img src="src\assets\LinkedinLogo.svg" alt="Logo do Linkedin" />
        </a>

        <a href="mailto:gabrielsuptitz@gmail.com">
          {' '}
          <img src="src\assets\Mail.svg" alt="Icone de E-mail" />
        </a>

        <a target="_blank" href="https://github.com/gabrielsupz">
          {' '}
          <img src="src\assets\Github.svg" alt="Icone do Github" />
        </a>
      </div>
    </S.SocialBox>
  )
}

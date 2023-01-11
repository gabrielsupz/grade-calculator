import React from 'react'
import * as S from './style'
import { Period } from '../../types'
import { useTabs } from '../../providers/hook'
import { MdArticle } from 'react-icons/md'
interface InfoMessafeProps {
  text?: string | undefined
}

export function InfoMessage({ text }: InfoMessafeProps) {
  const { period } = useTabs()
  if (text === undefined) {
    if (period === 'bi') {
      return (
        <S.Info>
          <S.InfoRetract>
            <MdArticle size={55} />
          </S.InfoRetract>
          <S.InfoBox>
            <p>
              São contadas as notas dos 4 bimestres, sendo que a ultima tem seu
              valor dobrado
            </p>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 12H22.5"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 16H22.5"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 20H22.5"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </S.InfoBox>
        </S.Info>
      )
    }
    if (period === 'tri') {
      return (
        <S.Info>
          {' '}
          <S.InfoRetract>
            <MdArticle size={55} />
          </S.InfoRetract>
          <S.InfoBox>
            <p>
              São contadas as notas dos 3 trimestres, sendo que a segunda nota
              tem seu valor dobrado e a terceira tem seu valor triplicado
            </p>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 12H22.5"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 16H22.5"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 20H22.5"
                stroke="#E8E8EC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </S.InfoBox>
        </S.Info>
      )
    }
  }

  return (
    <S.Info>
      {' '}
      <S.InfoRetract>
        <MdArticle size={55} />
      </S.InfoRetract>
      <S.InfoBox>
        <p>{text}</p>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z"
            stroke="#E8E8EC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 12H22.5"
            stroke="#E8E8EC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 16H22.5"
            stroke="#E8E8EC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 20H22.5"
            stroke="#E8E8EC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </S.InfoBox>
    </S.Info>
  )
}

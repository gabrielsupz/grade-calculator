import React, { useRef, useState } from 'react'
import * as S from './style'

import { MdArticle } from 'react-icons/md'
import { useTabs } from '../../../providers/hook'
import { usePopper } from 'react-popper'

export function PMInfoMessage() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const { personalModelForInfo } = useTabs()
  const [showPopper, setShowPopper] = useState(false)

  const buttonRefInfo = useRef(null)
  const popperRefInfo = useRef(null)

  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(
    buttonRefInfo.current,
    popperRefInfo.current,

    {
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef
          }
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }
      ]
    }
  )

  if (personalModelForInfo.modelType === 'bimestre') {
    return (
      <S.Info>
        {' '}
        <S.InfoRetract>
          {showPopper ? (
            <S.InfoShow
              ref={popperRefInfo}
              style={styles.popper}
              {...attributes.popper}
            >
              <div ref={setArrowRef} style={styles.arrow} id="arrow" />
              <p>
                São contadas as notas dos 4 bimestres sendo a média
                <strong> {personalModelForInfo.average}</strong>, a primeira
                nota tem seu valor multiplicado por
                <strong> {personalModelForInfo.weight1}</strong> , a segunda por
                <strong> {personalModelForInfo.weight2}</strong> , a terceira
                por
                <strong> {personalModelForInfo.weight3}</strong> e a quarta por
                <strong> {personalModelForInfo.weight4}</strong>.
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
            </S.InfoShow>
          ) : null}

          <button
            ref={buttonRefInfo}
            onClick={() => setShowPopper(!showPopper)}
          >
            <MdArticle size={55} />
          </button>
        </S.InfoRetract>
        <S.InfoBox>
          <p>
            São contadas as notas dos 4 bimestres sendo a média
            <strong> {personalModelForInfo.average}</strong>, a primeira nota
            tem seu valor multiplicado por
            <strong> {personalModelForInfo.weight1}</strong> , a segunda por
            <strong> {personalModelForInfo.weight2}</strong> , a terceira por
            <strong> {personalModelForInfo.weight3}</strong> e a quarta por
            <strong> {personalModelForInfo.weight4}</strong>.
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
  if (personalModelForInfo.modelType === 'trimestre') {
    return (
      <S.Info>
        {' '}
        <S.InfoRetract>
          {showPopper ? (
            <S.InfoShow
              ref={popperRefInfo}
              style={styles.popper}
              {...attributes.popper}
            >
              <div ref={setArrowRef} style={styles.arrow} id="arrow" />
              <p>
                São contadas as notas dos 3 trimestres com a média
                <strong> {personalModelForInfo.average}</strong> , sendo que a
                primeira nota tem seu valor multiplicado por{' '}
                <strong> {personalModelForInfo.weight1}</strong>, a segunda por{' '}
                <strong> {personalModelForInfo.weight2}</strong> e a terceira
                por
                <strong> {personalModelForInfo.weight2}</strong>.
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
            </S.InfoShow>
          ) : null}

          <button
            ref={buttonRefInfo}
            onClick={() => setShowPopper(!showPopper)}
          >
            <MdArticle size={55} />
          </button>
        </S.InfoRetract>
        <S.InfoBox>
          <p>
            São contadas as notas dos 3 trimestres com a média
            <strong> {personalModelForInfo.average}</strong> , sendo que a
            primeira nota tem seu valor multiplicado por{' '}
            <strong> {personalModelForInfo.weight1}</strong>, a segunda por{' '}
            <strong> {personalModelForInfo.weight2}</strong> e a terceira por
            <strong> {personalModelForInfo.weight2}</strong>.
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
  } else {
    return (
      <>
        <p>Ou</p>
      </>
    )
  }
}

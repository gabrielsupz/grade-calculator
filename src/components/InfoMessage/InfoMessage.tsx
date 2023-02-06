import React, { useRef, useState } from 'react'
import * as S from './style'

import { useTabs } from '../../providers/hook'
import { MdArticle } from 'react-icons/md'
import { PMInfoMessage } from '../PersonalModels/PMInfoMessage'
import { usePopper } from 'react-popper'

interface InfoMessafeProps {
  text?: string | undefined
  inEditor?: boolean
}

export function InfoMessage({ text, inEditor }: InfoMessafeProps) {
  const { period, inPersonalModel } = useTabs()

  const [showPopper, setShowPopper] = useState(false)

  const buttonRefInfo = useRef(null)
  const popperRefInfo = useRef(null)

  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(
    buttonRefInfo.current,
    popperRefInfo.current,

    {
      placement: 'top',
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

  if (inEditor === true) {
    if (inPersonalModel === true) {
      return <PMInfoMessage />
    } else {
      return (
        <S.Info>
          <S.InfoRetract>
            {showPopper ? (
              <S.InfoShow
                ref={popperRefInfo}
                style={styles.popper}
                {...attributes.popper}
              >
                <div ref={setArrowRef} style={styles.arrow} id="arrow1" />
                <p>
                  A mensagem de informação será gerado automaticamente
                  dependendo do modelo criado.
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
              A mensagem de informação será gerado automaticamente dependendo do
              modelo criado.
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
  } else {
    if (text === undefined) {
      if (period === 'bi') {
        return (
          <S.Info>
            <S.InfoRetract>
              {showPopper ? (
                <S.InfoShow
                  ref={popperRefInfo}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <div ref={setArrowRef} style={styles.arrow} id="arrow1" />
                  <p>
                    São contadas as notas dos 4 bimestres, sendo que a ultima
                    tem seu valor dobrado
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
                São contadas as notas dos 4 bimestres, sendo que a ultima tem
                seu valor dobrado
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
              {showPopper ? (
                <S.InfoShow
                  ref={popperRefInfo}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <div ref={setArrowRef} style={styles.arrow} id="arrow1" />
                  <p>
                    São contadas as notas dos 3 trimestres, sendo que a segunda
                    nota tem seu valor dobrado e a terceira tem seu valor
                    triplicado
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
          {showPopper ? (
            <S.InfoShow
              ref={popperRefInfo}
              style={styles.popper}
              {...attributes.popper}
            >
              <div ref={setArrowRef} style={styles.arrow} id="arrow1" />
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
}

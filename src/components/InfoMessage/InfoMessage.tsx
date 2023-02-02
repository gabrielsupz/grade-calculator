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
                <img src="src\assets\Info.svg" alt="ícone de informação" />
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
            <img src="src\assets\Info.svg" alt="ícone de informação" />
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
                  <img src="src\assets\Info.svg" alt="ícone de informação" />
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
              <img src="src\assets\Info.svg" alt="ícone de informação" />
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
                  <img src="src\assets\Info.svg" alt="ícone de informação" />
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
              <img src="src\assets\Info.svg" alt="ícone de informação" />
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
              <img src="src\assets\Info.svg" alt="ícone de informação" />
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
          <img src="src\assets\Info.svg" alt="ícone de informação" />
        </S.InfoBox>
      </S.Info>
    )
  }
}

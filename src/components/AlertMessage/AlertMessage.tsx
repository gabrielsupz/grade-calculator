import React, { useRef, useState } from 'react'
import { IoInformationCircle } from 'react-icons/io5'
import { usePopper } from 'react-popper'
import { useTabs } from '../../providers/hook'
import * as S from './style'

interface AlertMessageProps {
  text?: string
  inEditor?: boolean
}

export function AlertMessage({ text, inEditor }: AlertMessageProps) {
  const { inPersonalModel } = useTabs()

  const [showPopper, setShowPopper] = useState(false)

  const buttonRefAlert = useRef(null)
  const popperRefAlert = useRef(null)

  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(
    buttonRefAlert.current,
    popperRefAlert.current,
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

  if (inEditor) {
    if (inPersonalModel) {
      return (
        <S.Alert>
          <S.AlertRetract>
            {showPopper ? (
              <S.AlertShowMobile
                ref={popperRefAlert}
                style={styles.popper}
                {...attributes.popper}
              >
                <div ref={setArrowRef} style={styles.arrow} id="arrow" />
                <p>
                  Calcule a nota necessária para atingir a média ou calcule sua
                  nota final com base no modelo escolhido.
                </p>
                <img
                  src="src\assets\Alert.svg"
                  alt="Ícone da mensagem de explicação"
                />
              </S.AlertShowMobile>
            ) : null}
            <button
              ref={buttonRefAlert}
              onClick={() => setShowPopper(!showPopper)}
            >
              <IoInformationCircle size={55} />
            </button>
          </S.AlertRetract>

          <S.AlertShowDeskTop>
            <p>
              Calcule a nota necessária para atingir a média ou calcule sua nota
              final com base no modelo escolhido.
            </p>
            <img
              src="src\assets\Alert.svg"
              alt="Ícone da mensagem de explicação"
            />
          </S.AlertShowDeskTop>
        </S.Alert>
      )
    } else {
      return (
        <S.Alert>
          <S.AlertRetract>
            {showPopper ? (
              <S.AlertShowMobile
                ref={popperRefAlert}
                style={styles.popper}
                {...attributes.popper}
              >
                <div ref={setArrowRef} style={styles.arrow} id="arrow" />
                <p>
                  Crie seu próprio modelo de cálculo, sendo bimestral ou
                  trimestral!
                </p>
                <img
                  src="src\assets\Alert.svg"
                  alt="Ícone da mensagem de explicação"
                />
              </S.AlertShowMobile>
            ) : null}

            <button
              ref={buttonRefAlert}
              onClick={() => setShowPopper(!showPopper)}
            >
              <IoInformationCircle size={55} />
            </button>
          </S.AlertRetract>

          <S.AlertShowDeskTop>
            <p>
              {' '}
              Crie seu próprio modelo de cálculo, sendo bimestral ou trimestral!
            </p>
            <img
              src="src\assets\Alert.svg"
              alt="Ícone da mensagem de explicação"
            />
          </S.AlertShowDeskTop>
        </S.Alert>
      )
    }
  } else {
    return (
      <S.Alert>
        <S.AlertRetract>
          {showPopper ? (
            <S.AlertShowMobile
              ref={popperRefAlert}
              style={styles.popper}
              {...attributes.popper}
            >
              <div ref={setArrowRef} style={styles.arrow} id="arrow" />
              <p>{text}</p>
              <img
                src="src\assets\Alert.svg"
                alt="Ícone da mensagem de explicação"
              />
            </S.AlertShowMobile>
          ) : null}

          <button>
            <IoInformationCircle size={55} />
          </button>
        </S.AlertRetract>

        <S.AlertShowDeskTop>
          <p>{text}</p>
          <img
            src="src\assets\Alert.svg"
            alt="Ícone da mensagem de explicação"
          />
        </S.AlertShowDeskTop>
      </S.Alert>
    )
  }
}

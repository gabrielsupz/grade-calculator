import React from 'react'
import { IoInformationCircle } from 'react-icons/io5'
import * as S from './style'

interface AlertMessageProps {
  text: string
}

export function AlertMessage({ text }: AlertMessageProps) {
  return (
    <S.Alert>
      <S.AlertRetract>
        {' '}
        <IoInformationCircle size={55} />
      </S.AlertRetract>

      <S.AlertShow>
        <p>{text}</p>
        <svg
          width="31"
          height="28"
          viewBox="0 0 31 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z"
            stroke="#ECE8E8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2963 12.7107H15.2223V18.6116H16.1482"
            stroke="#ECE8E8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z"
            fill="#ECE8E8"
          />
        </svg>
      </S.AlertShow>
    </S.Alert>
  )
}

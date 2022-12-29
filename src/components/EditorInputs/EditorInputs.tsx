import React from 'react'
import { Button } from '../Button/Button'
import { GradeWeightBox } from '../GradeWeightBox/GradeWeightBox'
import * as S from './style'
export function EditorInputs() {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    console.log(data)
  }

  return (
    <S.EverythingBox>
      <S.FormBox onSubmit={handleSubmit}>
        <h2>Crie seu modelo</h2>{' '}
        <S.FormInputsBox>
          <S.GradeWeightBox>
            <h3>Peso das notas</h3>

            <GradeWeightBox numberGrade="1" />
            <GradeWeightBox numberGrade="2" />
            <GradeWeightBox numberGrade="3" />
            <GradeWeightBox numberGrade="4" />
          </S.GradeWeightBox>

          <S.ModelAndName>
            <div>
              <h3>Modelo</h3>
              <select name="modelo">
                <option value="bimestre">Bimestre</option>
                <option value="trimestre">Trimestre</option>
              </select>
            </div>

            <div>
              <h3>Nome do modelo</h3>
              <S.NameInput type="text" placeholder="Nome do modelo" />
            </div>
          </S.ModelAndName>
        </S.FormInputsBox>
        <Button id="submitModelButton" type="submit" title="Salvar" />
      </S.FormBox>
    </S.EverythingBox>
  )
}

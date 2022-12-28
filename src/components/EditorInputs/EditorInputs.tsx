import React from 'react'
import { Button } from '../Button/Button'
import * as S from './style'
export function EditorInputs() {
  return (
    <S.EverythingBox>
      <h2>Crie seu modelo</h2>{' '}
      <S.FormInputsBox>
        <div>
          <h3>Peso das notas</h3>

          <div>
            <label htmlFor="weight1">Nota 1:</label>
            <input id="weight1" type="number" />
          </div>
          <div>
            <label htmlFor="weight2">Nota 2:</label>
            <input id="weight2" type="number" />
          </div>
          <div>
            <label htmlFor="weight3">Nota 3:</label>
            <input id="weight3" type="number" />
          </div>
          <div>
            <label htmlFor="weight4">Nota 4:</label>
            <input id="weight4" type="number" />
          </div>
        </div>
        <div>
          <h3>Modelo</h3>
          <select name="modelo">
            <option value="bimestre">Bimestre</option>
            <option value="trimestre">Trimestre</option>
          </select>

          <h3>Nome do modelo</h3>
          <input type="text" />
        </div>
      </S.FormInputsBox>
      <Button id="submitModelButton" type="submit" title="Salvar" />
    </S.EverythingBox>
  )
}

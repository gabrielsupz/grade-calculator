import React from 'react'
import { Button } from '../Button/Button'
import * as S from './style'
export function EditorInputs() {
  return (
    <S.EverythingBox>
      <h2>Crie seu modelo</h2>
      <S.InputsBox>
        <div>
          <h3>Peso das notas</h3>
          <div>
            <label htmlFor="weight1">Peso 1</label>
            <input id="weight1" type="number" />
          </div>
          <div>
            <label htmlFor="weight2">Peso 2</label>
            <input id="weight2" type="number" />
          </div>
          <div>
            <label htmlFor="weight3">Peso 3</label>
            <input id="weight3" type="number" />
          </div>
          <div>
            <label htmlFor="weight4">Peso 4</label>
            <input id="weight4" type="number" />
          </div>
        </div>
        <div>
          <h3>Modelo</h3>
          <button>Bimestre</button>
          <button>Trimestre</button>

          <h3>Nome do modelo</h3>
          <input type="text" />
        </div>
      </S.InputsBox>
      <Button title="Salvar" />
    </S.EverythingBox>
  )
}

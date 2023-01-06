import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../providers/hook'
import { Button } from '../Button/Button'

import * as S from './style'
export function EditorInputs() {
  const { inEditor } = useAuth()

  if (inEditor === 'Editor') {
    const { register, handleSubmit } = useForm()
    const min = 1
    const max = 9
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(1)
    const [value3, setValue3] = useState(1)
    const [value4, setValue4] = useState(1)

    const handleChange1 = event => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)))
      setValue1(value)
    }
    const handleChange2 = event => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)))
      setValue2(value)
    }
    const handleChange3 = event => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)))
      setValue3(value)
    }
    const handleChange4 = event => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)))
      setValue4(value)
    }
    const onSubmit = e => {
      console.log(e)
    }
    type modelStateProps = 'bimestre' | 'trimestre'

    const [model, setModel] = useState<modelStateProps>('bimestre')
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const select = e.currentTarget.value

      if (select === 'bimestre') {
        setModel('bimestre')
      }

      if (select === 'trimestre') {
        setModel('trimestre')
      }
    }

    function gradeWeightInputs() {
      if (model === 'bimestre') {
        return (
          <S.GradeWeightBox>
            <h3>Peso das notas</h3>

            <S.GradeWeightLabel>
              Nota :1
              <input
                {...register('weight1')}
                onChange={handleChange1}
                value={value1}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 2
              <input
                {...register('weight2')}
                onChange={handleChange2}
                value={value2}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 3
              <input
                {...register('weight3')}
                onChange={handleChange3}
                value={value3}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 4
              <input
                {...register('weight4')}
                onChange={handleChange4}
                value={value4}
                type="number"
              />
            </S.GradeWeightLabel>
          </S.GradeWeightBox>
        )
      }
      if (model === 'trimestre') {
        return (
          <S.GradeWeightBox>
            <h3>Peso das notas</h3>

            <S.GradeWeightLabel>
              Nota :1
              <input
                {...register('weight1')}
                onChange={handleChange1}
                value={value1}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 2
              <input
                {...register('weight2')}
                onChange={handleChange2}
                value={value2}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 3
              <input
                {...register('weight3')}
                onChange={handleChange3}
                value={value3}
                type="number"
              />
            </S.GradeWeightLabel>
          </S.GradeWeightBox>
        )
      }
      return <></>
    }

    return (
      <S.EverythingBox>
        <S.FormBox onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Crie seu modelo</legend>
            <S.FormInputsBox>
              {gradeWeightInputs()}
              <S.ModelAndName>
                <div>
                  <h3>Modelo</h3>
                  <select onChange={handleSelect} id="modelSelect">
                    <option value="bimestre">Bimestre</option>
                    <option value="trimestre">Trimestre</option>
                  </select>
                </div>

                <div>
                  <h3>Nome do modelo</h3>
                  <S.NameInput
                    {...register('modelName')}
                    type="text"
                    placeholder="Nome do modelo"
                    required
                  />
                </div>
              </S.ModelAndName>
            </S.FormInputsBox>
            <Button id="submitModelButton" type="submit" title="Salvar" />
          </fieldset>
        </S.FormBox>
      </S.EverythingBox>
    )
  }
  if (inEditor === 'Modelos') {
    return (
      <S.EverythingBox>
        <div>Modelo 1</div>
      </S.EverythingBox>
    )
  }

  return <></>
}

import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { useTabs } from '../../providers/hook'
import { Button } from '../Button/Button'
import {
  createModels,
  CreateModelsProps,
  getModels
} from '../../services/model'
import { UserAuth } from '../../context/AuthContext'
import { PMGradeInputs } from '../PersonalModels/PMGradeInputs'
import { PMNecessaryGradeInputs } from '../PersonalModels/PMNecessaryGradeInputs'
import { PMInputs } from '../PersonalModels/PMInputs'
import { PMItemList } from '../PersonalModels/PMItemList'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../services/firebase'
import { IoReturnDownBackOutline } from 'react-icons/io5'

import * as S from './style'

type modelStateProps = 'bimestre' | 'trimestre'

export function EditorInputs() {
  const { inEditor } = useTabs()
  const [inPersonalModel, setInPersonalModel] = useState<boolean | undefined>(
    false
  )
  const [atualPersonalModel, setAtualPersonalMOdel] =
    useState<CreateModelsProps>({} as CreateModelsProps)

  const { register, handleSubmit } = useForm()
  const min = 1
  const max = 9
  const [value1, setValue1] = useState<number | string>('')
  const [value2, setValue2] = useState<number | string>('')
  const [value3, setValue3] = useState<number | string>('')
  const [value4, setValue4] = useState<number | string>('')
  const [model, setModel] = useState<modelStateProps>('bimestre')

  if (inEditor === 'Editor') {
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

    const onSubmit = async data => {
      if (model === 'bimestre') {
        try {
          await createModels({
            modelName: data.modelName,
            modelType: 'bimestre',
            weight1: data.weight1,
            weight2: data.weight2,
            weight3: data.weight3,
            weight4: data.weight4,
            average: 60
          })
        } catch (e) {
          console.error('Error:', e)
        }
      }
      if (model === 'trimestre') {
        try {
          await createModels({
            modelName: data.modelName,
            modelType: 'trimestre',
            weight1: data.weight1,
            weight2: data.weight2,
            weight3: data.weight3,
            average: 60
          })
        } catch (e) {
          console.error('Error:', e)
        }
      }

      // await createModels(pessoalModel)
    }

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
                placeholder="0"
                {...register('weight1')}
                onChange={handleChange1}
                value={value1 === 0 ? '' : value1}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 2
              <input
                placeholder="0"
                {...register('weight2')}
                onChange={handleChange2}
                value={value2 === 0 ? '' : value2}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 3
              <input
                placeholder="0"
                {...register('weight3')}
                onChange={handleChange3}
                value={value3 === 0 ? '' : value3}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 4
              <input
                placeholder="0"
                {...register('weight4')}
                onChange={handleChange4}
                value={value4 === 0 ? '' : value4}
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
                placeholder="0"
                {...register('weight1')}
                onChange={handleChange1}
                value={value1 === 0 ? '' : value1}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 2
              <input
                placeholder="0"
                {...register('weight2')}
                onChange={handleChange2}
                value={value2 === 0 ? '' : value2}
                type="number"
              />
            </S.GradeWeightLabel>
            <S.GradeWeightLabel>
              Nota: 3
              <input
                placeholder="0"
                {...register('weight3')}
                onChange={handleChange3}
                value={value3 === 0 ? '' : value3}
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
                  <h3>Média</h3>
                  <select {...register('average')}>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
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
    if (model === 'trimestre') {
      setModel('bimestre')
    }

    if (inPersonalModel) {
      return (
        <S.EverythingBox>
          <h3 className="closeAndNamePersonalModel">
            <strong>{atualPersonalModel.modelName}</strong>{' '}
            <IoReturnDownBackOutline
              size={30}
              onClick={() => setInPersonalModel(false)}
            />
          </h3>
          <div className="pessoalModelInputs">
            <PMInputs
              average={atualPersonalModel.average}
              modelName={atualPersonalModel.modelName}
              modelType={atualPersonalModel.modelType}
              weight1={atualPersonalModel.weight1}
              weight2={atualPersonalModel.weight2}
              weight3={atualPersonalModel.weight3}
              weight4={atualPersonalModel.weight4}
            />
          </div>
        </S.EverythingBox>
      )
    }
    if (inPersonalModel === false) {
      function setPersonalModel(model: CreateModelsProps) {
        setAtualPersonalMOdel(model)
        setInPersonalModel(true)
      }
      return (
        <S.EverythingBox>
          <h2>
            Meus Modelos{' '}
            <img src="src\assets\Folder.svg" alt="ícone de pasta" />
          </h2>
          <div className="pessoalModelInputs">
            <ul>
              <Button
                id="selectPersonalModel"
                onClick={() =>
                  setPersonalModel({
                    average: 60,
                    modelName: 'Modelo da casa da mae joana',
                    weight1: 1,
                    modelType: 'bimestre',
                    weight2: 1,
                    weight3: 2,
                    weight4: 2
                  })
                }
                title={'Modelo 1'}
              ></Button>
              <Button
                id="selectPersonalModel"
                onClick={() =>
                  setPersonalModel({
                    average: 60,
                    modelName: 'Gabriel',
                    weight1: 1,
                    modelType: 'bimestre',
                    weight2: 1,
                    weight3: 2,
                    weight4: 2
                  })
                }
                title={'Modelo 1'}
              ></Button>
              <Button
                id="selectPersonalModel"
                onClick={() =>
                  setPersonalModel({
                    average: 60,
                    modelName: 'Gabriel',
                    weight1: 1,
                    modelType: 'bimestre',
                    weight2: 1,
                    weight3: 2,
                    weight4: 2
                  })
                }
                title={'Modelo 1'}
              ></Button>
            </ul>
          </div>
        </S.EverythingBox>
      )
    }
  }
  return <></>
}

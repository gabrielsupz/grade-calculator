import React from 'react'
import { CreateModelsProps } from '../../../services/model'
import { PMGradeInputs } from '../PMGradeInputs'
import { PMNecessaryGradeInputs } from '../PMNecessaryGradeInputs'
import * as S from './style'
export function PMInputs({
  average,
  modelName,
  modelType,
  weight1,
  weight2,
  weight3,
  weight4
}: CreateModelsProps) {
  return (
    <S.ContentPersonalModel>
      <PMGradeInputs
        modelName={modelName}
        modelType={modelType}
        weight1={weight1}
        weight2={weight2}
        weight3={weight3}
        weight4={weight4}
        average={average}
      />
      <PMNecessaryGradeInputs
        modelName={modelName}
        modelType={modelType}
        weight1={weight1}
        weight2={weight2}
        weight3={weight3}
        weight4={weight4}
        average={average}
      />
    </S.ContentPersonalModel>
  )
}

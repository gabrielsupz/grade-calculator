import { collection, getDocs, addDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export async function getModels(UId = 'ga4bP7s0d1WOnEJeIRp1P0N40qx2') {
  return new Promise((resolve, reject) => {
    const modelsCollection = collection(firestore, `users/${UId}/models`)
    getDocs(modelsCollection).then(data => {
      let models = [] as any

      data.forEach(doc => {
        let docData = { id: doc.id, ...doc.data() }
        return models.push(docData)
      })
      console.log(models)
    })
  })
}

export interface CreateModelsProps {
  modelName: string
  modelType: 'bimestre' | 'trimestre'
  weight1: number
  weight2: number
  weight3: number
  weight4?: number | undefined
  average: number
}

export async function createModels(
  {
    modelName,
    modelType,
    weight1,
    weight2,
    weight3,
    weight4,
    average
  }: CreateModelsProps,
  UId = 'ga4bP7s0d1WOnEJeIRp1P0N40qx2'
) {
  if (weight4 === undefined) {
    try {
      const docRef = await addDoc(
        collection(firestore, `users/${UId}/models`),
        {
          modelName: modelName,
          modelType: modelType,
          weight1: weight1,
          weight2: weight2,
          weight3: weight3,
          average: average
        }
      )
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  } else {
    try {
      const docRef = await addDoc(
        collection(firestore, `users/${UId}/models`),
        {
          modelName: modelName,
          modelType: modelType,
          weight1: weight1,
          weight2: weight2,
          weight3: weight3,
          weight4: weight4
        }
      )
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}

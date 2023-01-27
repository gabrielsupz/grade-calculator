import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export async function getModels(UId) {
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

export async function deleteModel(UId, idModel: string | undefined) {
  if (idModel != undefined && UId != undefined) {
    await deleteDoc(doc(firestore, `users/${UId}/models`, idModel))
  }
}

export interface CreateModelsProps {
  modelName: string
  modelType: 'bimestre' | 'trimestre'
  weight1: number
  weight2: number
  weight3: number
  weight4?: number | undefined
  average: number
  id?: string
}

export async function createModels(
  UId,
  {
    modelName,
    modelType,
    weight1,
    weight2,
    weight3,
    weight4,
    average
  }: CreateModelsProps
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
          weight4: weight4,
          average: average
        }
      )
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
}

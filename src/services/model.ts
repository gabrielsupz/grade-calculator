import { collection, getDocs } from 'firebase/firestore'
import { firestore } from './firebase'

const querySnapshot = await getDocs(collection(firestore, 'users'))
querySnapshot.forEach(doc => {
  console.log(`${doc.id} => ${doc.data()}`)
})

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

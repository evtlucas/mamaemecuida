import firebase from 'firebase'
import 'firebase/firestore'
import { config } from './firebaseConfig'

let db = null
/*
if (process.env.NODE_ENV === 'development') {
  const firebaseConfig = {
    apiKey: config.apiKey,
    projectId: config.projectId,
    databaseURL: 'http://localhost:9000?ns=' + config.projectId
  }
  const app = firebase.initializeApp(firebaseConfig)
  app.functions().useFunctionsEmulator('http://localhost:5001')
  db = firebase.firestore()
  db.settings({ host: 'localhost:8081', ssl: false })
} else {
  firebase.initializeApp(config)
  db = firebase.firestore()
}
*/

firebase.initializeApp(config)
db = firebase.firestore()

// firebase utils
const auth = firebase.auth()
const currentUser = auth.currentUser
const categoriesCollection = db.collection('categories')
const productsCollection = db.collection('products')

export {
  db,
  auth,
  currentUser,
  categoriesCollection,
  productsCollection
}

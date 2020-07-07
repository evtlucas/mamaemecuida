import firebase from 'firebase'
import 'firebase/firestore'
import { config } from './firebaseConfig'

let db = null

firebase.initializeApp(config)
db = firebase.firestore()
if (process.env.NODE_ENV === 'production') {
  firebase.analytics()
}

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

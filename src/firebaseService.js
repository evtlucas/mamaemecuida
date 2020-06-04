import firebase from 'firebase'
import 'firebase/firestore'
import { config } from './firebaseConfig'

firebase.initializeApp(config)
firebase.firestore().settings({ experimentalForceLongPolling: true })

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

export {
  db,
  auth,
  currentUser
}

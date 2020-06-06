const fb = require('../firebaseService')

export default async function (email, password) {
  return await fb.auth.signInWithEmailAndPassword(email, password)
}

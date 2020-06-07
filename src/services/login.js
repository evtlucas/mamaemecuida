const fb = require('../firebaseService')

export async function signIn (email, password) {
  return await fb.auth.signInWithEmailAndPassword(email, password)
}

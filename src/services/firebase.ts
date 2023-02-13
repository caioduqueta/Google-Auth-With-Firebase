
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAPYFWZoXgID4Qg-jHUBanfN7XIZyGF1og',
  authDomain: 'auth-firebase-78091.firebaseapp.com',
  projectId: 'auth-firebase-78091',
  storageBucket: 'auth-firebase-78091.appspot.com',
  messagingSenderId: '390401591072',
  appId: '1:390401591072:web:215214d445b9a58cfc7945',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

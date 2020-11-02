import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAsU2FhPWMAd-qPdgJWLaa0Rycf3fTjv3g',
  authDomain: 'clone-dfc14.firebaseapp.com',
  databaseURL: 'https://clone-dfc14.firebaseio.com',
  projectId: 'clone-dfc14',
  storageBucket: 'clone-dfc14.appspot.com',
  messagingSenderId: '214851256217',
  appId: '1:214851256217:web:5e4620d113ff773ef21d08',
  measurementId: 'G-87B4DLDFGW',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase

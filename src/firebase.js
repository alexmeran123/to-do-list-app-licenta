import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDf8iDzroXB0ExRYg8UgOA44uqNNjGAzv0',
  authDomain: 'todolist-licenta.firebaseapp.com',
  databaseURL: 'https://todolist-licenta-default-rtdb.firebaseio.com',
  projectId: 'todolist-licenta',
  storageBucket: 'todolist-licenta.appspot.com',
  messagingSenderId: '366562408119',
  appId: '1:366562408119:web:30839f5c5cdc921e8b3f32',
})

export { firebaseConfig as firebase }

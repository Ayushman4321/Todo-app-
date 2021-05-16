import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6UiyH3vkM98vWusORGfZHVldDDiXcc00",
    authDomain: "todo-app-6c104.firebaseapp.com",
    projectId: "todo-app-6c104",
    storageBucket: "todo-app-6c104.appspot.com",
    messagingSenderId: "980190566447",
    appId: "1:980190566447:web:601d35db2901dcc7638eda",
    measurementId: "G-H9HHS42MTH"
})

const db = firebaseApp.firestore()

export default db;
import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCVRzz0wRUBBWiGpcrI2NTCazwXXxHPgdE",
    authDomain: "spacetraderweb-30703.firebaseapp.com",
    databaseURL: "https://spacetraderweb-30703.firebaseio.com",
    projectId: "spacetraderweb-30703",
    storageBucket: "spacetraderweb-30703.appspot.com",
    messagingSenderId: "996674489456"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.database()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.ref('Users')

// const t = () => {
//     console.log(usersCollection)
// }

// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')
const planetsCollection = db.ref('Init Planets')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    // postsCollection,
    planetsCollection
    // likesCollection
}
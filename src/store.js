// import Vue from 'vue'
// import Vuex from 'vuex'
// const fb = require('./firebaseConfig.js')

// Vue.use(Vuex)

// // handle page reload
// fb.auth.onAuthStateChanged(user => {
//     if (user) {
//         store.commit('setCurrentUser', user)
//         store.dispatch('fetchUserProfile')

//         fb.usersCollection.doc(user.uid).onSnapshot(doc => {
//             store.commit('setUserProfile', doc.data())
//         })

//         // realtime updates from our posts collection
//         // fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
//         //     // check if created by currentUser
//         //     let createdByCurrentUser
//         //     if (querySnapshot.docs.length) {
//         //         createdByCurrentUser = store.state.currentUser.uid == querySnapshot.docChanges[0].doc.data().userId ? true : false
//         //     }

//         //     // add new posts to hiddenPosts array after initial load
//         //     if (querySnapshot.docChanges.length !== querySnapshot.docs.length
//         //         && querySnapshot.docChanges[0].type == 'added' && !createdByCurrentUser) {

//         //         let post = querySnapshot.docChanges[0].doc.data()
//         //         post.id = querySnapshot.docChanges[0].doc.id

//         //         store.commit('setHiddenPosts', post)
//         //     } else {
//         //         let postsArray = []

//         //         querySnapshot.forEach(doc => {
//         //             let post = doc.data()
//         //             post.id = doc.id
//         //             postsArray.push(post)
//         //         })

//         //         store.commit('setPosts', postsArray)
//         //     }
//         // })
//     }
// })

// export const store = new Vuex.Store({
//     state: {
//         currentUser: null,
//         userProfile: {},
//         posts: [],
//         hiddenPosts: []
//     },
//     actions: {
//         clearData({ commit }) {
//             commit('setCurrentUser', null)
//             commit('setUserProfile', {})
//             commit('setPosts', null)
//             commit('setHiddenPosts', null)
//         },
//         fetchUserProfile({ commit, state }) {
//             fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
//                 commit('setUserProfile', res.data())
//             }).catch(err => {
//                 console.log(err)
//             })
//         },
//         updateProfile({ commit, state }, data) {
//             let email = data.email
//             let password = data.password
//             let fullname = data.fullname

//             fb.usersCollection.doc(state.currentUser.uid).update({ email, password, fullname }).then(user => {
//                 // update all posts by user to reflect new name
//                 // fb.postsCollection.where('userId', '==', state.currentUser.uid).get().then(docs => {
//                 //     docs.forEach(doc => {
//                 //         fb.postsCollection.doc(doc.id).update({
//                 //             useremail: email
//                 //         })
//                 //     })
//                 // })
//                 // update all comments by user to reflect new name
//                 // fb.commentsCollection.where('userId', '==', state.currentUser.uid).get().then(docs => {
//                 //     docs.forEach(doc => {
//                 //         fb.commentsCollection.doc(doc.id).update({
//                 //             userName: name
//                 //         })
//                 //     })
//                 // })
//             }).catch(err => {
//                 console.log(err)
//             })
//         }
//     },
//     mutations: {
//         setCurrentUser(state, val) {
//             state.currentUser = val
//         },
//         setUserProfile(state, val) {
//             state.userProfile = val
//         },
        
//     }
// })


// // import Vue from 'vue'
// // import Vuex from 'vuex'

// // Vue.use(Vuex)

// // export const store = new Vuex.Store({
// //     state: {
        
// //     },
// //     actions: {
        
// //     }, 
// //     mutations: {
        
// //     }
// // })






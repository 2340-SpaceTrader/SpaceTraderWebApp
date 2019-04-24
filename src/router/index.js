// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/HelloWorld',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
    
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import GameView from '@/components/GameView'
import Login from '@/components/Login'
import Marketplace from '@/components/Marketplace'
// import Navigation from '@/components/Navigation'
import Register from '@/components/Register'
import TravelOption from '@/components/TravelOption'
import NewGame from '@/components/NewGame'

// import Login from '@/components/Login'
// import Dashboard from '@/components/Dashboard'
// import Settings from '@/components/Settings'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        }, 

        {
            path: '*',
            redirect: '/login'
        },

        {
            path: '/',
            name: 'Login',
            component: Login
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/register',
            name: 'Register',
            component: Register
        },

        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            
        }, 
 
        {
            path: '/gameview',
            name: 'GameView',
            component: GameView,
            
        },

        {
            path: '/newgame',
            name: 'NewGame',
            component: NewGame,
            
        },

        {
            path: '/traveloption',
            name: 'TravelOption',
            component: TravelOption,
            
        },
        {
            path: '/marketplace',
            name: 'Marketplace',
            component: Marketplace,
            
        },
        // {
        //     path: '/navigation',
        //     name: 'Navigation',
        //     component: Navigation
        // }

        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login
        // },
        // {
        //     path: '/dashboard',
        //     name: 'Dashboard',
        //     component: Dashboard,
        //     meta: {
        //         requiresAuth: true
        //     }
        // },
        // {
        //     path: '/settings',
        //     name: 'Settings',
        //     component: Settings,
        //     meta: {
        //         requiresAuth: true
        //     }
        // }
    ]
})

// router.beforeEach((to, from, next) => {
//     // const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//     // const currentUser = firebase.auth().currentUser

//     if (requiresAuth && !currentUser) {
//         next('/login')
//     } else if (requiresAuth && currentUser) {
//         next()
//     } else {
//         next()
//     }
// })

export default router
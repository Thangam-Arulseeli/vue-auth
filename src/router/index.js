import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/user',
    name: 'users',
    component: () => import('../views/UserPage.vue'),
    // Part II - Local route guard (in route definition) -- To guard and allow only the autherized user to this page
          // beforeEnter(){
          //   alert("You're not authorized to use this page")
          //   return false;
          // },

    // Part - II - Local route guard (in route definition) -- Redirect to the home page when unautherized user comes
          // beforeEnter(to){
          //   alert('Please login first')
          //   if (to.name !== 'home'){
          //     return '/'
          //   }
          // },

      children: [ // ---Part III - Local route guard (In-the component -[when route updates with params] )  // Children for user route
          { path: '/user/:id',
            name: 'usersingle',   
            component: () => import('../views/UserSingle.vue'),
            props: true
          } 
        ]

  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Part - I --- Global route guard -- Applied with all navigation routes  -------------------------------
// How the routing sequence comes for each route --- Explained

// router.beforeEach((to) => {
//    // redirect to home path
//    if (to.name !== 'home'){
//       alert('You are not an autherized person to access the application, before registering your details')
//       return '/'
//    } 
// } )

// router.beforeResolve((to, from) => {
//   console.log('User authentication')
//   console.log("Coming From : " , from.fullPath)
//   console.log("Going To : " + to.fullPath)
// })

router.beforeEach(() => {
  console.log('Before route loaded....')
})

router.beforeResolve(() => {
  console.log('After route loaded...., before navigation.....')
})

router.afterEach(() => {
  console.log('After navigation!!!!!!')
})
// ----------------------------------------- 

export default router

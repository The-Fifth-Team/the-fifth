router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('X-auth')) {
      next({path: '/login'})
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.isAdmin)) {
        if(user.isAdmin){
            next()
        } else {
            next({path: '/login'})
        }
      }else {
        next()
      }
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(!localStorage.getItem('X-auth')){
      next()
    }else{
      next({path: '/login'})
    }
  }else {
    next()
  }
})

export default router

///the following needs to be added to the routing object at a later point

meta: {
               requiresAuth: true,
               isAdmin : true
           }

meta: {
               guest: true
           }

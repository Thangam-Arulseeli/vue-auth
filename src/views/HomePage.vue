<template>
    <h2> Home Page for Vue 3 Authentication</h2>
    <pre> 
        ***** Route Guards (Navigation Guards)
        ***** The navigation guards provided by Vue router are primarily used to guard navigations 
              either by redirecting it or canceling it. 
              There are a number of ways to hook into the route navigation process: 
              globally, per-route, or in-component.
        *** Route guards are menthods that can execute custom logic 
            before or after a user goes through the router
        *** The router package gives us access to 3 types of hooks
        *   Global - These hooks will affect all routes
        *   Local (in the route definition) - This hook will only affect the route
            it's attached to 
        *   Local (in the component) - These hooks will only affect the routes for that component
        *   This can be implemented in 2 ways::
            i. // array function as param 
               hook ((to, from) => {
                // optionally return false to cancel the navigation
                return false;
                })
            ii. // Anonymous function
                hook (function (to, from){
                    // optionally return path to redirect to 
                    return '/login'
                })
        *** iii. Call back function
                hook(async ( to , from) => {
                    const auth = await auth()
                })
        
        ***** 1. Global Route Guards -- Applied with all the navigations (routes) 
            *** Global Route Guard Hooks  
                * beforeEach()     --- Before navigating through the route
                * beforeResolve()  --- After in-component guards have been executed but before the navigation happens
                * afterEach()      --- After a view has been loaded
        
        ***** ------------------------------
        
        ***** 2. Local Guard (Per-Route Guard) in the route defintion
        ***** Only one Guard we entered is beforeEnter() 
              beforeEnter( )  --- Before navigating to the route we define it
            NOTE:: beforeEnter guards only trigger when entering the route, 
            they don't trigger when the params, query or hash change 
            e.g. going from /users/2 to /users/3 or going from /users/2#info to /users/2#projects.
            They are only triggered when navigating from a different route.
        ***** -------------------------------

        ***** 3. Local Route Guard (In-Component Guard) 
        *** We can directly define route navigation guards inside route components
            *** Local Component(Route) Guards 
                * beforeRouteEnter()   --- Before navigating to a route
                * beforeRouteUpdate()  --- Before a reused route has been changed
                * beforeRouteLeave()   --- Before this route has been navigated away from
        ***** --------------------------------   
        
        ***** ----------------------------------------
            *** The Full Route Navigation Resolution Flow 
               1. Navigation triggered.
               2.  Call beforeRouteLeave guards in deactivated components.
               3.  Call global beforeEach guards.
               4.  Call beforeRouteUpdate guards in reused components.
               5.  Call beforeEnter in route configs.
               6.  Resolve async route components.
               7.  Call beforeRouteEnter in activated components.
               8.  Call global beforeResolve guards.
               9.  Navigation is confirmed.
               10. Call global afterEach hooks.
               11. DOM updates triggered.
               12. Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.
        ***** ----------------------------------------
   </pre>
</template>

<script>
    export default{
        beforeRouteLeave(){
            const reply = window.confirm('You have unsaved changes! Do you want to leave?');
            if (!reply){
                // Stay on the page if user clicks 'Cancel'
                return false;
            }
        }
    }
</script>

<style>
pre{
    font-size: large;
    color: blue;
    background-color: lavender;
}
</style>
<template>
    <h2> <u> Users Page </u> </h2>
    <h4> Users List </h4>
    <p v-for="user in users" :key="user.id">
        <RouterLink 
            :to="{
               name: 'usersingle' ,
               params: { id: user.id}
            }">
            ({{ user.id }})  |  {{ user.name }}
        </RouterLink>
    </p> <hr />
    <RouterView />
</template>
<script>
export default{
   //beforeRouteEnter(){   // Part - III - Local Route Guard (In-Component Guard - When the route changed/updated with params)
    // beforeRouteEnter(to){
    //     alert('Please login first')
        // return false;  
        //return ('/');  // or deny the navigation by return false;
    //     if (to.name !== 'home') {
    //         return '/'
    //     }
    // },
   
    beforeRouteUpdate(){ // Part - III - Local Route Guard (In-Component Guard-When the route is updated - Child component)
      console.log('Route updated.....')
    this.users.forEach ((user) => {    // Has access to 'this' data property 
      console.log(user.id,  user.name)  
    })
    },

    data(){
        return {
            users: [
                { id: 1, name: 'Queena'},    
                { id: 2, name: 'Kingston'},
                { id: 3, name: 'Angelin'},
                { id: 4, name: 'Prince'}
            ]
        }
    }

}
</script>
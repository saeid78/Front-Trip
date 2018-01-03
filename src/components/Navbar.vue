<template>
   
 <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
       
            <router-link tag="li" to="/login"  v-if="! isAuth">
           <a> Login</a>
            </router-link>
            <router-link tag="li" to="/register" v-if="! isAuth">
            <a>Register</a>
            </router-link>
        
          <router-link  tag="li" to="/feed" v-if="isAuth">
            <a>Airport</a>
            </router-link>
              
          <router-link tag="li" to="/trip" v-if="isAuth">
           <a> Trip </a>
            </router-link>

            <router-link  tag="li" to="/create" v-if="isAuth">
            <a>Create Trip</a>
            </router-link>

            <router-link  tag="li" to="" v-if="isAuth">
            <a>Log out</a>
            </router-link>
              
            
          </ul>
        </nav>
        <h3 class="text-muted">Trip</h3>
      </div>
</template>

<script>
  
  export default {
    data() {
      return {
        isAuth:null
      }
    },
    created () {
      this.isAuth = this.$auth.isAuthenticated()

      this.setAuthenticatedUser()
    },
    methods: {
          setAuthenticatedUser () {
              this.$http.get('api/user')
              .then(response => {
                this.$auth.setAuthenticatedUser(response.body)

                console.log(this.$auth.getAuthenticatedUser())
              })
          }
    }
  }

</script>


<style>

li a {
  margin-left:1em;
}

</style>

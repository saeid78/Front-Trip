<template>
<div class="container">
 <div class="row">
     <div class="col-md-6 col-mdd-offset-3">
         <div class="panel panel-default">
             <div class="panel-body">
                 <div class="form-group">
                     <input v-model="email" calss="form-control" type="email" placeholder="Email">
                 </div>
                 <div class="form-group">
                    <input v-model="password" calss="form-control" type="password" placeholder="Password">
                </div>
                
                    <button @click="login" class="btn btn-success">Login</button>
               
             </div>
         </div>
     </div>
     
 </div>
</div>
</template>


<script>
    export default {
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods: {
            login () {
                var data = {
                    client_id: 2,
                    client_secret: 'DN8WR37BuEBLSfswsTZFXxuq42KJAYCPdP8aYgqj',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }

                this.$http.post("oauth/token", data)

                //ES6
                .then(response => {
                    this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                    this.$router.push("/feed")
                })
                // .then(function (response){
                //     console.log(response)
                // })
            }
        }
    }


</script>


<style>


</style>

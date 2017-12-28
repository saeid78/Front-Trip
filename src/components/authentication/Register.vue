<template>
<div class="container">
 <div class="row">
     <div class="col-md-6 col-mdd-offset-3">
         <div class="panel panel-default">
             <div class="panel-body">
              <div class="form-group">
                     <input v-model="name" calss="form-control" type="text" placeholder="Name">
                 </div>
                 <div class="form-group">
                     <input v-model="email" calss="form-control" type="email" placeholder="Email">
                 </div>
                 <div class="form-group">
                    <input v-model="password" calss="form-control" type="password" placeholder="Password">
                </div>
                
                    <button class="btn btn-success">Register</button>
               
             </div>
         </div>
     </div>
     
 </div>
</div>

</template>
<script>

    export default {
         data () {
             return {
                 name: '',
                 email: '',
                 password: ''
             }
         }
    }
</script>
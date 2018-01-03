<template>
<div class="container"> 
 <h1> List of Flights</h1>

 <ul>
    <li v-for ="flight in flights" :authenticatedUser="authenticatedUser">
       
        Flight Number: {{ flight.flightNumber }}  
         Status: {{ flight.status }} 

    <p>
        <a href="#" class="btn btn-danger" role="button" @click="deleteProduct">
        Delete Flight
        </a>
    </p>
       
          
    </li>
   
 </ul>

</div>
</template>

<script>
import swal from 'sweetalert'
    export default {
        data () {
            return {
                flights: []
            }
        },

        computed: {
            authenticatedUser () {
                return this.$auth.getAuthenticatedUser()
            }
        },
        created () {
            this.$http.get('api/flights')
            .then(response => {
                this.flights = response.body
                
            })
        },
        methods: {
            deleteProduct () {
                swal({
                    title: "Are you sure?",
                    text: "Are you sure that you want to delete this file?",
                    icon: "warning",
                    dangerMode: true
                    
                    
                    })
                    .then(willDelete => {
                     
                    if (willDelete) {
                        this.$http.delete('api/flights/' + this.flight.flightNumber)
                        .then(response => {
                            console.log(response)
                            swal("Deleted!", "Your imaginary file has been deleted!", "success");
                        })
                        
                     }
                    } 
                    );
        }
    }
}

</script>
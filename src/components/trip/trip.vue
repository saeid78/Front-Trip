<template>
<div class="container"> 
 <h1> List of Flights</h1>

 <ul>
    <li v-for ="flight in flights">
       
        Flight Number: {{ flight.flightNumber }}  
         Status: {{ flight.status }} 

        
       
          
    </li>

 </ul>

</div>
</template>

<script>
    export default {
        data () {
            return {
                flights: []
            }
        },
        created () {
            this.$http.get('api/flights')
            .then(response => {
                this.flights = response.body
            })
        }
    }

</script>
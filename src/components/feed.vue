<template>
<div class="container"> 
 <h1> List of Airports</h1>

 <ul>
    <li v-for ="airport in airports">
        Airport Name : {{ airport.city}}
    </li>

 </ul>

</div>
</template>

<script>
    export default {
        data () {
            return {
                airports: []
            }
        },
        created () {
            this.$http.get('api/airports')
            .then(response => {
                this.airports = response.body
            })
        }
    }

</script>
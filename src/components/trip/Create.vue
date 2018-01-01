<template>
<div class="row">
    <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="form-group">
                    <label>flight Number:</label>
                    <input type="text" v-model= "flight.flightNumber" class="form-control"  placeholder="Enter Flight Number">
                </div>
                 <div class="form-group">
                    <label>Status:</label>
                    <select class="form-control" v-model= "flight.status">
                        <option value="ontime">ontime</option>
                        <option value="delayed">delayed</option>
                    </select>
                </div>
                 <div class="form-group">
                    <label>Arrival Airpot:</label>
                  
                    <input type="text" class="form-control" v-model= "flight.arrival.iataCode"  placeholder="Enter Arrival Airpot">
                </div>
                <div class="form-group">
                    <label>Arrival Date:</label>
                    <input type="text" class="form-control" v-model= "flight.arrival.datetime" >
                </div>
                 <div class="form-group">
                    <label>Departure Airport:</label>
                    <!--<select v-for ="airport in airports" class="form-control">
                  
                        <option value="">   {{ airport.city}} </option>
                         
                    </select>                -->
                    <input type="text" class="form-control" v-model= "flight.departure.iataCode" placeholder="Enter departure Airpot">
                    </div>
                  <div class="form-group">
                    <label>Departure Date:</label>
                    <input type="text" class="form-control" v-model= "flight.departure.datetime">
                </div>
                <button class="btn btn-success btn-lg btn-block" @click="create" >Create Trip</button>
            </div>
        </div>
    </div>


</div>
</template>

<script>
    export default {
        data () {
            return {
                airports: [],
                flight: {
                    flightNumber: '',
                    status : '',
                    arrival:{
                      datetime: '',
                      iataCode: ''
                    },
                    departure:{
                      iataCode: '',
                      datetime: ''
                    }

                   
                      

                }
            }
        },
        methods: {
            create () {
                this.$http.post('api/flights', this.flight)
                .then(response => {
                    //console.log(response)
                    this.$router.push('/trip')
                })
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


<style lang="">
    
</style>
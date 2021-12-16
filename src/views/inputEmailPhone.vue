<template>
  <div>
      <h1>Email-Phone</h1>
  </div>

  <div>
      <h2>Notifications</h2>

      <div class="container">
          <label for="delivery">Delivery</label>
          <input type="text" name="delivery" v-model="inputNotify">
          <button @click="inputIsValid()">Validate</button>
      </div>

      <div class="container">
          <label for="nondelivery">Non-Delivery</label>
          <input type="text" name="nondelivery" v-model="inputNotifyNonDelivery">
          <button @click="inputIsValidNonDelivery()">Validate</button>
      </div>
  </div>

    <h2>Email Array:</h2>
    {{emailArray}}
    <h2>Phone Array</h2>
    {{phoneArray}}

    <h2>Non Delivery Phone Array:</h2>
    {{NonDeliveryphoneArray}}
    <h2>Non Delivery Email Array</h2>
    {{NonDeliveryemailArray}}
</template>

<script>
export default {
    data(){
        return{
            inputNotify: '',
            inputNotifyNonDelivery: '',
            emailArray: [],
            phoneArray: [],
            NonDeliveryemailArray: [],
            NonDeliveryphoneArray: []
        }
    },
    methods:{
        inputIsValid(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputNotify) == true){
                this.emailArray.push(this.inputNotify);
            }else if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.inputNotify) == true){
                this.phoneArray.push(this.inputNotify);
            }
            else{
                alert("Input is invalid")
            }
        },
        inputIsValidNonDelivery(){
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputNotifyNonDelivery) == true){
                this.NonDeliveryemailArray.push(this.inputNotifyNonDelivery);
            }else if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.inputNotifyNonDelivery) == true){
                this.NonDeliveryphoneArray.push(this.inputNotifyNonDelivery);
            }
            else{
                alert("Input is invalid")
            }
        }
    }
}
</script>

<style>
.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
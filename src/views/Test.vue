<template>
  <div>
      <h1>This is our test view!</h1>
  </div>

  <div class="container">
    <label for="count"># of Packages</label>
    <input min="1" max="99" name="count" type="number" v-model="count" v-on:blur="updateArray()">

    <div v-for="items in count" :key="items">
      <div class="weightInput">
        <label for="weight">Shipment {{items}}: Weight</label>
        <input name="weight" type="number" id="shipmentWeight" v-model="weight[items - 1]" v-on:blur="changeArray(items)">
      </div>
    </div>
    
    <label for="user">User</label>
    <input name="user" type="text" v-model="shipmentObj.user" v-on:blur="updateUser()">

    <label for="name">Name</label>
    <input name="name" type="text" v-model="shipmentObj.name" v-on:blur="updateUser()">

    <div class="inputContainer">
      <label for="email">Email</label>
      <input name="email" type="text" v-model="shipmentObj.notify[0].delivery[0].email[0]" v-on:blur="updateUser()">
    </div>

    <label for="nonDelivemailInput">Email</label>
    <input id="nonDelivemailInput" class="addItemInput" type="text" placeholder="Add Another" @input="addNonDelivEmail = $event.target.value">
    <button type="submit" class="addItemButton" @click="AddNonDelivEmailNew" onclick="document.getElementById('nonDelivemailInput').value = '';">Add</button>
  </div>

  <button @click="updateUser()">Confirm Shipment</button>

  <!-- <button @click="updateUser">Update Array</button> -->

  <!-- <button @click="iterateArray">Iterate Array</button> -->

  {{jsonDataTest}}

</template>

<script>
export default {
  data(){
        return{
            addNonDelivEmail: '',
            weight: [],
            count: 1,
            jsonDataTest:[
              {
                  weight: 0,
                  user: '',
                  name: '',
                  notify: [
                {
                delivery: 
                [
                    {
                        email: [
                            ''
                        ],
                        phone: [
                            ''
                        ]
                    }
                ]
                }
              ]
              }
            ],
            shipmentObj: {
              weight: 0,
              user: '',
              name: '',
              notify: [
                {
                delivery: 
                [
                    {
                        email: [
                            ''
                        ],
                        phone: [
                            ''
                        ]
                    }
                ]
                }
              ]
            }
        }
    },
    methods:{
      updateArray(){
        this.jsonDataTest = [{
            weight: 0,
            user: '',
            name: '',
            notify: [
                {
                delivery: 
                [
                    {
                        email: [
                            ''
                        ],
                        phone: [
                            ''
                        ]
                    }
                ]
                }
              ]
        }]
        for(let i = 1; i < this.count; i++){
            let shipData = {
              weight: 0,
              user: '',
              name: '',
              notify: [
                {
                delivery: 
                [
                    {
                        email: [
                            ''
                        ],
                        phone: [
                            ''
                        ]
                    }
                ]
                }
              ]
            }
          this.jsonDataTest.push(shipData)
        }
        console.log(this.jsonDataTest)
      },
      changeArray(items){
        this.jsonDataTest[items-1].weight = this.weight[items-1];
      },
      updateUser(){
        for(let i = 0; i < this.count; i++){
          this.jsonDataTest[i].weight = this.weight[i];
          this.jsonDataTest[i].user = this.shipmentObj.user;
          this.jsonDataTest[i].name = this.shipmentObj.name;
          this.jsonDataTest[i].notify[0].delivery[0].email = this.shipmentObj.notify[0].delivery[0].email;
        }
      },
      iterateArray(){
        for(let i = 0; i < this.jsonDataTest.length; i++){
          console.log(this.jsonDataTest[i])
        }
      },
      AddNonDelivEmailNew(){
            this.shipmentObj.notify[0].delivery[0].email.push(this.addNonDelivEmail)
            // this.email.push(this.addEmail)
            // this.addEmail = this.email
            this.addNonDelivEmail = this.shipmentObj.notify[0].delivery[0].email
            console.log(this.shipmentObj.notify[0].delivery[0].email)
        },
    }
}
</script>

<style scoped>
.weightInput{
  background-color: #33f1a8;
  animation: weightAnimate;
  animation-duration: .5s;
  padding: 10px;
  width: 50vw;
  display: block;
  margin: auto;
}

@keyframes weightAnimate{
  from{
        margin-top: -10px;
        opacity: 0;
      }
  to{
      margin-top: 0;
      opacity: 1;
    }
}

.inputContainer{
  display: flex;
  flex-direction: row;
}

label{
  display: inline-block;
  background-color: rgb(233, 233, 233);
  padding: 10px;
  border: 1px solid transparent;
  font-size: 15px;
}

input{
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.336);
  border-left: transparent;
  border-radius: 0px 5px 5px 0px;
  outline: none;
  padding: 10px;
  font-size: 15px;
}
</style>
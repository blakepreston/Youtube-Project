<template>
  <div>
      <h1>Arrays</h1>
      <h3>.pop()</h3>
      <h3>.push()</h3>
      <h3>.shift()</h3>
      <h3>.unshift()</h3>
  </div>

  <div class="buttons">
      <button @click="popArray()">Pop</button>
      <button @click="pushArray()">Push</button>
      <button @click="shiftArray()">Shift</button>
      <button @click="unshiftArray()">UnShift</button>
  </div>

  <h2>{{sports}}</h2>
</template>

<script>
export default {
    data(){
        return{
            sports: ["Baseball", "Football", "Soccer"]
        }
    },
    methods:{
        popArray(){
            this.sports.pop();
        },
        pushArray(){
            this.sports.push("Hockey");
        },
        shiftArray(){
            this.sports.shift();
        },
        unshiftArray(){
            this.sports.unshift("Hockey");
        }
    }
}
</script>

<style scoped>
.buttons button{
    margin-left: 20px;
    cursor: pointer;
}
</style>
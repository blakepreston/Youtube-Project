<template>
  <div>
      <h2>Iterate over JSON Data</h2>
  </div>

  <div v-for="item in data" :key="item.id">
      <label for="name">Product Name</label>
      <p name="name">{{item.ProductName}}</p>
      <label for="price">Price</label>
      <p name="price">{{item.Price}}</p>

      <div>
          <h1>TEST NETLIFY</h1>
      </div>
  </div>
</template>

<script>
import jsonData from '/jsonData.json'
export default {
    data(){
        return{
            data: jsonData
        }
    }
}
</script>

<style>
label{
    font-weight: bold;
}
</style>
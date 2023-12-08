<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <header>
    <nav>
      <img src="../assets/logo.png" alt="" class="logo" >
      <router-link class="home" to="/">Home</router-link>
      <router-link class="filme" to="/filmes">Filmes</router-link>
      <router-link class="TV" to="/tv">Séries</router-link>
    </nav>
  </header>

</template>
<style scoped>
.logo{
  /* width: 25%; */
  display: flex;
  height: 15%;  
  margin-top: 15%;
  margin-right: 40%;
  margin-left: -724%;
  height: 25%;
}

.logo-img {
  /* width: '200%'; */
  height: 100%;
}
nav{
  display: flex;
  align-items: center;
  justify-content:flex-start ;
  margin-top: -18%;
  width: 7%;
  color: aliceblue;
  font-family:Arial, Helvetica, sans-serif;  
  margin-left: 15%
}
.home{
  margin-left: 30%;
  margin-right: 20%;
  font-weight: bold;
  font-size: 130%;
  color: rgb(255, 255, 255)  ;
}
.filme{
  margin-right: 20%;
  font-weight: bold;
  font-size: 130%;
  color: rgb(255, 255, 255);
}
.TV{
  margin-right: 20%;
  font-weight: bold;
  font-size: 130%;
  color: rgb(255, 255, 255);
}

a {
  color: white;
  text-decoration: none;
}

</style>
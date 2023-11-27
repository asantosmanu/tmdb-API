<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <header>
    <nav>
      <div class="logo">    <img src="../assets/logo.png" alt=""></div>
      <router-link class="home" to="/">Home</router-link>
      <router-link class="filme" to="/filmes">Filmes</router-link>
      <router-link class="TV" to="/tv">Séries</router-link>
    </nav>
  </header>

</template>
<style scoped>
.logo{
  width: 100%;
  display: flex;
  height: 15%;
  margin-top: 1%;
  margin-right: 10%;
  margin-left: -200px;


}
nav{
  margin-top: -39%;
  display: flex;
  align-items: center;
  color: aliceblue;
  font-family:Arial, Helvetica, sans-serif;
  
}
.home{
  margin-right: 5%;
}
.filme{
  margin-right: 5%;
}
.TV{
  margin-right: 5%;
}

a {
  color: white;
  text-decoration: none;
}

</style>
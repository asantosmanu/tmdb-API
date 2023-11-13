<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <header>
    <nav>
      <router-link class="home" to="/">Home</router-link>
      <router-link class="filme" to="/filmes">Filmes</router-link>
      <router-link class="TV" to="/tv">Séries</router-link>
    </nav>
  </header>

</template>
<style scoped>

nav{
  display: flex;
  align-items: center;
  color: aliceblue;
  font-family:Arial, Helvetica, sans-serif;
  
}
.home{
  margin-left: 690px;
}
.filme{
  margin-left: 10%;
}
.TV{
  margin-left: 10%;
}

a {
  color: white;
  text-decoration: none;
}

</style>
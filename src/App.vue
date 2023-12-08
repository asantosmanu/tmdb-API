<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
<div class="containergeral">

  <Header />
  <main>
    <router-view />
  </main>
</div>
  
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: #ff5100;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
.containergeral{
  background: black;

}

</style>
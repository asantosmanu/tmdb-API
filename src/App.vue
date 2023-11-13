<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
<!-- <div class="containergeral"> -->
  <Header/>
  <main>
    <router-view />
  </main>
<!-- </div> -->
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
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
  background: #110920;  

}

</style>
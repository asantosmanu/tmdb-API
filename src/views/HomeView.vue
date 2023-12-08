  <script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { imgs } from '@/_data/img.js'
import 'vue3-carousel/dist/carousel.css'

</script>

<template>
  <div class="logo" @click="$router.push({ name: 'MovieDetails' })" >
    <img  src="https://disneyplusbrasil.com.br/wp-content/uploads/2021/02/Luca-Banner.jpg" alt="">
  </div>
  <div>
    <h1>
      LANÇAMENTOS !
    </h1>
  </div>

  <Carousel>
    <Slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">
        <img :src="imgs[slide]?.src" alt="">
        </div>        
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  
</template>

<style scoped>

.carousel__item {
  min-height: 200%;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  
}

.container{
  background-image: url('https://recreio.uol.com.br/media/_versions/animacoes/madagascar_capa_widemd.jpg');
  background-repeat: no-repeat;
  background-size: 50%;
  /* height: 600%; */
  /* width: 100%; */
  color: var(--vc-clr-white);
  padding-top: 375%;
  padding-left: 100%;
}

h1{
  color: rgb(255, 81, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 520%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>
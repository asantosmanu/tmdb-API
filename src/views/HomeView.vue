  <script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { imgs } from '@/_data/img.js'
import 'vue3-carousel/dist/carousel.css'


</script>

<template>
  <div class="logo">
    <img src="https://img.freepik.com/vetores-gratis/filmes-de-terror-noturnos-banner-de-desenho-animado-monstros-engracados_107791-14224.jpg?w=1480&t=st=1701695620~exp=1701696220~hmac=45f07db97c3d100b1939d7457257041ab8af4bba77e2f3c1f7c1cfc6705fbfc6" alt="">
  </div>

  <div>
    <h1>
      LANÇAMENTOS
    </h1>
  </div>

  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
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
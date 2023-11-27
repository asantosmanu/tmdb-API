  <script setup>

import '@/vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from '@/vue3-carousel'
import {imgs} from '@/_data/img.js'

</script>
  
<template>

  <div class="container">
  </div>

  <div>
    <h1>
      Lançamentos
    </h1>
  </div>

  <carousel :items-to-show="4.2" class="Margin">
    <slide v-for="img in imgs" :key="img.id">
      <div class="img-card">
        <div class="img-container">
          <img :src="img.src" alt="" width="300"  class="img" />
        </div>
      </div>
    </slide>
    <template #addons>  
      <navigation />
    </template>
  </carousel>


 

</template>

<style scoped>
.Margin {
  margin-bottom: 80px;
}

.img{
    border-radius: 10px;
    /* /* width: 100%; */
    /* height: 100%;  */
}
.img-card {
  text-align: center;
  min-height: 0;
  height: auto;
}

.img-card h6 {
  margin-top: 10px;
}
.container {
  background-image: url('https://jornalggn.com.br/wp-content/uploads/2022/04/robert-pattinsons-the-batman-tickets-sells-out-moments-after-going-on-sale-001.jpeg');
  height: 600%;
  width: 100%;
  color: var(--vc-clr-white);
  padding-top: 375px;
  padding-left: 100%;
 

}

h1 {
  color: rgba(243, 80, 16, 0.768);
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
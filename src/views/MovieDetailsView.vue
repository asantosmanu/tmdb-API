<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useMovieStore } from '@/stores/movie';
  const movieStore = useMovieStore();

  const props = defineProps(['id']);

  onMounted(async () => {
    await movieStore.getMovieDetail(props.id);
  });
</script>

<template>
  <!-- <div class="info"> -->
  <div class="title">
    {{ movieStore.currentMovie.original_title }}
  </div>
  <div class="poster">
  <img :src="`https://image.tmdb.org/t/p/w500${movieStore.currentMovie.poster_path}`" alt="Logo" />
  </div>
  <div class="overview">
  {{ movieStore.currentMovie.overview }}
  </div>
  <div class="teste">
  {{ movieStore.currentMovie }}
  </div>
  <!-- </div> -->
  <div class="voltar">
    <button @click="$router.push({ name: 'Movies' })">Voltar</button>
  </div>

  <!-- <div class="main">
    <div class="content">
      <img
        :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
        :alt="movieStore.currentMovie.title"
      />

      <div class="details">
        <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
        <p>{{ movieStore.currentMovie.tagline }}</p>
        <p>{{ movieStore.currentMovie.overview }}</p>
        <p>Orçamento: ${{ movieStore.currentMovie.budget }}</p>
        <p>Avaliação: {{ movieStore.currentMovie.vote_average }}</p>
      </div>
    </div>
  </div>

  <p>Produtoras</p>
  <div class="companies">
    <template
      v-for="company in movieStore.currentMovie.production_companies"
      :key="company.id"
    >
      <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
      />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>
   -->
</template>

<style scoped>
.teste{
  color: aliceblue  ;
}
.poster{
  margin-left: 1%;
}
.overview{
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 40%;
  margin-top: -40%;
  font-size: larger;
  /* font-weight: bold; */
  margin-left: 30%;
  color: aliceblue;
}
.title{
  color: rgb(255, 255, 255);
  font-size: 300%;
  font-weight: bold;
  font-size: 300%;
  margin-bottom: 2%;
  margin-left: 1%;
}
  .info{
    color: white;
    background-image: url();
  }
  .companies {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>

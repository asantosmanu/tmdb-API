<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])
const paginaAtual = ref('')

onMounted(async () => {
  const response = await api.get('genre/tv/list?language=pt-BR')
  genres.value = response.data.genres
})

const tv = ref([]);

const proxima = async () => {
    const pagina = paginaAtual.value + 1
    const response = await api.get('discover/tv', {
        params: {
            with_genres: 16,
            page: pagina,
            language: 'pt-BR'
        }
    });
    paginaAtual.value = response.data.page
    // console.log(response.data)
    tv.value = response.data.results
};

const anterior = async () => {
    const pagina = paginaAtual.value - 1
    const response = await api.get('discover/movie', {
        params: {
            with_genres: 16,
            page: pagina,
            language: 'pt-BR'
        }
    });
    paginaAtual.value = response.data.page
    // console.log(response.data)
    tv.value = response.data.results
};

const listTv = async (genreId) => {
const response = await api.get('discover/tv', {
    params: {
        with_genres: 16,
        page: genreId,
        language: 'pt-BR'
    }
});
  tv.value = response.data.results
};
</script>

<template>
    <h1>CartoonFlix</h1>
    <ul class="genre-list">
      <li v-for="genre in genres" :key="genre.id" class="genre-item" @click="listTv(genre.id)">
          {{ genre.name }}
      </li>
    </ul>
    <p class="page">Página atual: {{ paginaAtual }}</p> 
    <button class="contadorPagina" @click="anterior">Anterior</button>
    <button class="contadorPagina" @click="proxima">Proxima</button>
    <div class="tv-list">
  <div v-for="tv in tv" :key="tv.id" class="tv-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`" :alt="tv.title" />
    <div class="tv-details">
      <p class="tv-title">{{ tv.name}}</p>
      <p class="tv-release-date">{{ tv.release_date }}</p>
      <p class="tv-genres"></p>
      <!-- <p class="tv-genres">{{ tv.genre_ids }}</p> -->
    </div>
  </div>
</div>
  </template>
  oi
  <style scoped>
  .tv-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #ffffff;
  background-color: rgb(36, 83, 114);
  color: white;
}

  h1{
  color: rgba(243, 80, 16, 0.768);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 520%;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.tv-title{
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
.tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2%;
  
}
.tv-card {
  background-color: rgba(241, 116, 67, 0.768) ;
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #ffffff;
}
.tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #ffffff;
}
.tv-details {
  padding: 0 0.5rem;
}
.tv-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
  .genre-list {
    color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
  }
  
  .genre-item {
    background-color: rgba(241, 116, 67, 0.768);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    align-self: center;
    color: white;
    display: flex;
    justify-content: center;
  }
  
  .genre-item:hover {
    cursor: pointer;
    background-color: rgba(243, 80, 16, 0.768);
    box-shadow: 0 0 0.5rem rgba(230, 118, 74, 0.768);
  }
  .page {
  color: white;
  font-size: large;
  }
  .contadorPagina{
  background-color: greenyellow;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #000000;
}
.contadorPagina:hover{
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}
  </style>
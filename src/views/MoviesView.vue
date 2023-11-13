<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])
const paginaAtual = ref('')

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})

const movies = ref([]);

const proxima = async () => {
    const pagina = paginaAtual.value + 1
    const response = await api.get('discover/movie', {
        params: {
            with_genres: 16,
            page: pagina,
            language: 'pt-BR'
        }
    });
    paginaAtual.value = response.data.page
    // console.log(response.data)
    movies.value = response.data.results
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
    movies.value = response.data.results
};


const listMovies = async (genreId) => {
    const response = await api.get('discover/movie', {
        params: {
            with_genres: 16,
            page: genreId,
            language: 'pt-BR'
        }
    });
    paginaAtual.value = response.data.page
    // console.log(response.data)
    movies.value = response.data.results
};
</script>

<template>
    <h1>CartoonFlix</h1>
    <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
    {{genre.id}} - {{ genre.name }}
    </li>
    </ul>
    <p class="page">Minha pagina: {{ paginaAtual }}</p> 
    <button @click="anterior">Anterior</button>
    <button @click="proxima">Proxima</button>
    <div class="movie-list">
  <div v-for="movie in movies" :key="movie.id" class="movie-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
    <div class="movie-details">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release-date">{{ movie.release_date }}</p>
      <p class="movie-genres">{{ movie.genre_ids }}</p>
    </div>
    
  </div>
</div>
</template>

<style scoped>
h1{
  color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 520%;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  /* box-shadow: 0 0 0.5rem #f0f0f0; */
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #ffffff;
  background-color: rgb(36, 83, 114);
  color: white;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}   

.genre-item {
  background-color: greenyellow;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #000000;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}

.page {
  color: white;
  font-size: large;
}
</style>
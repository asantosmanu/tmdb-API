<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Loading from 'vue-loading-overlay'

const router = useRouter()

const isLoading = ref(false);

function openMovie(id) {
  router.push({ name: 'MovieDetails', params: { id } });
}

const genres = ref([])
const paginaAtual = ref(1); // Inicialize com o valor 1 ou outro valor desejado

onMounted(async () => {
  try {
    const response = await api.get('genre/movie/list?language=pt-BR')
    genres.value = response.data.genres
  } catch (error) {
    console.error('Erro ao obter lista de gêneros:', error);
  }
})

const movies = ref([]);

const proxima = async () => {
  try {
    const pagina = paginaAtual.value + 1
    const response = await api.get('discover/movie', {
      params: {
        with_genres: 16,
        page: pagina,
        language: 'pt-BR'
      }
    });
    paginaAtual.value = response.data.page
    movies.value = response.data.results
  } catch (error) {
    console.error('Erro ao obter filmes na próxima página:', error);
  }
};

const anterior = async () => {
  try {
    const pagina = paginaAtual.value - 1
    const response = await api.get('discover/movie', {
      params: {
        with_genres: 16,
        page: pagina,
        language: 'pt-BR'
      }
    });
    paginaAtual.value = response.data.page
    movies.value = response.data.results
  } catch (error) {
    console.error('Erro ao obter filmes na página anterior:', error);
  }
};

const listMovies = async (genreId) => {
  isLoading.value = true;
  try {
    const response = await api.get('discover/movie', {
      params: {
        with_genres: genreId,
        page: paginaAtual.value,
        language: 'pt-BR'
      }
    });
    paginaAtual.value = response.data.page
    movies.value = response.data.results
  } catch (error) {
    console.error('Erro ao obter filmes:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>


<template>
  <h1>CartoonFlix</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
      {{ genre.name }}
    </li>
  </ul>
  <loading v-model:active="isLoading" is-full-page />
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">
      <router-link :to="`/movie/${movie.id}`">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" @click="openMovie(movie.id)" />
        <div class="movie-details">
          <!-- <p class="movie-title">{{ movie.title }}</p>
            <p class="movie-release-date">{{ movie.release_date }}</p> -->
            <!-- <p class="movie-genres"></p> -->
            <!-- <p class="movie-genres">{{ movie.genre_ids }}</p> -->
          </div>
        </router-link>  
        </div>
      </div>
      <div class="partcontadores">
        <p class="page">Pagina atual: {{ paginaAtual }}</p>
        <button class="contadorPagina" @click="anterior">Anterior</button>
        <button class="contadorPagina2" @click="proxima">Proxima</button>
      </div>

      <button class="back" @click="$router.push({ name: 'Home' })">Voltar</button>

</template>

<style scoped>
.back{
  background-color: #ff5100;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
}

.back:hover{
  cursor: pointer;
  background-color: rgba(202, 0, 0, 0.768);
  box-shadow: 0 0 0.5rem rgba(230, 118, 74, 0.768);
}
.partcontadores {
  margin-top: 3%;
  padding-bottom: 2%;
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
  /* box-shadow: 0 0 0.5rem #f0f0f0; */
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* .movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #ffffff;
  background-color: rgba(241, 116, 67, 0.768);
  color: white;
} */

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
  background-color: #ff5100;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
}

.genre-item:hover {
  cursor: pointer;
  background-color: rgba(243, 80, 16, 0.768);
  box-shadow: 0 0 0.5rem rgba(230, 118, 74, 0.768);
}

.page {
  color: white;
  font-size: large;
  margin-left: 46%;
}

.contadorPagina {
  background-color: rgba(226, 72, 11, 0.768);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: #000000;
  margin-left: 44%;
}

.contadorPagina:hover {
  cursor: pointer;
  background-color: #696969;
  box-shadow: 0 0 0.5rem #636463;
}

.contadorPagina2 {
  background-color: rgba(226, 72, 11, 0.768);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: #000000;
  margin-left: 1%;
}

.contadorPagina2:hover {
  cursor: pointer;
  background-color: #696969;
  box-shadow: 0 0 0.5rem #636463;
}</style>
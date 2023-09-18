<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const moviesGenres = ref([])
const TVGenres = ref([])
const movies = ref([])

onMounted(async () => {
  let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzgyZWUwODljZWE3NTBmMWRiYmU0NzU2NGYwMWQ1OCIsInN1YiI6IjY0ZmYxNTgyMmRmZmQ4MDEzYmNkMjRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wLyRftLd47eRi5tv07RseSluT-xx-BosHjgiJsszxSQ`
    }
  })
  moviesGenres.value = response.data.genres
  response =  await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzgyZWUwODljZWE3NTBmMWRiYmU0NzU2NGYwMWQ1OCIsInN1YiI6IjY0ZmYxNTgyMmRmZmQ4MDEzYmNkMjRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wLyRftLd47eRi5tv07RseSluT-xx-BosHjgiJsszxSQ`
    }
  })
  TVGenres.value = response.data.genres
  response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzgyZWUwODljZWE3NTBmMWRiYmU0NzU2NGYwMWQ1OCIsInN1YiI6IjY0ZmYxNTgyMmRmZmQ4MDEzYmNkMjRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wLyRftLd47eRi5tv07RseSluT-xx-BosHjgiJsszxSQ`
    }
  })
  movies.value = response.data.movies
})  
</script>

<template>
  <h1>Gêneros de filmes</h1>
  <ul>
    <li v-for="genre in moviesGenres" :key="genre.id">
      {{ genre.id }} - 
      {{ genre.name }}
    </li>
  </ul>
  <hr/>
  <h1>Gêneros de programas de TV</h1>
  <ul>
    <li v-for="genre in TVGenres" :key="genre.id">
      {{ genre.name }} -
    </li>
  </ul> 
  <hr>
  <h1>Filmes</h1>
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      {{ movie.id }}
    </li>
  </ul>
  <hr/>
</template>
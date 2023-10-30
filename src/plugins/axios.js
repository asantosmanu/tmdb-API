import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzgyZWUwODljZWE3NTBmMWRiYmU0NzU2NGYwMWQ1OCIsInN1YiI6IjY0ZmYxNTgyMmRmZmQ4MDEzYmNkMjRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wLyRftLd47eRi5tv07RseSluT-xx-BosHjgiJsszxSQ`
  }
})

export default api
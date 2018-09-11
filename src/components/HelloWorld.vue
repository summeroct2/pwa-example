<template>
  <div class="">
    <header class="app-header">知乎日报</header>
    <div class="movies">
      <a class="movie-item" v-for="movie in movies" :key="movie.id" :href="movie.alt">
        <img :src="movie.images.small">
        <div class="intro">
          <h3>{{movie.title}}</h3>
          <p>上映时间：{{movie.year}}</p>
          <p>类型：{{movie.genres.join(' ')}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello-world',
    data () {
      return {
        movies: []
      }
    },
    created () {
      // 豆瓣电影 当前热映
      // this.$axios.get('/movie/in_theaters?start=0&count=10', {

      // 知乎日报
      // /news/latest
      this.$axios.get('/api/news/latest', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(res => {
        this.movies = res.data.subjects
      })
    }
  }
</script>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
  }
  .app-header {
    color: #666;
    line-height: 40px;
    text-align: center;
    background-color: #eee;
  }
  .movies {
    padding: 10px;
    .movie-item {
      display: flex;
      background-color: #eee;

      &:nth-child(even) {
        background-color: #f7f7f7;
      }
    }
  }

</style>

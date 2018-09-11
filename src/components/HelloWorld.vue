<template>
  <div class="">
    <header class="app-header">知乎日报</header>
    <div class="stories">
      <div class="story-item" v-for="story in stories" :key="story.id">
        <div class="img">
          <img :src="story.images[0]">
        </div>
        <div class="intro">
          <h3>{{story.title}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello-world',
    data () {
      return {
        stories: []
      }
    },
    created () {
      // 豆瓣电影 当前热映
      // this.$axios.get('/movie/in_theaters?start=0&count=10', {

      // 知乎日报
      // /news/latest
      this.$axios.get('/api/4/news/latest', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(res => {
        this.stories = res.data.stories
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
  .stories {
    padding: 10px;
    .story-item {
      display: flex;
      background-color: #eee;

      &:nth-child(even) {
        background-color: #f7f7f7;
      }
    }
  }

</style>

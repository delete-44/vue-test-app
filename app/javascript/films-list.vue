<template>
  <ul class='films'>
    <li v-for="film in films" :key="film.id" class='film-item'>
      {{film.title}}: {{film.description}}
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        films: []
      }
    },
    created () {
      axios
      .get('/films.json')
      .then(response => (this.films = response.data))
    }
  }
</script>

<style scoped>
  ul { padding-left: 0; }

  li {
    list-style: none;
    text-align: center;
  }
</style>

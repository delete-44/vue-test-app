<template>
  <div>
    <b-table striped hover
      :items='items'
      :fields='fields'
      >
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        fields: [{ ID: 'id', Title: 'title', Description: 'description' }],
        items: []
      };
    },
    created () {
      axios
      .get('/films.json')
      .then(response => (this.items = response.data))
    }
  }
</script>


<style scoped>
  body { padding: 1rem; }
</style>

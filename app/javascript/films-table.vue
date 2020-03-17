<template>
  <div>
    <b-table striped hover
      :items='items'
      :fields='fields'
      >
      <template v-slot:cell(title)='row'>
        <b-form-input v-model='row.item.title' v-on:change.native="dataChanged"/>
      </template>

      <template v-slot:cell(description)='row'>
        <b-form-input v-model='row.item.description' v-on:change.native="dataChanged"/>
      </template>
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios-on-rails'

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
    },
    methods: {
      dataChanged(e) {
        let row = e.target.closest('tr')
        let film = this.items[row.rowIndex - 1]

        axios
          .put('/films/' + film.id,
          {
            film: {
              title: row.children[1].children[0]._value,
              description: row.children[2].children[0]._value
            }
          })
      },
    }
  }
</script>


<style scoped>
  body { padding: 1rem; }
</style>

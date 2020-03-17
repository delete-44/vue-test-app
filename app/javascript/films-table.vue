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
  export default {
    data() {
      return {
        fields: [{ ID: 'id', Title: 'title', Description: 'description' }],
        items: [
          {
            id: 0,
            title: 'My Neighbour Totoro',
            description: 'Mei and Satsuki shift to a new house to be closer to their mother...',
          },
          {
            id: 1,
            title: 'Spirited Away',
            description: 'Chihiro and her parents stumble upon a seemingly abandoned amusement park...'
          },
        ]
      };
    },
  }
</script>


<style scoped>
  body { padding: 1rem; }
</style>

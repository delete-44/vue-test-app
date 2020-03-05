<template>
  <!-- This is the html-esque code used to define the layout. Note the syntax difference in assigning variable attributes -->
  <div class="navigation-bar">
    <a v-for="link in links" :key="link.id" class='navigation-item' :href=link.path>
      {{link.text}}
    </a>
  </div>
</template>

<script>
  export default {
    // This is data you can access in the template
    // It's a standard hash of data in key:value pairs
    data: function () {
      return {
        links: {
          home: {
              path: '/',
              text: 'Home',
              id: 1
          },
          films: {
              path: '/films',
              text: 'Films',
              id: 2
          }
        }
      }
    }
  };
</script>

<style scoped>
  /* This css applies *only* to this component */
  .navigation-bar {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #198dbb;
    padding: 10px 0;
  }

  .navigation-item {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    line-height: 1.6;
  }
</style>

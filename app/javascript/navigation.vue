<template>
  <!-- This is the html-esque code used to define the layout. Note the syntax difference in assigning variable attributes -->
  <div class="navigation-bar">
    <a class="navigation-item" :href="link.path">{{link.text}}</a>
  </div>
</template>

<script>
  export default {
    // This is data you can access in the template
    // It's a standard hash of data in key:value pairs
    data: function() {
      return {
        link: {
          path: "/",
          text: "Home",
          id: 1
        }
      };
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

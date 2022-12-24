<template>
  <div id="page-container">
    <div id="nav">
      <NavBar />
    </div>
    <div id="content-wrap">
      <router-view :baseURL="baseURL" :products="products" />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PageFooter from "./components/PageFooter.vue";
export default {
  components: { NavBar, PageFooter },
  data() {
    return {
      baseURL: "http://localhost:8000/",
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    // api call to get all products
    async getProducts() {
      try {
        const response = await fetch(this.baseURL, {
          method: "GET",
        });

        const parseData = await response.json();
        console.log(parseData);
        this.products = parseData;
      } catch (err) {
        console.error(err.message);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#page-container {
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 12.5rem; /* Footer height */
}
</style>

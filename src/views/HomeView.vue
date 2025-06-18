<template>
  <div id="home">
    <div id="background-div" class="bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 id="heading" class="mb-4 rounded">
            <a href="#start-shopping" class="bg-white px-2 py-2 rounded">
              Start shopping</a
            >
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded">Demo Ecommerce</p>
        </header>
      </div>
      <hr />
    </div>

    <!--    display products-->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in products.length"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]" />
        </div>
        <!-- <div>{{ products[0] }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../components/ProductBox";
export default {
  name: "HomeView",
  components: { ProductBox },
  props: ["products"],
  data() {
    return {};
  },
  // mounted() {
  //   this.getProducts();
  // },
  // methods: {
  //   async getProducts() {
  //     try {
  //       const response = await fetch("http://localhost:8000/", {
  //         method: "GET",
  //       });

  //       const parseData = await response.json();
  //       console.log(parseData);
  //       this.products = parseData;
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   },
  // },
};
</script>

<style>
.bg-cover {
  background-size: cover !important;
}
#background-div {
  background: url("../assets/home.webp");
}
#heading {
  font-weight: 400;
}
</style>

<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1" />
      <!--            display image-->
      <div class="col-md-4 col-12">
        <img :src="product.imgURL" class="img-fluid" />
      </div>
      <!--            display product details-->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.productName }}</h4>
        <h6 class="catgory font-italic">Black tea</h6>
        <h6 class="font-weight-bold">$ 9.99</h6>
        <p>
          {{ product.productDescription }}
        </p>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input type="number" class="form-control" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button id="add-to-cart-button" class="btn">Add to Cart</button>
          </div>
        </div>
        <div class="features pt-3">
          <h5><strong>Details</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
        <button id="wishlist-button" class="btn mr-3 p-1 py-0">
          Add Whislist
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
export default {
  data() {
    return {
      product: {},
    };
  },
  props: ["products"],
  mounted() {
    //need to fix homeView
    // const route = useRoute();
    // this.id = route.params.id;

    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.id == products[i].id) {
    //     this.product = products[i];
    //   }
    // }
    console.warn("route", this.id);
    console.log(this.product);
  },
};
</script>

<style>
.category {
  font-weight: 400;
}
#wishlist-button {
  background-color: #b9b9b9;
}
#add-to-cart-button {
  background-color: #febd69;
}
</style>

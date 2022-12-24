<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imgURL"
        width="50"
        height="43"
        alt="Card image cap"
      >
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
        <h5 class="card-title">
          {{ product.productName }}
        </h5>
      </router-link>
      <!-- <h5 class="card-title">
        {{ product.productName }}
      </h5> -->
      <p class="card-text">
        {{ product.productPrice }}
      </p>
      <!-- <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </router-link> -->
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
        <a
          href="#"
          class="btn btn-primary"
        >Go somewhere</a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  // props: {
  //   product: String,
  // },
  props: ["product"],
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
a {
  text-decoration: none;
}
.card-title {
  color: #484848;
}
</style>

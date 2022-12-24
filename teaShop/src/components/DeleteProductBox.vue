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
      <a
        href="#"
        class="btn btn-primary"
        @click="deleteProduct"
      >Delete</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeleteProductBox",
  // props: {
  //   product: String,
  // },
  props: ["product"],
  methods: {
        async deleteProduct() {
            const productToDelete = {
                id: this.product.id,
            }
            console.log(JSON.stringify(productToDelete));
            try {
                const response = await fetch(
                    "http://localhost:8000/admin/product/delete",
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(productToDelete),
                    }
                );
                
                const paseData = await response.json();
                console.log(paseData);
            } catch (err) {
                console.error(err.message);
            }
        }
    }
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

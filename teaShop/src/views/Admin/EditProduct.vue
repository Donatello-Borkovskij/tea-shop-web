<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3>Add Product</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3" />
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="productName"
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="productPrice"
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              v-model="productDescription"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              v-model="imgURL"
              type="text"
              class="form-control"
            >
          </div>
          <button
            type="button"
            class="btn btn-primary"
            @click="editProduct"
          >
            Edit product
          </button>
        </form>
      </div>
      <div class="col-3" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["baseURL", "products"],
  data() {
    return {
    //   id: null,
    //   productName: "",
    //   productDescription: "",
    //   productPrice: "",
    //   imgURL: "",
    product: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);

    console.warn("route", this.id);
    console.log(this.product);
  },
  methods: {
    async editProduct() {
      const newProduct = {
        id: this.product.id,
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
        imgURL: this.imgURL
      };
      console.log(JSON.stringify(newProduct));
      try {
        const response = await fetch(
          "http://localhost:8000/admin/product/edit",
          {
            method: "PUT",
            headers: {
              // 'Accept': 'application/json',
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(newProduct),
            body: JSON.stringify(newProduct),

          }
        );

        const parseData = await response.json();
        console.log(parseData);
      } catch (err) {
        console.error(err.message);
      }
    },
  },
};
</script>
<style scoped></style>

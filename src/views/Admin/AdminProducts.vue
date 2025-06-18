<template>
  <router-link to="/admin/product/add">
    <button class="btn btn-primary btn-lg">
      Admin Add Product
    </button>
  </router-link>
  <br>
  <router-link to="/admin/product/edit">
    <button class="btn btn-primary btn-lg">
      Admin Edit Product
    </button>
  </router-link>
  <br>
  <router-link to="/admin/product/delete">
    <button class="btn btn-primary btn-lg">
      Admin Delete Product
    </button>
  </router-link>
</template>

<script>
export default {};
</script>
<style>
.btn {
  margin-bottom: 20px;
}
</style>

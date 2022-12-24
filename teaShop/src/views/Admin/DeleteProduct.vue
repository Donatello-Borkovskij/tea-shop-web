<template>
  <div class="col-12 text-center">
    <h3>Delete product</h3>
  </div>
  <div class="container py-2">
    <div class="row">
      <div
        v-for="index in products.length"
        :key="index"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <DeleteProductBox :product="products[index - 1]" />
      </div>
    </div>
  </div>
</template>

<script>
import DeleteProductBox from "../../components/DeleteProductBox";
export default {
    name: "DeleteProduct",
    components: { DeleteProductBox },
    props: ["products"],
    data() {
        return {};
    },
}
</script>
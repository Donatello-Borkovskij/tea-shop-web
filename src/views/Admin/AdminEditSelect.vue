<template>
  <div class="col-12 text-center">
    <h3>Edit products</h3>
  </div>
  <div class="container py-2">
    <div class="row">
      <div
        v-for="index in products.length"
        :key="index"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <EditProductBox :product="products[index - 1]" />
      </div>
    </div>
  </div>
</template>

<script>
import EditProductBox from "../../components/EditProductBox";
export default {
    name: "EditSelect",
    components: { EditProductBox },
    props: ["products"],
    data() {
        return {};
    },
}
</script>
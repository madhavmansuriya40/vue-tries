<script>
import { products } from "../../constants/data";
export default {
  data() {
    return {
      products,
    };
  },
};
</script>

<template>
  <h1>Hey from Products Page</h1>
  <main>
    <div class="product-card" v-for="product in products">
      {{ product.name }} {{ product.price }}
      <button @click="$router.push('/products_preview/' + product.slug)">
        View Product Button
      </button>
      <RouterLink :to="'/products_preview/' + product.slug"
        >View Product</RouterLink
      >
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  gap: 20px;
}
.product-card {
  padding: 4vh;
  border-radius: 2vh;
  width: 10vw;
  border: 1px solid;
}
</style>

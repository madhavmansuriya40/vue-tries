<script>
import { products } from "../../constants/data";

export default {
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    const product = products.find(
      (product) => product.slug === this.$route.params.slug
    );

    if (!product) {
      // show 404 page
      this.$router.push({
        name: "NotFound",
      });
      return;
    }

    this.product = product;
  },
};
</script>

<template>
  <div v-if="product">
    <h1>Hey from Produc Preview Page</h1>
    {{ $route.params.slug }}
    <br /><br />
    {{ product }}

    <button
      type="button"
      @click="$router.push({ path: '/about', hash: '#contact' })"
    >
      Go to About #contact
    </button>
  </div>
</template>

<style></style>

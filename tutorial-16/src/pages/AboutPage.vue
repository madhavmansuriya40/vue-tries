<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<template>
  <h1>Hey from Home Page</h1>
  <div id="lading">Landing Contnet</div>
  <div id="products">Products Contnet</div>
  <div id="contact">Contant Contnet</div>
  <button @click="goToHome">Go to Home</button>
</template>

<style scoped>
div {
  height: 100vh;
  width: 100%;
  background-color: lightyellow;
  margin-bottom: 6vh;
  text-align: center;
}
button {
  padding: 4px;
  font-size: 20px;
}
</style>

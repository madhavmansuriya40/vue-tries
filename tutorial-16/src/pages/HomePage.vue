<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<template>
  <h1>Hey from Home Page</h1>
  <div id="lading">Landing Contnet</div>
  <div id="products">Products Contnet</div>
  <div id="contact">Contant Contnet</div>
  <button @click="goToAbout">Go to About</button>
</template>

<style scoped>
div {
  height: 100vh;
  width: 100%;
  background-color: lightcoral;
  margin-bottom: 6vh;
  text-align: center;
}
button {
  padding: 4px;
  font-size: 20px;
}
</style>

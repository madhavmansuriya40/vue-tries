<script></script>
<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/admin">Admin</RouterLink>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  background-color: lightseagreen;
}
div {
  display: flex;
  gap: 20px;
}
</style>

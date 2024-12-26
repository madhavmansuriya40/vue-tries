<script></script>

<template>
  <nav>
    <header class="header-header">
      <h1>Todo</h1>
      <button type="button" @click="$emit('openModal')">Add</button>
    </header>
  </nav>
</template>

<style scoped>
nav {
  height: 6vh;
}

h1 {
  font-size: 2rem;
}

.header-header {
  margin: 40px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 4px 8px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid gray;
  cursor: pointer;
  box-shadow: 2px 2px gray;
  font-size: 20px;
}
</style>

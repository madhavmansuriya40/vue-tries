<template>
  <header>
    <h1>Madhav</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: royalblue;
  padding: 2em;
}

header nav {
  display: flex;
  align-items: end;
  gap: 20px;
}
</style>

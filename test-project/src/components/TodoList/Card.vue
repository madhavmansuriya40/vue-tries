<script>
export default {
  props: {
    task: Object,
  },
};
</script>
<template>
  <div class="card-container">
    <div>
      <div class="card-title">{{ task.title }}</div>
      <div class="card-description">{{ task.description }}</div>
    </div>
    <div class="card-button-container">
      <button type="button" @click="$emit('removeTodo', task.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<style>
.card-container {
  height: 18vh;
  width: 14vw;
  border-radius: 10%;
  box-shadow: 2px 2px lightgray;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 2vh;
}

.card-title {
  font-size: 2rem;
}

.card-description {
  font-size: 1rem;
}

.card-button-container {
  display: flex;
  align-items: center;
}
</style>

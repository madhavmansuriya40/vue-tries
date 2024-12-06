<template>
  <div>
    <div class="counter-container">
      <div>
        <button type="button" @click="increment">Increase</button>
      </div>
      <div
        :class="[{ 'active-bg': isActive }, counterStyle]"
        class="counter-number"
      >
        {{ count }}
      </div>
      <div>
        <button type="button" @click="decrement">Decrease</button>
      </div>
    </div>
    <div>
      <button type="button" @click="toggleValue">Toggle</button>
      <div v-if="toggledValue">Hi It's going good</div>
      <div v-else>Aha.... Its awesome</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggledValue: false,
      isActive: false,
      counterStyle: "normal",
      count: 0,
    };
  },
  methods: {
    toggleValue() {
      this.toggledValue = !this.toggledValue;
    },
    increment() {
      this.count++;
      if (this.count > 0) {
        this.counterStyle = "good";
        this.isActive = true;
      } else if (this.count == 0) {
        this.counterStyle = "normal";
      }
    },

    decrement() {
      this.count--;
      if (this.count < 0) {
        this.counterStyle = "danger";
        this.isActive = false;
      } else if (this.count == 0) {
        this.counterStyle = "normal";
      }
    },
  },
};
</script>

<style scoped>
.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vh 0;
  gap: 40px;
}

button {
  font-size: 1.2em;
  cursor: pointer;
  padding: 1.2vh;
  border-radius: 4vh;
}

.counter-number {
  font-size: 2em;
}

.normal {
  color: royalblue;
}

.danger {
  color: red;
}

.good {
  color: green;
}

.active-bg {
  padding: 4vh;
  background-color: lightgreen;
}
</style>

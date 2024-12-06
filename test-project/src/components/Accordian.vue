<template>
  <div>
    <div class="para-container">
      <div class="heading">
        <div class="title">The content</div>
        <div class="toggle-button" @click="toggleContent">
          {{ displayContent ? "-" : "+" }}
        </div>
      </div>
      <div class="content">
        <p :class="{ 'content-text': displayContent }">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, omnis,
          aspernatur eligendi tenetur adipisci itaque ab fugit recusandae
          nostrum doloribus, dolorum possimus magnam ipsam cupiditate officia
          velit! Aperiam, eos sit.
        </p>
      </div>
    </div>
    <div :class="computedClass">Hello</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      error: {
        type: "Fatal",
      },
      displayContent: false,
    };
  },
  methods: {
    toggleContent() {
      this.displayContent = !this.displayContent;
    },
  },
  computed: {
    computedClass() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type == "Fatal",
      };
    },
  },
};
</script>

<style>
.active {
  background-color: lightgreen;
}

.text-danger {
  color: red;
}

.heading {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: aquamarine;
  border-radius: 1em;
}

.title {
  font-size: 2em;
  color: #4c4c4c;
}
.toggle-button {
  font-size: 2em;
  margin-right: 2vw;
  cursor: pointer;
}

.para-container {
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  border: 1px solid #4c4c4c;
  width: 40vw;
}

.content {
  margin: 4vh 0;
}

.content-text {
  display: none;
}
</style>

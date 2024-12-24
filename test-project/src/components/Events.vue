<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    movebutton() {
      console.log("Let's move the mouse");
    },
    sayHello() {
      console.log("key pressed");
    },
    handleInput(userName) {
      this.userName = userName;
    },
    clearInput() {
      this.userName = "";
    },
  },
};
</script>
<template>
  <button v-on:mouseenter="movebutton()">Click Me</button>
  <input @keyup.enter="sayHello()" type="text" />
  <div>
    {{ userName }}
    <input
      type="text"
      @input="(e) => handleInput(e.target.value)"
      @keyup.alt.enter="clearInput"
      :value="userName"
    />
  </div>
</template>
<style scoped></style>

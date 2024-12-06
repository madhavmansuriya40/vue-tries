<template>
  <div class="form-container">
    <div class="field-container">
      <label class="label" for="label_name">Name</label>
      <input type="text" id="name" placeholder="Name" />
    </div>
    <div class="field-container">
      <label class="label" for="label_email">Email</label>
      <input type="email" id="email" placeholder="Email" />
    </div>
    <div class="field-container">
      <label class="label" for="label_password">Password</label>
      <input type="password" id="password" placeholder="Password" />
    </div>

    <div class="error" v-show="error">
      {{ error.name }} | {{ error.email }} | {{ error.password }}
    </div>

    <div class="field-container">
      <button type="button" @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validateForm() {
      return false;
    },
    submitForm() {
      var isFormValid = this.validateForm();

      //   do something if form is not valid
      if (!isFormValid) {
        this.error.name = "Error in Name";
        this.error.email = "Error in Email";
        this.error.password = "Error in Password";
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.label {
  width: 5vw;
  display: inline-block;
}

input {
  border: 0;
  border-bottom: 1px solid #4c4c4c;
  width: 20vw;
  text-decoration: none;
  outline: none;
}

input::placeholder {
  opacity: 0.2;
  color: red;
}

.field-container {
  padding: 1vh;
}

button {
  padding: 1vh 2vw;
  border-radius: 4vh;
}
</style>

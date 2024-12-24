<template>
  <form action="">
    <div class="form-container">
      <div class="field-container" v-if="step === 1">
        <label class="label" for="label_name">Name</label>
        <input type="text" id="name" placeholder="Name" />
      </div>
      <div class="field-container" v-if="step === 2">
        <label class="label" for="label_email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>
      <div class="field-container" v-if="step === 3">
        <label class="label" for="label_password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>

      <div class="field-container">
        <button type="button" @click="handleBack" v-if="step > 1">Back</button>
        <button type="button" @click="handleSubmit">
          {{ step <= 2 ? "Next" : "Submit" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    handleSubmit() {
      if (this.step < 3) {
        this.step++;
      }
    },
    handleBack() {
      if (this.step > 1) {
        this.step--;
      }
    },
  },
};
</script>

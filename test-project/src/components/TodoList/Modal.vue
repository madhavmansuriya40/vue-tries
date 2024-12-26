<script>
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("saveTodo", this.form);
    },
  },
};
</script>

<template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-header-title">Add Todo</div>
        <div class="modal-header-close">
          <button type="button" @click="$emit('closeModal')">X</button>
        </div>
      </div>
      <div class="modal-form-container">
        <div class="modal-form-field-container">
          <label for="title">Title</label>
          <input type="text" placeholder="Add Title" v-model="form.title" />
        </div>
        <div class="modal-form-field-container">
          <label for="description">Description</label>
          <input
            type="text"
            placeholder="Add Description"
            v-model="form.description"
          />
        </div>
      </div>
      <div class="modal-footer">
        <div class="modal-footer-button-contaienr">
          <button class="cancle" @click="$emit('closeModal')">Cancle</button>
          <button class="add" @click="submitForm">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute !important;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.modal-container {
  z-index: 100;
  width: 40vw;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.modal-header {
  display: flex;
  justify-content: space-evenly;
}
.modal-header-title {
  font-size: 2rem;
}
.modal-header-close button {
  font-size: 1em;
  cursor: pointer;
}

.modal-form-container {
  margin-top: 2vh;
}

.modal-form-field-container {
  margin: 2vh 0;
}

.modal-form-field-container label {
  display: inline-block;
  width: 6vw;
  max-width: 6vw;
}

.modal-footer {
  margin: 4vh 0;
}

.modal-footer-button-contaienr {
  display: flex;
  justify-content: space-evenly;
}

.modal-footer-button-contaienr button {
  padding: 1vh;
  border-radius: 4vh;
}
</style>

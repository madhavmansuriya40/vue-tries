<script>
export default {
  data() {
    return {
      form: {
        name: "",
        age: 0,
        message: "",
        sports: [],
        gender: "",
        role: [],
        dynamicRoles: [],
      },
    };
  },
  computed: {
    dynamicData() {
      return [
        {
          text: "Front End",
          value: "frontend",
        },
        {
          text: "Back End",
          value: "backend",
        },
        {
          text: "Full Stack",
          value: "fullstack",
        },
      ];
    },
  },
  methods: {},
};
</script>

<template>
  <div class="vmodel-form">
    {{ form }}
    <h3 class="vmodel-form-heading">VBind-Form</h3>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="form.name" />
    </div>
    <br /><br />
    <div>
      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="form.age" />
    </div>
    <br /><br />
    <div>
      <label for="age">Message</label>
      <textarea name="message" id="message" v-model="form.message"></textarea>
    </div>
    <br /><br />
    <div>
      <label for="age">Sports</label>
      <br />
      <label for="cricket">
        Cricket
        <input
          type="checkbox"
          name="cricket"
          id="cricket"
          value="cricket"
          v-model="form.sports"
        />
      </label>
      <label for="cricket">
        VolleyBall
        <input
          type="checkbox"
          name="volleyball"
          id="volleyball"
          value="volleyball"
          v-model="form.sports"
        />
      </label>

      <br /><br />
      <label for="Female">
        Female
        <input
          type="radio"
          name="female"
          id="female"
          value="female"
          v-model="form.gender"
        />
      </label>
      <label for="Male">
        Male
        <input
          type="radio"
          name="male"
          id="male"
          value="male"
          v-model="form.gender"
        />
      </label>
      <br />
      <br />
      <label>Role</label>
      <select v-model="form.role" multiple>
        <option value="" disabled selected>Please select a role</option>
        <option value="admin">Admin</option>
        <option value="hod">HOD</option>
        <option value="hop">HOP</option>
      </select>
      <br />
      <br />
      <label>Dynamic Role</label>
      <select v-model="form.dynamicRoles" multiple>
        <option value="" disabled>Please select a role</option>
        <option :value="role.value" v-for="role in dynamicData">
          {{ role.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.vmodel-form {
  margin-top: 4vh;
  margin-bottom: 4vh;
  justify-content: center;
  text-align: center;
}

.vmodel-form-heading {
  margin-bottom: 20px;
}
</style>

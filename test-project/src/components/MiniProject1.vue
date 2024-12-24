<script>
export default {
  data() {
    return {
      count: 0,
      question: "",
      answer: "answer usually contains a question mark :)",
      loading: false,
      post: {
        comment: "",
        totalWords: 0,
      },
      form: {
        emal: null,
        message: "",
        slogan: "",
        slug: "",
        password: "",
        passwordStrength: "",
      },
      newForm: {
        name: null,
        email: null,
      },
    };
  },
  watch: {
    count(newValue, oldValue) {
      if (newValue % 2 == 0) {
        console.log("Yeah! It's divisbile by 2");
      }
    },
    question(newValue, oldValue) {
      if (newValue.includes("?")) {
        this.getAnswer();
      }
    },
    "form.slogan"(newValue, oldValue) {
      this.form.slug = newValue.replaceAll(" ", "-");
    },
    "form.email"(newValue, oldValue) {
      console.log("Email");
      const regexPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (regexPattern.test(newValue)) {
        this.form.message = "Valid Email";
      } else {
        this.form.message = "Invalid Email";
      }
    },
    "form.password": {
      handler(newValue) {
        const strongPasswordRegex =
          /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
        if (strongPasswordRegex.test(newValue)) {
          this.form.passwordStrength = "STRONG";
        } else {
          this.form.passwordStrength = "WEAK";
        }
      },
      immediate: true,
    },
    "post.comment": {
      handler(newComment, oldComment) {
        this.post.totalWords = newComment.length;
      },
    },
    newForm: {
      handler(newValue, oldValue) {
        console.log(newValue.name);
        console.log(newValue.email);
      },
      deep: true,
    },
  },
  methods: {
    async getAnswer() {
      this.loading = true;
      this.answer = "Thinking...";

      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API! " + error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <br /><br />
  <h1>{{ count }}</h1>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>

  <br /><br />
  <p>Ask a question</p>
  <input type="text" v-model="question" :disabled="loading" />
  <p>{{ answer }}</p>

  <br /><br />
  <p>Email Validation using watch</p>
  <input type="text" v-model="form.email" />
  <p>{{ form.message }}</p>

  <br /><br />
  <p>Email Validation using deep watch</p>
  <input type="text" v-model="newForm.name" placeholder="Enter Name" />
  <input type="text" v-model="newForm.email" placeholder="Enter Email" />
  <p>{{ form.message }}</p>

  <br /><br />
  <p>Slug</p>
  <input type="text" v-model="form.slogan" placeholder="Enter slogan" />
  <p>{{ form.slug }}</p>

  <br /><br />
  <p>Strong Password Checker</p>
  <input type="text" v-model="form.password" placeholder="Enter password" />
  <p>{{ form.passwordStrength }}</p>

  <br /><br />
  <p>Twitter post</p>
  <textarea v-model="post.comment"></textarea>
  <p>{{ post.totalWords }}/200</p>
</template>

<style scoped>
p,
h1 {
  font-weight: bold;
}
</style>

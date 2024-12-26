<script>
import Header from "@/components/TodoList/Header.vue";
import Card from "@/components/TodoList/Card.vue";
import Modal from "@/components/TodoList/Modal.vue";

export default {
  components: {
    Header,
    Card,
    Modal,
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Title 1", description: "loream 1" },
        { id: 2, title: "Title 2", description: "loream 2" },
        { id: 3, title: "Title 3", description: "loream 3" },
        { id: 4, title: "Title 4", description: "loream 4" },
      ],
      showModal: false,
    };
  },
  methods: {
    addTodo(todo) {
      const randomId = Math.floor(Math.random() * this.todos.length);

      this.todos.push({
        id: randomId,
        title: todo.title,
        description: todo.description,
      });

      this.showModal = false;
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
<template>
  <div class="main-container">
    <!-- Header Section -->
    <Header @openModal="showModal = true" />
    <div class="todo-card-container">
      <Card
        v-for="(task, index) in todos"
        :task="task"
        key="index"
        @removeTodo="(id) => removeTodo(id)"
      />
    </div>
    <Modal
      class="modal-container"
      v-if="showModal"
      @closeModal="showModal = false"
      @saveTodo="(todo) => addTodo(todo)"
    />

    <!-- Card Section -->
  </div>
</template>
<style scoped>
.main-container {
  position: relative;
}

.todo-card-container {
  margin: 2vw;
  display: flex;
  gap: 2vw;
  flex-wrap: wrap;
}
</style>

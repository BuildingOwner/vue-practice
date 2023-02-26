<template>
  <div>
    <h2>Todo List</h2>
    <button @click="getTodoList">request todo</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>

    <div>
      <label for="todo">할일</label>
      <input type="text" v-model="todoItem.title" />
      <button @click="createTodo">전송</button>
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "todoList",
  data() {
    return {
      todoList: [],
      errorMessage: "",
      todoItem: {
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    getTodoList() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .get(url)
        .then((res) => (this.todoList = res.data))
        .catch((e) => (this.errorMessage = "err!!!"));
    },
    createTodo() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .post(url, this.todoItem)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style></style>

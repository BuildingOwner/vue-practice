<template>
  <div>
    <h2>child comp</h2>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "childComp",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("say hello");
    },
  },
  beforeCreate() {
    console.log("child before create");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child before mounte");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child before update");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("child before unmounte");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>

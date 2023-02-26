<template>
  <div>
    <h2>parent comp</h2>
    <input type="text" v-model="nickname" ref="inputRef" />
    <button @click="consoleRef">console ref</button>
    <hr />
    <ChildComp v-if="showChild" ref="childComp" />
    <button @click="showChild = false">unmount chlid</button>
  </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";
export default {
  name: "parentComp",
  components: {
    ChildComp,
  },
  data() {
    return {
      nickname: "",
      showChild: true,
    };
  },
  methods: {
    consoleRef() {
      console.log(this.$refs.inputRef, "input ref");
      console.log(this.$refs.childComp, "childComp");
      this.$refs.childComp.sayHello();
    },
  },
  beforeCreate() {
    console.log("parent before create");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent before mounte");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    console.log("parent before update");
  },
  updated() {
    console.log("parent updated");
  },
  beforeUnmount() {
    console.log("parent before unmounte");
  },
  unmounted() {
    console.log("parent unmounted");
  },
};
</script>

<style></style>

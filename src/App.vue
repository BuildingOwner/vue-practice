<template>
  <div>
    <h2>composition</h2>
    <TestComp />
  </div>
</template>

<script>
import TestComp from "./components/composition/TestComp.vue";
export default {
  name: "App",
  components: { TestComp },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style scoped></style>

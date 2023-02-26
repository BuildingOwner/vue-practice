<template>
  <div>
    <h2>comp3</h2>
    <h3>passed Data from App {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "compThree",
  inject: ["name"],
};
</script>

<style></style>

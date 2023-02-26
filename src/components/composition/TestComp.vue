<template>
  <div>
    <h2>reusability</h2>
    <hr />
    <FeeStatus />
    <hr />
    <ProductStatus />
    <hr />
    <SavingStatus />
  </div>
</template>

<script>
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";
export default {
  name: "testComp",
  components: { FeeStatus, ProductStatus, SavingStatus },
};
</script>

<style></style>

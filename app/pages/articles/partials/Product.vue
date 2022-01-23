<template>
  <div class="product">
    <div class="image">foto</div>
    <div class="text">texto</div>
  </div>
</template>

<script>
export default {
  name: "EzProduct",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>

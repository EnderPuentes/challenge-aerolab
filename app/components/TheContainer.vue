<template>
  <div class="the-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EzTheContainer",
};
</script>

<style lang="scss" scoped>
.the-container {
  display: block;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>

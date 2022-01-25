<template>
  <div class="the-title">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "EzTheTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.the-title {
  padding: 20px 0;
  h2 {
    @extend %helvetica-neue-medium;
    font-size: 24px;
    line-height: 24px;
    color: $Black;
  }
}
</style>

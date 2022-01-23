<template>
  <div class="the-loading">
    <img src="/images/loading.gif" alt="Cargando" />
  </div>
</template>

<script>
export default {
  name: "EzTheLoading",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.the-loading {
  padding: 20px 0;
  h2 {
    @extend %helvetica-neue-medium;
    font-size: 24px;
    line-height: 24px;
    color: $Black;
  }
}
</style>

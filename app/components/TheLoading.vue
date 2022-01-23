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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  img {
    width: 40px;
  }
}
</style>

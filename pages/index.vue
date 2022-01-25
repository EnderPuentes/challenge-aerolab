<template>
  <div id="page-home"></div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    console.log(this.$router.options.routes);
    this.$router.push({
      name: "products",
    });
  },
};
</script>

<style lang="scss" scoped>
#page-home {
}
</style>

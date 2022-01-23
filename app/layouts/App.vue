<template>
  <main id="app">
    <the-header />
    <Nuxt />
  </main>
</template>

<script>
import TheHeader from "~/components/Layouts/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
#app {
  @extend %sf-pro-regular;
}
</style>

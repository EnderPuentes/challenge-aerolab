<template>
  <div id="app">
    <the-header />
    <main>
      <the-container>
        <nuxt />
      </the-container>
    </main>
  </div>
</template>

<script>
import TheHeader from "./partials/TheHeader.vue";
import TheContainer from "./partials/TheContainer.vue";
export default {
  components: {
    TheHeader,
    TheContainer,
  },
};
</script>

<style lang="scss" scoped>
#app {
  @extend %sf-pro-regular;
  background-color: $Grey;
  min-height: 100vh;
  padding-top: 62px;
}
</style>

<template>
  <div id="page-articles">
    <the-title text="Almacén" />
  </div>
</template>

<script>
import TheTitle from "~/components/TheTitle.vue";
export default {
  name: "ArticlesPage",
  components: {
    TheTitle,
  },
  layout: "App",
  head() {
    return {
      title: "Articulos",
    };
  },
};
</script>

<style lang="scss" scoped>
#page-articles {
}
</style>

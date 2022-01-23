<template>
  <div id="page-products">
    <the-title text="Almacén" />
    <div class="list">
      <module
        v-for="(item, index) in items"
        :key="`product-${index}`"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheTitle from "~/components/TheTitle.vue";
import Module from "./partials/Module.vue";

export default {
  name: "ProductsPage",
  components: {
    TheTitle,
    Module,
  },
  layout: "App",
  data() {
    return {
      loading: false,
    };
  },
  async fetch({ store }) {
    await store.dispatch("products/get", 1);
  },
  head() {
    return {
      title: "Almacén",
    };
  },
  mounted() {
    window.onscroll = async () => {
      let scrollPosition =
        document.documentElement.scrollTop + window.innerHeight + 100;
      if (scrollPosition >= document.documentElement.offsetHeight) {
        document.documentElement.scrollTop =
          document.documentElement.scrollTop + window.innerHeight;
        if (!this.loading && this.pagination.page < this.pagination.pageCount) {
          this.loading = true;
          await this.$store.dispatch("products/get", this.pagination.page + 1);
          this.loading = false;
        }
      }
    };
  },
  computed: {
    ...mapGetters("products", ["items", "pagination"]),
  },
};
</script>

<style lang="scss" scoped>
#page-products {
  .list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

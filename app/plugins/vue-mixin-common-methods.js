import Vue from "vue";

Vue.mixin({
  methods: {
    mixinFormatPrice(value) {
      return Number(value)
        .toFixed(2)
        .replace(/\D/g, ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
});

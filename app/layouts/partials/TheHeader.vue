<template>
  <header>
    <the-container>
      <div class="header-container">
        <logo />
        <shopping-cart />
      </div>
    </the-container>
  </header>
</template>

<script>
import Logo from "./partials/Logo.vue";
import ShoppingCart from "./partials/ShoppingCart.vue";
import TheContainer from "./TheContainer.vue";
export default {
  name: "EzTheHeader",
  components: {
    Logo,
    ShoppingCart,
    TheContainer,
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 62px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04),
    inset 0 -1px 0 0 rgba(0, 0, 0, 0.12);
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

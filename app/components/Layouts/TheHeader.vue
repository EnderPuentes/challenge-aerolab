<template>
  <header>
    <the-container>
      <logo />
    </the-container>
  </header>
</template>

<script>
import Logo from "./partials/Logo.vue";
import TheContainer from "~/components/TheContainer.vue";
export default {
  name: "EzTheHeader",
  components: {
    Logo,
    TheContainer,
  },
};
</script>

<style lang="scss" scoped>
header {
  min-height: 62px;
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04),
    inset 0 -1px 0 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

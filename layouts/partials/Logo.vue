<template>
  <div class="logo">
    <img src="/images/logo.png" alt="Ezshop" />
    <h1>Ez<span>shop</span></h1>
  </div>
</template>

<script>
export default {
  name: "EzLogo",
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95.1px;
  img {
    width: 29px;
    height: 32px;
    margin-right: 8px;
  }
  h1 {
    color: $Blue;
    font-size: 17px;
    span {
      @extend %sf-pro-regular;
    }
  }
}
</style>

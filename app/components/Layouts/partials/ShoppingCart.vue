<template>
  <div class="shopping-cart">
    <span class="total">$&nbsp;{{ Number(total.price).toFixed(2) }}</span>
    <div class="icon">
      <img src="/images/shopping-cart.png" alt="Shopping Cart" />
      <span class="amount">{{ total.amount }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EzShoppingCart",
  computed: {
    ...mapGetters("shopping-cart", ["total"]),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  .total {
    @extend %sf-pro-semibold;
    font-size: 14px;
    color: $Blue;
  }
  .icon {
    position: relative;
    margin-left: 7px;
    img {
      width: 22px;
      height: 21px;
    }
    .amount {
      position: absolute;
      top: -11px;
      right: -11px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      font-size: 8px;
      color: $White;
      background-color: $Blue;
      border: solid 2px $White;
      border-radius: 50%;
    }
  }
}
</style>

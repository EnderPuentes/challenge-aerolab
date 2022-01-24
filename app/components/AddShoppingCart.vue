<template>
  <div class="add-shopping-cart">
    <div v-if="itemShoppingCart" class="update">
      <button
        type="button"
        @click="update(itemShoppingCart.amount - 1, 'update')"
      >
        -
      </button>
      <input :value="itemShoppingCart.amount" min="1" type="number" disabled />
      <button
        type="button"
        @click="update(itemShoppingCart.amount + 1, 'update')"
      >
        +
      </button>
    </div>
    <div v-else class="add">
      <button type="button" @click="update(1, 'add')">
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzAddShoppingCart",
  props: {
    idProduct: {
      type: Number,
      required: true,
    },
    priceProduct: {
      type: Number,
      required: true,
    },
  },
  computed: {
    itemShoppingCart() {
      return this.$store.getters["shopping-cart/items"].find(
        (item) => item.id === this.idProduct
      );
    },
  },
  methods: {
    async update(newAmount, action) {
      await this.$store.dispatch("shopping-cart/update", {
        action,
        item: {
          id: this.idProduct,
          price: this.priceProduct,
          amount: newAmount,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-shopping-cart {
  padding: 20px 0;
  .add {
    button {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 132px;
      height: 32px;
      background-color: $White;
      padding: 9px 0;
      border: solid 1px $Blue;
      border-radius: 3px;
      text-align: center;
      font-size: 13px;
      line-height: 13px;
      color: $Blue;
      cursor: pointer;
    }
  }
  .update {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      display: block;
      width: calc(100% - 64px);
      height: 32px;
      background-color: $White;
      border: none;
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      color: $Blue;
    }
    button {
      display: block;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 3px;
      background-color: $Blue;
      color: $White;
      cursor: pointer;
    }
  }
}
</style>

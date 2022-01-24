<template>
  <div class="product-module">
    <div class="image">
      <img :src="data.photo" :alt="data.name" />
    </div>
    <div class="text">
      <div class="title">
        <h5>{{ data.name }}</h5>
      </div>
      <div class="price">
        <h6 v-if="data.originalPrice > data.price">
          ${{ mixinFormatPrice(data.originalPrice) }}
        </h6>
        <h3>
          <template v-if="itemShoppingCart"
            >{{ itemShoppingCart.amount }}x </template
          >${{ mixinFormatPrice(data.price) }}
        </h3>
      </div>
      <div class="add-shopping-cart">
        <div v-if="itemShoppingCart" class="update">
          <button
            type="button"
            @click="update(itemShoppingCart.amount - 1, 'update')"
          >
            -
          </button>
          <input
            :value="itemShoppingCart.amount"
            min="1"
            type="number"
            disabled
          />
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
    </div>
  </div>
</template>

<script>
export default {
  name: "EzProductModule",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      amount: 0,
    };
  },
  computed: {
    itemShoppingCart() {
      return this.$store.getters["shopping-cart/items"].find(
        (item) => item.id === this.data.id
      );
    },
  },
  methods: {
    async update(newAmount, action) {
      await this.$store.dispatch("shopping-cart/update", {
        action,
        item: {
          id: this.data.id,
          price: this.data.price,
          amount: newAmount,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-module {
  background-color: $White;
  width: 100%;
  max-width: calc(50% - 15px);
  border-radius: 3px;
  margin: 0 7.5px 15px;
  @media (min-width: 550px) {
    max-width: calc(33.3% - 15px);
  }
  @media (min-width: 767px) {
    max-width: calc(25% - 15px);
  }
  @media (min-width: 991px) {
    max-width: calc(20% - 15px);
  }
  .image {
    position: relative;
    height: 148px;
    width: 100%;
    img {
      object-fit: contain;
      object-position: center;
      position: absolute;
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      left: 15px;
      top: 15px;
    }
  }
  .text {
    padding: 15px;
    text-align: center;
    .title {
      display: block;
      margin-bottom: 15px;
      height: 40px;
      h5 {
        color: $Black;
        font-size: 14px;
        line-height: 20px;
        @extend %sf-pro-regular;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      h6 {
        font-size: 12px;
        line-height: 12px;
        color: $Black;
        text-decoration: line-through;
        margin-right: 6px;
      }
      h3 {
        color: $Blue;
        font-size: 16px;
        line-height: 16px;
        @extend %sf-pro-semibold;
      }
    }
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
  }
}
</style>

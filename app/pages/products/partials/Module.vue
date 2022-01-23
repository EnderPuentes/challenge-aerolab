<template>
  <div class="product-module">
    <div class="image">
      <img :src="data.photo" :alt="data.name" />
    </div>
    <div class="text">
      <span class="title">
        <h5>{{ data.name }}</h5>
      </span>
      <span class="price">
        <h6 v-if="data.originalPrice > data.price">
          ${{ mixinFormatPrice(data.originalPrice) }}
        </h6>
        <h3>${{ mixinFormatPrice(data.price) }}</h3>
      </span>
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
      amount: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-module {
  background-color: $White;
  width: 100%;
  max-width: calc(50% - 7.5px);
  border-radius: 3px;
  margin-bottom: 15px;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    img {
      display: block;
      width: 100%;
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
  }
}
</style>

<template>
  <div id="app">
    <the-header />
    <main>
      <the-container>
        <template v-if="$nuxt.isOffline">
          <div class="offline">
            <img src="/images/offline.png" alt="Offline" />
            <p>Parece que no tienes conexión a internet</p>
          </div>
        </template>
        <template v-else>
          <nuxt />
        </template>
      </the-container>
    </main>
  </div>
</template>

<script>
import TheHeader from "./partials/TheHeader.vue";
import TheContainer from "./partials/TheContainer.vue";
export default {
  components: {
    TheHeader,
    TheContainer,
  },
};
</script>

<style lang="scss" scoped>
#app {
  @extend %sf-pro-regular;
  background-color: $Grey;
  min-height: 100vh;
  padding-top: 62px;
  .offline {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
    p {
      margin: 15px 0;
    }
  }
}
</style>

<template>
  <div id="page-home">
    <h1>Bienvenido</h1>
    <nuxt-link
      :to="{
        name: 'articles'
      }"
    >
      Ver Articulos
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
#page-home{
}
</style>
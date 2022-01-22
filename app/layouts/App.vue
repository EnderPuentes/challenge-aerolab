<template>
    <main id="app">
        <TheHeader />
        <Nuxt />
        <TheFooter />
    </main>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
export default {

    components: {
        TheHeader,
        TheFooter,
    }

};
</script>

<style lang="scss" scoped>
#app{
}
</style>
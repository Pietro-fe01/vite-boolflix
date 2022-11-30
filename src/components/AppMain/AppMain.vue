<script>
import {store} from '/src/store.js';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <main class="container">
        <section class="film">
            <h2>Film</h2>
            <AppCard
            v-for="movie in this.store.movies"
            :infoMovie="movie"
            />
        </section>  
        <section class="serie">
            <h2>Serie TV</h2>
            <AppCard
            v-for="serie in this.store.series"
            :infoSerie="serie"
            />
        </section>
    </main>
</template>

<style lang="scss" scoped>
</style>
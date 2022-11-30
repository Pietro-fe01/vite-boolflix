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
    <main>
        <AppCard
        v-for="movie in this.store.movies"
        :info="movie"
        />
    </main>
</template>

<style lang="scss" scoped>
</style>
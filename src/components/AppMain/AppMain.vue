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
        <h2 v-if="(this.store.movies.length !== 0)">Film</h2>
        <section class="film">
            <AppCard
            v-for="movie in this.store.movies"
            :infoMovie="movie"
            />
        </section>  
        <h2 v-if="(this.store.movies.length !== 0)">Serie TV</h2>
        <section class="serie">
            <AppCard
            v-for="serie in this.store.series"
            :infoSerie="serie"
            />
        </section>
        <div v-if="(this.store.movies.length === 0)" class="pre-message">
            <h2>Benvenuto! Effettua una ricerca per visualizzare la lista dei film!</h2>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main {
        color: white;
        margin-right: 0;
        height: calc(100vh - 4.2rem);
        h2{
            color: white;
            padding: .625rem 0;
        }
        section{
            display: flex;
            overflow-x: auto;
            margin-bottom: .9375rem;
        }
        .pre-message{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
</style>
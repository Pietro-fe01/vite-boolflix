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
            store,
        }
    },
    methods: {
        clearAll: function(){
            this.store.movies = [];
            this.store.series = [];
        }
    }
}
</script>

<template>
    <main>
        <!-- Film -->
        <section v-if="(this.store.movies.length > 0)">
            <h2>Film</h2>
            <div class="film">
                <AppCard
                v-for="movie in this.store.movies"
                :infoMovie="movie"
                />
            </div>
        </section>
        <!-- /Film -->

        <!-- Serie TV -->
        <section v-if="(this.store.series.length > 0)">
            <h2>Serie Tv</h2>
            <div class="serie">
                <AppCard
                v-for="serie in this.store.series"
                :infoSerie="serie"
                />
            </div>
        </section>
        <!-- /Serie TV -->

        <!-- Messaggio che viene stampato solo se il campo input è vuoto -->
        <div v-if="this.store.searchText === ''" class="pre-message">
            <h2>Benvenuto, inizia subito la ricerca !</h2>
            {{clearAll()}}
        </div>
        <!-- /Messaggio che viene stampato solo se il campo input è vuoto -->

        <!-- Messaggio che viene stampato solo se la ricerca non trova nulla -->
        <div v-if="this.store.searchText.length > 1 && (this.store.movies.length === 0 && this.store.series.length === 0)" class="pre-message">
            <h2>Spiacente, nessun risultato.</h2>
        </div>
        <!-- /Messaggio che viene stampato solo se la ricerca non trova nulla -->
    </main>
</template>

<style lang="scss" scoped>
    main {
        color: white;
        margin-right: 0;
        height: calc(100% - 70px);
        position: relative;

        section{
            padding-top: 40px;
        }   

        section h2{
            color: white;
            margin-bottom: 15px;
            margin-left: 15px;
        }
        div.serie, div.film {
            display: flex;
            overflow-x: auto;
            margin-bottom: .9375rem;
        }
        .pre-message{
            background-color: rgba($color: #000000, $alpha: 0.5);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0 20px;
            height: 200px;
            line-height: 200px;
            border-radius: 1.875rem;
            border: 3px dashed red;
        }
    }
</style>
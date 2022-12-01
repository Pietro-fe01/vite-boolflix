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
    }
}
</script>

<template>
    <main>
        <!-- Film -->
        <section v-if="(this.store.movies.length > 0 && this.store.searchText !== '')">
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
        <section v-if="(this.store.series.length > 0 && this.store.searchText !== '')">
            <h2>Serie Tv</h2>
            <div class="serie">
                <AppCard
                v-for="serie in this.store.series"
                :infoSerie="serie"
                />
            </div>
        </section>
        <!-- /Serie TV -->

        <!-- Film e Serie TV più popolari -->
        <section v-if="(this.store.searchText === '')">
            <h2>I più popolari</h2>
            <div class="popular">
                <AppCard
                v-for="popular in this.store.mostPopular"
                :infoMostPopular="popular"
                />
            </div>
        </section>
        <!-- /Film e Serie TV più popolari -->

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
            margin-bottom: 5px;
            margin-left: 20px;
        }
        div.serie, div.film, div.popular {
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
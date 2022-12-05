<script>
  import {store} from '/src/store.js';
  import axios from 'axios';
  import AppHeader from './components/AppHeader/AppHeader.vue';
  import AppMain from './components/AppMain/AppMain.vue';

  export default {
    components: {
      AppHeader,
      AppMain
    },
    data(){
      return {
        store,
        pageCounter: 1
      }
    },
    methods: {
      findFilmsAndSeries(){
        // Chiamata API per i film
        if(this.store.searchText !== ""){
          axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: "b90930156a2c5e50e179e531a115e906",
              query: this.store.searchText,
              language: "it-IT"
            }
          })
          .then(res => {
            this.store.movies = res.data.results;
          });
  
          // Chiamata API per le serie TV
          axios.get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "b90930156a2c5e50e179e531a115e906",
              query: this.store.searchText,
              language: "it-IT"
            }
          })
          .then(res => {
            this.store.series = res.data.results;
          });
        }
      },
      // Lista film più popolari
      findMostPopular(pageNumber){
        axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            language: "it-IT",
            page: pageNumber
          }
        })
        .then(res => {
          this.store.mostPopular = res.data.results;
        })
      },
      // I più votati
      findTopRated(){
        axios.get("https://api.themoviedb.org/3/movie/top_rated", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            language: "it-IT"
          }
        })
        .then(res => {
          this.store.topRated = res.data.results;
        })
      },
      // Generi dei film
      findMovieGenres(){
        axios.get("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            language: "it-IT"
          }
        })
        .then(res => {
          this.store.allGenres = res.data.genres;
        })
      },
      // Generi serie TV
      findSerieGenres(){
        axios.get("https://api.themoviedb.org/3/genre/tv/list", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            language: "it-IT"
          }
        })
        .then(res => {
          let serieGenres = res.data.genres;
          serieGenres.forEach(element => {
            return this.store.allGenres.push(element)
          });
        })
      },
      changing(whichCategory){
        if(whichCategory === 'popular'){
          this.pageCounter++;
          this.findMostPopular(this.pageCounter)
        }
      }
    },
    created(){
      this.findMostPopular();
      this.findTopRated();
      this.findMovieGenres();
      this.findSerieGenres();
    }
  }
</script>

<template>
  <AppHeader @performSearch="findFilmsAndSeries"/>
  <AppMain @changePage="changing"/>
</template>

<style lang="scss">
  @import './style/global.scss';
</style>

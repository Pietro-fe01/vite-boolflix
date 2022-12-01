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
        store
      }
    },
    methods: {
      findFilmsAndSeries(){
        if(this.store.searchText !== ''){
          this.findFilms();
          this.findSeries();
        }
      },
      // Match film tramite ricerca input
      findFilms(){
        axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            query: this.store.searchText,
            language: "it-IT"
          }
        })
        .then(res => {
          this.store.movies = res.data.results;
        })
      },
      // Match serie TV tramite ricerca input
      findSeries(){
        axios.get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            query: this.store.searchText,
            language: "it-IT"
          }
        })
        .then(res => {
          this.store.series = res.data.results;
        })
      },
      // Lista film più popolari
      findMostPopular(){
        axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: "b90930156a2c5e50e179e531a115e906",
            language: "it-IT"
          }
        })
        .then(res => {
          this.store.mostPopular = res.data.results;
        })
      },
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
  <AppMain />
</template>

<style lang="scss">
  @import './style/global.scss';
</style>

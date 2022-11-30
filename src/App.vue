<script>
  import {store} from '/src/store.js';
  import axios from 'axios';
  import AppHeader from './components/AppHeader/AppHeader.vue';
  import AppMain from './components/AppMain/AppMain.vue';
import { registerRuntimeHelpers } from '@vue/compiler-core';

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
        this.findFilms()
        this.findSeries()
      },
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
      }
    }
  }
</script>

<template>
  <AppHeader @performSearch="findFilmsAndSeries"/>

  <AppMain />
</template>

<style lang="scss">
  @import './style/global.scss'
</style>

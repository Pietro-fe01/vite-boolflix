import {reactive} from 'vue';

export const store = reactive ({
    searchText: '',
    movies: [],
    series: [],
    mostPopular: [],
    topRated: [],
    allGenres: [], 
});
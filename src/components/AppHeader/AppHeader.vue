<script>
import {store} from '/src/store.js';

export default {
    name: 'AppHeader',
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <form @submit.prevent>
            <input type="text" placeholder="Cerca film" v-model="store.searchText">
            <button type="submit" @click="$emit('performSearch')">CERCA</button>
        </form>
    </header>
</template>

<style lang="scss" scoped>

</style>
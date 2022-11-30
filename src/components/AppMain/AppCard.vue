<script>

export default {
    name: 'AppCard',
    props: {
        infoMovie: Object,
        infoSerie: Object
    }
}
</script>

<template>
    <section>
        <!-- Qua verranno stampati i film -->
        <div v-if="this.infoMovie">
            <ul>
                <li>
                    <div>Titolo: {{infoMovie.title}}</div>
                    <div>Titolo Originale: {{infoMovie.original_title}}</div>
                    <div>Lingua: {{infoMovie.original_language}}</div>
                    <div>Voto: {{infoMovie.vote_average}}</div>
                </li>
            </ul>
        </div>
        <!-- /Qua verranno stampati i film -->

        <!-- Qua verranno stampati le serie TV -->
        <div v-else="this.infoSerie">
            <nav>
                <ul>
                    <li>
                        <div>Titolo: {{ infoSerie.name }}</div>
                        <div>Titolo originale: {{ infoSerie.original_name }}</div>
                        <div>Lingua: {{ infoSerie.original_language }}</div>
                        <div>Voto: {{ infoSerie.vote_average }}</div>
                    </li>
                </ul>
            </nav>
        <!-- /Qua verranno stampati le serie TV -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>
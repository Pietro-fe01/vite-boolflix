<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    }
}
</script>

<template>
    <section>
        <div>
            <ul>
                <li>
                    <div>
                        Titolo: {{info.title}}
                    </div>
                    <div>
                        Titolo Originale: {{info.original_title}}
                    </div>
                    <div>
                        Lingua: {{info.original_language}}
                    </div>
                    <div>
                        Voto: {{info.vote_average}}
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>
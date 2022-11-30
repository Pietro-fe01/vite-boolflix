<script>

export default {
    name: 'AppCard',
    props: {
        infoMovie: Object,
        infoSerie: Object,
    },
    data(){
        return {
            languageFlags: {
                default: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=='
                },
                es: {
                    img: 'data:image/png;base64,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'
                },
                en: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAzFBMVEXPFCv///8AJH3NABPuu78AAHXvwMTwxMj6+/0AFHn09vrMAAAAAHLPESkAIHz++PnOACAAHXvNABfNABz++vsAD3fNABT00tV6hK/MAAnOACLP0+Le4ev2292gp8X88fKVnb7jjJPYVGDedX7gfobRJjk5So/o6/JueaiKk7gACXYqPoncaXPRIjbTNETkkZjhhYw+TpHaYGrJzd7ss7hmcqTa3enfeIATLoJEVJOmrcjXUFzqrbK0utIWMIN/ibIkOofmmqDVQU/55+kRjllyAAAJqklEQVR4nO2dCVfbOBRGHQcTFidNMIEmZS37UigtLXSh0Pb//6exwbvkp+U9SfSMvnM6w2DiyPfceZJp/BTc9bqzdBZPQtIsL5UnX+gHUPoL1TCWaQcxic/yYWweDdvvmwwH2R+AytbFOelwXgOT84utl/OuH6y2kQxXD9Z7+b+6s0eqinsmk3gvP+1gmHAkSQ88fzW3popzJgJJng9VxlhRxTETCUkKJvZUccukkuSyU5KKiS1VXDKpSTJnJQkqKWrftaGKQyaSkjSYpAcujavijElNkmTMSrJZv9LmMYEq8T/LJAYlaa1b24cNq+KGSU2SMSvJcLN1me2fGI9BVY6RqjhhEh8rSJIxYX/IpCoOmFSSLM5FlSRncsVMSwJVLqJ/ikmkUklyJr1Dzo8aU8U2k5okY86ahCPJM5PeZrDGqDJfNKOKZSawJIcd1xdk/7CnilUmNUkSaUkKJr3ND4wqCazKsZ4qNplExXTzRkWSkkmv99GOKvaYaFWSnMnb/AueKgmkyomOKtaYRMcnLy9WlaTXextM79/lX3NVeQO8WEMVS0wqSRY4C1dQknf30yAcxZAqY9qqYoeJdiVJJYlHYZCewqIqNpjUJGFvgdc+CCRJT5AxwaiiWFUsMMFUklSSgkmqSmhHFeNMapKsqUoSTl/OkTOpq3LELmvBCUilqphmgqwkTSYoVXakVTHLZBLvFCdXriSFJA0mNVW2OaqsLQBnPLmRVMUok+imqCSf9CVpMrGhikEmRJK0maBUkaoq5phU0w1OEoaJSJVPoCqRWBVTTCZRKYn2dNPJRKBKglTFEBNYko/AmBlJeEwyVT7nP6+uiqiqGGFSqyQbipJ8ZiThM0GpIpiATDCBpxtVSTqY1FXZp1WFnklNEtVKwpWkk0mqymn+Qp4qfW1VyJkgJDnlStLNxJQqxEwqSW6pJIGYCFTRXNbSMqlJMqOSBGSCU6VjrULJpLYm4Uw3R9vA8ABJBEwEqiS3wLt2qELIpJRkl66SSDBJVRmBquwCb8xVhYxJJcmtsiQjSBIxk0yV/DK2rzYYVeCq8o1VhYpJ9A2SZB8Y1ZJAEgkm9apyjZ+AaJgIphv9SiLLRKBKH6wqbVVImFSSvOdMN/vAeCQkkWOSXskIVAWqKt+bVYWAyST6nn+fJ4mgkkj9JkaKiaiqyKuCZ2JaEmkm6cVMIFXey6qCZVKTpK8qyUT217qyTIhUQTKxIIkKk6Yq8/aAZnKqoJhYkUSNCcUEhGFiRxJFJoKqIlDlea2iz2QS25FEmUmqyhdAlZlQFW0mCEm+KEmizgSnSrSsyWQZrCRXlJLoMBGoIqgqsRaT2KIkWkxSVZa1J6CdFQ0mK+Xdzaz9dsEGLMmyzkfhdJgIVNmAVKkizyQPV5Jr4B20JNFlglqr6DJRl0S9kqCYNFRhLm4OVhUtJrs/LEmCYFJX5beWKkpMfvZZSUjXJDRMaqr85agy+0nHxKYkOCZIVRSYsGsSQ5WEgImoqoCqyDNZT1qWmJQEzaS+VuGp8gNQRZ+JiTUJJRNYlTGgii6TuVlJMiYROnH8UKrSb2W2+ucvnkn9tDNQkoc4xl9QsITPykp5F/OGTdf/Pgo1tnE+gEgvGwo+AfQWRqO8trcWz4SNZ8LGM2HjmbDxTNh4Jmw8EzbumCwKmECPUZlNsOgog33mFwCNjPcHroYWtO9QrAVGkt0/uopgYD4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pv+fOPvbe6bpfCuJs5EFA1e5hqEk185G5j+nxMZ/no2NZ8LGM2HjmbDxTNh4Jmw8EzaeCZtghSAn4Fvs8p/m02Wy2zjfS8pNtk4oLofiudHooWP4WbavZtWdxGy12iJMl8nfP6uz9h1K+XjtQ0Tx3Cj++eLTpY7RZ2m2AhkmeCZZQ4fuZ/UVW2zxny9Gvr5qWcCXpNkyhoYJ3NMB2awAzUQoSbvRAA0TuPcHWhVcX4uRiiRB1gOxOoybd8BGQpL9Pw0wUZWk1f4DOxf/BHoJ4VRB9MkJQUmORI0y0esTWJXQfp8cdUnaDVUJ1my3nKpCoIpu3y3lSsJ0KKNYx4I97LSrimZ/tlNopHINmmnW9mAnd01VtPr4KUtSXuCeVh+/vV53DKii0+8RlISzN8CsaPh+cqPZ7/EGuqMCe6fqqKLMZApPN1fAdiM70USzL2i16wEvsCoSDe1xTNQlKSvJ8w4a+v1jYVVmlKqoMRFIAu1Js4PuM2xNFbV+1G+BYYklQTERqgJVFf6+XQRMqq0DeZGQBMkEowq7CSAFEx1JyumGrL89rAq0V4SCKrJMKCTBMxGqAmw8I6+K7H4Z+pIcE++XcWxcFSkm6tNNwpOEhIlIFWiPIskJSGr/HSJJaJgIVUFPQBL7NN2DlYTdVL5TEiomAlXA3RPf3eP3aaKUhIyJSBXeLptHxQaKYlVE+74pTzelJHu83STp9n2LwZtlUBVRVRHsDwhKAm3l27GXMeX+gHBVgfb/FqgC7iMJVxJlSWiZCFRBVBVov1FqSYiZ6FQVKVW696UFJdnkTDdjkSTkTAyp0rl/sQFJ6JkIVeGsVcSqdOxzrSpJMi4+zgpIYoKJCVXg/dC54UlymUuyBUlihEmmyhYw2gX1CYjDRF2SRE4SQ0x0VDnMD3JVYZiM4kfgDfiS5B8WEEliigm1Km0mJiUxx4RWlSYTgSSHOEkMMhGqAq1VHluqNJhMfxmabiwwEalyCanyq6FKjYmOJJLTjQ0mdKpUTKa/vgJn5C1c54qSmGaCUeVrTZWCCaaSXEhKYpxJqsoFpMoiOwElHFVyJtN7VUnGg/ygvCQWmKBUKSagZyYoSWL5AVtgEoYxrMqYeQwxCVqqZEzUp5u5liR2mOAnoMCiJJaYoFUJzp/AShKwrx/qSmKNCaqqPJ0HFiWxx0SoSgKpAj2/A0pypi6JTSapKmfApa3zVLnLDwJMeJIclJKca4zTJpMwPIdVmXeq0smEJ8kcJ4llJtqqdDHhSpIf23rSk8Q2k1SVJ1gVdlk73OxiYqCSOGGipwqXyR003ehL4oCJSJXBmFXliMPEmCROmGiowjLhSYKdblwyEU1AHFXakgzNSeKKibIq8pJ8RVUSl0yyqgLdwQxaa5WGJEbWJK+BiZoqtSMHwJqEQpLQIRMlVarvGpxuyjhkIlKlZoRFSUK3TORVyf+bM90ElSTox92LuGUSjuRU6ZSkuHOmkyR0zkRSlS5Jit+wEEoSvgImUqo0iotZScLXwESoSioIR5LhVS7J0iPRdFPmNTBJJ6BH6Hnxu/8AtA/p5hwj35sAAAAASUVORK5CYII='
                },
                fr: {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png'
                },
                id: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAABlBMVEX/AAD///9BHTQRAAAAhElEQVR4nO3PMQEAAAjAIO1f2hRegwbMAAAAAAAAAAAAAAAAAAAAAAAAAAAAPNk2/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv+2A+BhVKwOtdkDAAAAAElFTkSuQmCC'
                },
                it: {
                    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png'
                },
                ja: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///+8AC23AAC7ACe7ACm4ABW5ABu4ABC6ACO5ABm7ACi4ABO6ACL46u3sx83NYXG3AAfnvcL14OTiqLH78fPKVGbEOE/9+PnGQFbjrbX35OjnuL/x09jsxszpv8XfoarSc4HXhZHAHj3CK0bbkJvQanm/DzbUeYbemqS/FjiKuKh1AAADpUlEQVR4nO3diXaiMBSA4QJCUFxwQ63WurTavv8LDtSZozZxipiQE/p/D+Dh3hOTS8jy9AQAAAAAAAAAAAAAAAAAAAqT3uplPRwO1y+r3sT2w1g3679usiBMRRIWEpGGQbZ57f/WzMz6272fRN1Oy7vU6nSjxN9v+zPbD1i74aAtutfZuMpMV7QHS9sPWafVMUnim/n4Jw6Tzcr2o9ZkPfe7PybkpOtna9uPW4PlTgQlM1IIxK7pf6H+TtzuRNRaYte3/dgG9ab+vRn5yoo/7dl+dFM+xM8dq1qcfth+eCN6WVIxI4Uka2BTWST3dK2yQCxsh6DbMX0oI4V0YzsIrWbz9sMp8bx21qB6v/dZtkj7v/izMZ3KKHqsKzkLopHtYPQYJVWKErWWaERSRqG+lORJCRuQlF6kMyV5UiLn+5SZ19GaEi//PddHn6xqOX9bnNkO6jHvkfaUeF70bjusRywer15V0rHtwKp79o2kxPP8Z9uhVbbXVat9F+xth1bVW2goJZ4XvtkOrhpj/5yC72bpNjf1zykEc9vhVbEUBlPiecLF6XxPb03/XetgO8D7jc11sCehe0VKbLaZ5A0lth3ivRamm0neUFybtN6ZbiZ5Q9nZDvI+fTMvOtdSt76ZDvRPEcjige0w7zGpo5nkDcWlNV5jHZ9zftZ2aTg2WtafuVTgT0y+/V3y3fnzLM0XJyehOy8973WMOoXYnZlZw69/Zy3PdqhlPdczEhdSVyZma+tOHOpQtnpWVpTR3doOtqRpPdVJIZ7aDrakQ11drEOzbXVVbAXfdrDl1DjsODPwrMxO2F8TbuzcWNc3FOeDsRv7Nhb1TBSctN2YlK1p8uRvTtyYQhmbWIdzS0ROyEmDckJ/ImHckVGfyKhjZbzvKPBeLGP+RMY8m4z5WBnz9jK+7yjwHVDG92IZ6wpkrD9RYJ2SjPVsMtY9KrA+VsY6agXW28vYl6HA/h0Z+7wUDM+2OTPDdsnwvtHUnVedC+wvlpndh+7MZNI1zitQ4FwLGeefKJg6J8e5CvbSxsh5ShvbYT2Gc7dks4PufrZzcP18Ns7xU+G8RwWt54ImjUgJ58cqcc6wAudRq+g4t/xoOwjdlnddHSILnDx87Afcg6DywH0Zopn3ZTxxr4oa9++ocE+TCvd5qayOYbl7345u7LrQ5Ot+wNtH33d+3f2AJ8U9kuLmPZIvzarjy7t13+hvzccZ99ICAAAAAAAAAAAAAAAAACD7A+PaSTdtOrdEAAAAAElFTkSuQmCC'
                },
            },
            starsContainer: [
                '<i class="icon fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
            ],
        }
    },
    methods: {
        // Metodo che stampa la relativa bandiera se presente, altrimenti stampa immagine default
        checkLanguage(type){
            if(this.languageFlags.hasOwnProperty(type.original_language)){
                return this.languageFlags[type.original_language].img;
            } else {
                return this.languageFlags.default.img;
            }
        }
    }
}
</script>

<template>
    <!-- Questa card viene utilizzata per i film -->
    <div v-if="this.infoMovie" class="video-card">
        <div class="cover">
            <img v-if="(infoMovie.poster_path != null)" :src="`https://image.tmdb.org/t/p/w185${infoMovie.poster_path}`" alt="">
            <div v-else><img class="default-cover" src="/src/assets/cover-default.png" alt="default-cover"></div>
        </div>
        <dir class="card-info">
            <div class="title"><b>Titolo:</b> {{infoMovie.title}}</div>
            <div v-if="!infoMovie.original_title === infoMovie.title" class="original-title">Titolo Originale: {{infoMovie.original_title}}</div>
            <div class="language">
                <b>Lingua:</b> {{infoMovie.original_language}} / <img :src="this.checkLanguage(this.infoMovie)" :alt="`${infoMovie.original_language}-flag`">
            </div>
            <div class="votes">
                <b>Voto:</b> <span class="starsicon" v-for="(star, index) in this.starsContainer" v-html="star" :class="{filled_star: (infoMovie.vote_average / 2).toFixed(0) > index}"></span>
            </div>
            <div class="description">
                <b>Descrizione:</b> {{infoMovie.overview}}
            </div>
        </dir>
    </div>
    <!-- /Questa card viene utilizzata per i film -->

    <!-- Questa card viene utilizzata per le serie TV -->
    <div v-else="this.infoSerie" class="video-card">
        <div class="cover">
            <img v-if="(infoSerie.poster_path != null)" :src="`https://image.tmdb.org/t/p/w185${infoSerie.poster_path}`" alt="">
            <div v-else><img class="default-cover" src="/src/assets/cover-default.png" alt="default-cover"></div>
        </div>
        <div class="card-info">
            <div class="title"><b>Titolo:</b> {{ infoSerie.name }}</div>
            <div v-if="(!infoSerie.original_name === infoSerie.name)" class="original-title">Titolo originale: {{ infoSerie.original_name }}</div>
            <div class="language">
                <b>Lingua:</b> {{infoSerie.original_language}} / <img :src="this.checkLanguage(this.infoSerie)" :alt="`${infoSerie.original_language}-flag`">
            </div>
            <div class="votes">
                <b>Voto:</b> <span class="starsicon" v-for="(star, index) in this.starsContainer" v-html="star" :class="{filled_star: (infoSerie.vote_average / 2).toFixed(0) > index}"></span>
            </div>
            <div class="description">
                <b>Descrizione:</b> {{infoSerie.overview}}
            </div>
        </div>
    <!-- /Questa card viene utilizzata per le serie TV -->
    </div>
</template>

<style lang="scss" scoped>
    .video-card{
        position: relative;
        margin-right: 15px;
        margin-bottom: .9375rem;
        &:hover .card-info{
            opacity: 1;
            cursor: pointer;
        }
        .cover{
            .default-cover{
                width: 185px;
                height: 278px;
            }
        }
        .card-info{
            padding: 1.25rem .625rem;
            background-color: rgba($color: #000000, $alpha: 0.8);
            border: 1px solid white;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            transition: opacity 0.5s;
            transition:  0.5s;
            overflow-y: auto;
            line-height: 1.25rem;
            transition: all 0.5s;
            .language img {
                width: 15px;
            }
            .starsicon{
                color: rgba($color: gray, $alpha: 0.5);
                filter: drop-shadow(0 0 black);
                margin-right: .125rem;
            }
            .filled_star{
                color: yellow !important;
            }
        }
    }
</style>
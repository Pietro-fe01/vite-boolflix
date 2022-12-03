<script>
import {store} from '/src/store.js';

export default {
    name: 'AppCard',
    props: {
        infoMovie: Object,
        infoSerie: Object,
        infoMostPopular: Object,
        infoTopRated: Object,
    },
    data(){
        return {
            store,
            languageFlags: {
                default: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=='
                },
                es: {
                    img: 'data:image/png;base64,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'
                },
                en: {
                    img: 'data:image/png;base64,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'
                },
                fr: {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png'
                },
                hi: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg=='
                },
                id: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAABlBMVEX/AAD///9BHTQRAAAAhElEQVR4nO3PMQEAAAjAIO1f2hRegwbMAAAAAAAAAAAAAAAAAAAAAAAAAAAAPNk2/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv82/zb/Nv+2A+BhVKwOtdkDAAAAAElFTkSuQmCC'
                },
                it: {
                    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png'
                },
                is: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAApVBMVEUjQJDWKij///8jQI4jP5L8///WKSrYHBrMWlomQ5H//v1peqz//vkVOokXOY1seK3ZhYTTKyvTb2zUb3IdPYckPpIVNY5HWJ2CkrDVKijVJBwpRpbULCfbKCMVO4ckPZYFLYlCVZOiq8Zpe6fIX1/QNjvVNjXfJCjPLSrOLyPeJC7VLCDgIiXdGw7eGRjSioTdQUrbb3DcanDNc2//+P+Di65FVYyORd5lAAADqklEQVR4nO3dbW/aZhhA4QcTm8ZQGA3NSLCbpUuXt75sa7f//9Nm5ywtGFUQ6XZLpHNF+QKSb3P0mETYyGl1HGS6zLJJhlf1/K4abKpPsvz/p7NfF0dRY2Os0nFqDAOcrncYzYtuh9Fmh4iRMdoAx3SIsKvD+UaH18OouSF+YIfRM+hwFOCpHSJmhljrEOHZroc2hB3aDsOhHezwyA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+yAn9rh6NA6HE2D/LbMyrLcp0OZXU5Po8aGeJnS+PfGOMDs7WTy+Ep3dMiXs1nIzBAPrz9lcSZfD4wdx8WXwKFBUtmahCj37ZA1A4NmBngoELcemveGx7eHXR3yPP/eVn4W1kPIpvJ8st/fi3LC74EIXg/rdh0Xh8cOsAPsADuglw7l51E9n3c61Cd9jIqSXvTg6t3g9mzQ7fDHi6urPqaFSOc9qK+Lm6rudLip+hgVpE5FD26r66Lqvj/cFdV9E+hApaLdx7NYxbxqNtk9MIr5vKqCJ0VoM8xTd28j3J1trYbBoKqK4mz74QPRS4dnyA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA9KoB/X7m2LQ/ajh9vr8w8c+poVIv/Tg07vbYqt49Wcfo6L0c/7ir1E175YYHfbn9n1sNP/74/1Nt8OHV3mexZxZ70HKe5Cd3Ndbn0SOPpcPVz4cpp7O692fbb1PNsdFebhn9jy/CTvADrAD6FCG+LbVHdeJtRcqxowMsN4hxpcs3++64gP8LyLNZuNZiPHbbPK48HddX/3PeBw0NUSzL+lN62WA0+W+HSbZv6fTkJkh2gCLtOLa+807tX79ecLDbYdsr+Oi6XCRFumJ23/q/nSf+P5mmkdWNIi4/fN02Rz3e15fffl6uIiYGYIWfg/F7yXBDrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA6wA+wAO8AOsAPsADvADrAD7AA7wA7w/rygwypqc7s6nG90uDicDo0fuR7WO1y+uVhEzQ3RrIfjINP1DnXToXN7po0Oi4tF1NwQq/8AHrmtTfHgw9MAAAAASUVORK5CYII='
                },
                ja: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///+8AC23AAC7ACe7ACm4ABW5ABu4ABC6ACO5ABm7ACi4ABO6ACL46u3sx83NYXG3AAfnvcL14OTiqLH78fPKVGbEOE/9+PnGQFbjrbX35OjnuL/x09jsxszpv8XfoarSc4HXhZHAHj3CK0bbkJvQanm/DzbUeYbemqS/FjiKuKh1AAADpUlEQVR4nO3diXaiMBSA4QJCUFxwQ63WurTavv8LDtSZozZxipiQE/p/D+Dh3hOTS8jy9AQAAAAAAAAAAAAAAAAAAAqT3uplPRwO1y+r3sT2w1g3679usiBMRRIWEpGGQbZ57f/WzMz6272fRN1Oy7vU6nSjxN9v+zPbD1i74aAtutfZuMpMV7QHS9sPWafVMUnim/n4Jw6Tzcr2o9ZkPfe7PybkpOtna9uPW4PlTgQlM1IIxK7pf6H+TtzuRNRaYte3/dgG9ab+vRn5yoo/7dl+dFM+xM8dq1qcfth+eCN6WVIxI4Uka2BTWST3dK2yQCxsh6DbMX0oI4V0YzsIrWbz9sMp8bx21qB6v/dZtkj7v/izMZ3KKHqsKzkLopHtYPQYJVWKErWWaERSRqG+lORJCRuQlF6kMyV5UiLn+5SZ19GaEi//PddHn6xqOX9bnNkO6jHvkfaUeF70bjusRywer15V0rHtwKp79o2kxPP8Z9uhVbbXVat9F+xth1bVW2goJZ4XvtkOrhpj/5yC72bpNjf1zykEc9vhVbEUBlPiecLF6XxPb03/XetgO8D7jc11sCehe0VKbLaZ5A0lth3ivRamm0neUFybtN6ZbiZ5Q9nZDvI+fTMvOtdSt76ZDvRPEcjige0w7zGpo5nkDcWlNV5jHZ9zftZ2aTg2WtafuVTgT0y+/V3y3fnzLM0XJyehOy8973WMOoXYnZlZw69/Zy3PdqhlPdczEhdSVyZma+tOHOpQtnpWVpTR3doOtqRpPdVJIZ7aDrakQ11drEOzbXVVbAXfdrDl1DjsODPwrMxO2F8TbuzcWNc3FOeDsRv7Nhb1TBSctN2YlK1p8uRvTtyYQhmbWIdzS0ROyEmDckJ/ImHckVGfyKhjZbzvKPBeLGP+RMY8m4z5WBnz9jK+7yjwHVDG92IZ6wpkrD9RYJ2SjPVsMtY9KrA+VsY6agXW28vYl6HA/h0Z+7wUDM+2OTPDdsnwvtHUnVedC+wvlpndh+7MZNI1zitQ4FwLGeefKJg6J8e5CvbSxsh5ShvbYT2Gc7dks4PufrZzcP18Ns7xU+G8RwWt54ImjUgJ58cqcc6wAudRq+g4t/xoOwjdlnddHSILnDx87Afcg6DywH0Zopn3ZTxxr4oa9++ocE+TCvd5qayOYbl7345u7LrQ5Ot+wNtH33d+3f2AJ8U9kuLmPZIvzarjy7t13+hvzccZ99ICAAAAAAAAAAAAAAAAACD7A+PaSTdtOrdEAAAAAElFTkSuQmCC'
                },
                ko: {
                    img: 'data:image/png;base64,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'
                },
                uk: {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEUAW7v/1QAAVb+ln3n/2QAG3wIgAAAAzUlEQVR4nO3QsQGAMAzAsBT4/2b2eO0onaAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACASx62ednmY5vD5qSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpH7zk2pa0LCuDAAAAABJRU5ErkJggg=='
                },
                zh: {
                    img: 'data:image/png;base64,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'
                }
            },
            starsContainer: [
                '<i class="icon fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-star"></i>',
            ],
            list: [],
        }
    },
    methods: {
        // Metodo che stampa la relativa bandiera se presente, altrimenti stampa immagine default
        checkLanguage(lang){
            if(this.languageFlags.hasOwnProperty(lang)){
                return this.languageFlags[lang].img;
            } else {
                return this.languageFlags.default.img;
            }
        },
        // Metodo per stampare i vari generi dei film
        searchGenres(idGen){
            let i = 0;
            this.store.allGenres.forEach(element => {
                if(element.id === idGen[i]){
                    if(!this.list.includes(element.name)){
                        this.list.push(element.name);
                    }
                    i++;
                }
            });
            return this.list;
        },
        prova(){
            console.log("ciao")
        }
    },
    computed: {
        // Generazione cover del film
        coverPoster(){
            let src = "";
            if(this.infoMovie && this.infoMovie.poster_path){
                src = `https://image.tmdb.org/t/p/w342${this.infoMovie.poster_path}`
            } else if (this.infoSerie && this.infoSerie.poster_path){
                src = `https://image.tmdb.org/t/p/w342${this.infoSerie.poster_path}`
            } else if (this.infoMostPopular && this.infoMostPopular.poster_path){
                src = `https://image.tmdb.org/t/p/w342${this.infoMostPopular.poster_path}`
            } else if (this.infoTopRated && this.infoTopRated.poster_path){
                src = `https://image.tmdb.org/t/p/w342${this.infoTopRated.poster_path}`
            } else {
                src = "/src/assets/cover-default.png";
            }
            return src;
        },
        titolo(){
            let titolo = "";
            if(this.infoMovie){
                titolo = this.infoMovie.title;
            } else if (this.infoSerie){
                titolo = this.infoSerie.name;
            } else if (this.infoMostPopular){
                titolo = this.infoMostPopular.title;
            } else if (this.infoTopRated){
                titolo = this.infoTopRated.title;
            }
            return titolo;
        },
        originalTitle(){
            let originalTitle = "";
            if(this.infoMovie){
                originalTitle = this.infoMovie.original_title;
            } else if (this.infoSerie){
                originalTitle = this.infoSerie.original_name;
            } else if (this.infoMostPopular){
                originalTitle = this.infoMostPopular.original_title;
            } else if (this.infoTopRated){
                originalTitle = this.infoTopRated.original_title;
            }
            return originalTitle;
        },
        language(){
            let lang = "";
            if(this.infoMovie){
                lang = this.infoMovie.original_language;
            } else if (this.infoSerie){
                lang = this.infoSerie.original_language;
            } else if (this.infoMostPopular){
                lang = this.infoMostPopular.original_language;
            } else if (this.infoTopRated){
                lang = this.infoTopRated.original_language;
            }
            return lang;
        },
        voto(){
            let vote = null;
            if(this.infoMovie){
                vote = (this.infoMovie.vote_average / 2).toFixed(0);
            } else if (this.infoSerie){
                vote = (this.infoSerie.vote_average / 2).toFixed(0);
            } else if (this.infoMostPopular){
                vote = (this.infoMostPopular.vote_average / 2).toFixed(0);
            } else if (this.infoTopRated){
                vote = (this.infoTopRated.vote_average / 2).toFixed(0);
            }
            return vote;
        },
        descrizione(){
            let description = "";
            if(this.infoMovie){
                description = this.infoMovie.overview
            } else if (this.infoSerie){
                description = this.infoSerie.overview
            } else if (this.infoMostPopular){
                description = this.infoMostPopular.overview
            } else if (this.infoTopRated){
                description = this.infoTopRated.overview
            }
            return description;
        },
        generi(){
            let genres = "";
            if(this.infoMovie){
                genres = this.infoMovie.genre_ids
            } else if (this.infoSerie){
                genres = this.infoSerie.genre_ids
            } else if (this.infoMostPopular){
                genres = this.infoMostPopular.genre_ids
            } else if (this.infoTopRated){
                genres = this.infoTopRated.genre_ids
            }
            return genres;
        }
    }
}
</script>
<!-- (this.searchGenres(generi).includes(this.store.genresFilter) || this.store.genresFilter !== 'Tutti i generi') -->
<template>
    <div class="video-card" v-if="(this.searchGenres(generi).includes(this.store.genresFilter) || this.store.genresFilter === 'Tutti i generi')">
        <div class="video-card-inner">
            <!-- Copertina film -->
            <div class="cover">
                <img v-if="coverPoster" class="cover__img" :src="coverPoster" alt="">
            </div>
            <!-- /Copertina film -->
    
            <!-- Qui andranno tutte le info relative al film -->
            <div class="card-info">
                <div class="title">
                    <strong>Titolo: </strong> 
                    <span>{{titolo}}</span>
                </div>
                <div v-if="(titolo !== originalTitle)" class="original-title">
                    <strong>Titolo Originale: </strong>
                    <span>{{originalTitle}}</span>
                </div>
                <div class="language">
                    <strong>Lingua: </strong> 
                    <span>{{language}} / </span> 
                    <img :src="this.checkLanguage(language)" :alt="`${language}-flag`">
                </div>
                <div class="votes">
                    <strong>Voto: </strong>
                    <span class="starsicon" v-for="(star, index) in this.starsContainer" v-html="star" :class="{filled_star: voto > index}"></span>
                </div>
                <div class="genres">
                    <strong>Genere: </strong> 
                    <span v-for="genre in this.searchGenres(generi)">{{genre}}, </span>
                </div>
                <div class="description">
                    <strong>Descrizione: </strong> 
                    <span>{{descrizione}}</span>
                    <span v-if="descrizione === ''"> Non presente, ci scusiamo per il disagio.</span>
                </div>
            </div>
            <!-- /Qui andranno tutte le info relative al film -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .video-card{
        position: relative;
        margin: 20px 0;
        margin-right: 20px;
        perspective: 1000px;

        &:last-child{
            margin-right: 0;
        }
        &:hover .video-card-inner {
            transform: rotateY(180deg);
        }
        .video-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }
        .cover{
            .cover__img, .default-cover{
                width: 220px;
                height: 320px;
            }
        }
        .cover, .card-info {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
        .card-info{
            padding: 1.25rem .625rem;
            background-color: black;
            border: 1px solid white;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transition: opacity 0.5s;
            transition:  0.5s;
            line-height: 1.25rem;
            transition: all 0.5s;
            transform: rotateY(180deg);
            overflow: hidden;
            
            & > div{
                margin-bottom: 5px;
            }

            strong{
                border-left: 2px solid red;
                padding-left: 5px;
            }
            .language img {
                width: 20px;
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
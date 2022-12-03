<script>
import {store} from '/src/store.js';

export default {
    name: 'AppHeader',
    data(){
        return {
            store
        }
    },
    methods: {
        setFocus(){
            return this.$refs.inputsearch.focus()
        },
        genreSelected(value){
            this.store.genresFilter = value.target.value;
            console.log(this.store.genresFilter)
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="left-menu">
                <a href="#">
                    <img class="logo" src="/src/assets/netflix-logo.png" alt="netflix-logo">
                </a>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serie TV</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">Nuovi e popolari</a></li>
                        <li><a href="#">La mia lista</a></li>
                        <li><a href="#">Sfoglia per lingua</a></li>
                    </ul>
                </nav>
            </div>
            
            <div class="right-menu">
                <form @submit.prevent>
                    <select name="" id="genre-select" @change="genreSelected">
                        <option value="Tutti i generi" selected>Tutti i generi</option>
                        <option value="Fantascienza">Fantascienza</option>
                    </select>
                    <div class="search-box">
                        <button class="btn-search" @click="setFocus()"><i class="fas fa-search"></i></button>
                        <input type="text" class="input-search" ref="inputsearch" placeholder="Titoli, persone, generi" pattern="^[^\s]+(\s+[^\s]+)*$" v-model="store.searchText" @keyup="$emit('performSearch')">
                    </div>
                </form>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="white"></path></svg>
                </button>
                <button class="my-profile">
                    <img class="my-profile__img" src="/src/assets/netflix-profile-acc.png" alt="netflix-profile-img">
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: black;
        height: 70px;
        position: sticky;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left-menu{
                display: flex;
                align-items: center;
                .logo{
                    width: 7.5rem;
                    display: block;
                }
                nav ul{
                    display: flex;
                    list-style: none;
                    & li{
                        margin-left: 1.25rem;
                        a{
                            color: rgba(255,255,255, 0.8);
                            text-decoration: none;
                            font-weight: 31.25rem;
                        }
                        &:hover a{
                            filter: drop-shadow(0 0 5px white);
                            color: white;
                        }
                    }
                }
            }
            .right-menu{
                display: flex;
                align-items: center;
                & > *{
                    margin-left: 1.25rem;
                }
                form{
                    display: flex;
                    align-items: center;
                    & select{
                        margin-right: 10px;
                    }
                    & button{
                        background-color: lightgray;
                        border-color: white;
                    }
                }
                .my-profile{
                    display: flex;
                    align-items: center;

                    &:hover i.fa-chevron-up{
                        transform: rotate(180deg);
                        transition: transform 0.5s;
                    }
                    .my-profile__img{
                        border-radius: .625rem;
                        display: block;
                    }
                    i.fa-chevron-up{
                        color: white;
                        font-size: 8px;
                        margin-left: .625rem;
                    }
                }
            }
        }
    }

    /*-------------------------
    CUSTOMIZED SEARCHBAR 
    --------------------------*/
    .search-box{
        width: fit-content;
        height: fit-content;
        position: relative;
    }
    .input-search{
        height: 40px;
        width: 40px;
        border-style: none;
        font-size: 13px;
        letter-spacing: 2px;
        outline: none;
        border-radius: 25px;
        transition: all .5s ease-in-out;
        background-color: white;
        padding-right: 40px;
        color:#fff;
    }
    .input-search::placeholder{
        color:rgba(255,255,255,.5);
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 100;
    }
    .btn-search{
        width: 40px;
        height: 40px;
        border-style: none;
        font-size: 15px;
        font-weight: bold;
        outline: none;
        cursor: pointer;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        color:black ;
        background-color:transparent;
        pointer-events: painted;  
    }
    .btn-search:focus ~ .input-search{
        width: 250px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom:1px solid rgba(255,255,255,1);
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
    .input-search:focus{
        width: 250px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom:1px solid rgba(255,255,255,1);
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
</style>
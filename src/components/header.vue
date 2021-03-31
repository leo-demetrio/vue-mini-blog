<template>
    <header>
        <nav  class="container">
            <router-link to="/"><img alt="WDEV" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" /></router-link>      
            <img alt="WDEV" v-on:click="openMenu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" />
        </nav>

        <div class="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>
        <div id="menu-items" v-on:click="closeMenu" :class="{active:menuActive}">
            <img alt="WDEV" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" />
            
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li> 
                <li>
                    <router-link to="/videos">Vídeos</router-link>
                </li>
                <li>
                    <router-link to="/sobre">Sobre</router-link>
                </li>
                <li>
                    <router-link to="/contato">Contato</router-link>
                </li>
            </ul>
        </div>

    </header>
</template>

<script>
import '../styles/global.css';


export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }   
    },
    methods: {
        openMenu: function(){
            this.menuActive = true;
        },
         closeMenu: function(){
            this.menuActive = false;
        }

    }
}
</script>

<style scoped>
    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav {
        display: flex;
        justify-content: space-between;
    }
    #logo {
        width: 130px;
        margin-top: 10px;
    }    
    #menu-button {
        width: 30px;      
    }
    .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100%;
        background-color: #000;
        opacity: 0.8;
    }
    #menu-logo {
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100%;
        background-color: var(--color-background-nav);
        display: none;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    #menu-items.active {
        display: flex;
    }
    ul {
        list-style: none;
        text-align: center;
    }
    ul li {
        margin: 20px 0px;
    }
    ul li a {
        color: var(--color-text-light);
    }
    @media (min-width: 700px) {
        .container {
            width: 60%;
        }
        #menu-button,
        #menu-logo,
        #menu-overlay {
            display: none;
        }
        #menu-items {
            display: flex;
            position:static;
            height: 60px;
            width: auto;
        }
        ul {
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
        }
        ul li {
            margin: 0;
            margin-left: 20px;
        }
    }

</style>
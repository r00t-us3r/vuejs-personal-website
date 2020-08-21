<template>
  <div id="app">
    <header>
        <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

        <nav class="menu">
            <div class="menu-branding">
                <div class="portrait"></div>
            </div>
            <ul class="menu-nav" id="nav">
                <li class="nav-item current" id="home" @click="toggleActive('home')">
                    <router-link to="/">home</router-link>
                </li>
                <li class="nav-item" id="about" @click="toggleActive('about')">
                    <router-link to="/about">about</router-link>
                </li>
                <li class="nav-item" id="work" @click="toggleActive('work')">
                    <router-link to="/work">work</router-link>
                </li>
                <li class="nav-item" id="contact" @click="toggleActive('contact')">
                    <router-link to="/contact">how to reach me</router-link>
                </li>
            </ul>
        </nav>
    </header>

    <router-view/>
  </div>
</template>

<style>
@import 'https://use.fontawesome.com/releases/v5.2.0/css/all.css';
@import 'assets/css/main.css';
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<script>
    export default {
        methods: {
            toggleActive(id) {
                document.getElementsByClassName('current')[0].classList.remove('current');
                document.getElementById(id).classList.add('current');
            }
        }
    }
</script>

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
                    <router-link to="/" class="nav-link">home</router-link>
                </li>
                <li class="nav-item" id="about" @click="toggleActive('about')">
                    <router-link to="/about" class="nav-link">about</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="toggleShow(!show)">Privacy Policies</a>
                  <transition
                      @beforeEnter="beforeEnter"
                      @afterEnter="afterEnter"
                      @beforeLeave="beforeLeave"
                      @afterLeave="afterLeave"
                  >
                    <ul v-show="show">
                      <li class="nav-item" id="privacy-policies-cocktail-book" @click="toggleActive('privacy-policies-cocktail-book')">
                        <router-link to="/privacy-policies/cocktail-book" class="nav-link">Cocktail Book</router-link>
                      </li>
                    </ul>
                  </transition>
                </li>
                <li class="nav-item" id="work" @click="toggleActive('work')">
                    <router-link to="/work" class="nav-link">work</router-link>
                </li>
                <li class="nav-item" id="contact" @click="toggleActive('contact')">
                    <router-link to="/contact" class="nav-link">how to reach me</router-link>
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


.collapse {
  display: none;
  &.in {
    display: block;
  }
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height .377s ease;
  ul {
    margin: 0;
  }
}
</style>

<script>
    export default {
        data() {
          return {
            show: false
          }
        },
        methods: {
            toggleActive(id) {
                document.getElementsByClassName('current')[0].classList.remove('current');
                document.getElementById(id).classList.add('current');
            },
            toggleShow(show) {
              this.show = show;
            },
            beforeEnter(el) {
                el.classList.remove("collapse");
                el.style.display = "block";
                el.classList.add("collapsing");
                el.style.height = `${el.scrollHeight}px`;
            },
            afterEnter(el) {
                el.classList.remove("collapsing");
                el.classList.add("collapse", "in");
            },
            beforeLeave(el) {
                el.classList.add("collapsing");
                el.classList.remove("collapse", "in");
                el.style.height = 0;
            },
            afterLeave(el) {
                el.classList.remove("collapsing");
                el.classList.add("collapse");
                el.style.display = "none";
            }
        }
    }
</script>

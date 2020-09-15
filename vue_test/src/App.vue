<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/about">Go to Foo</router-link>
      <br>
      <router-link to="/">Go to root</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './views/Home'
import About from './views/About'
export default {
  name: 'app',
  component:{Home,About},
  methods:{
    click(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

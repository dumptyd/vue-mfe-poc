<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/micro-frontend">Micro Frontend</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  padding: 0 5rem;
}
hr {
  margin: 2rem 5rem;
}
a {
  color: teal;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
  text-decoration: none;
}
</style>

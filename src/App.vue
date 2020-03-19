<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/tracker">Tracker</router-link> | 
      <router-link to="/scheduler">Scheduler</router-link> | 
      <router-link to="/tasks">Tasks</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(0, 166, 121);
  /* color: rgb(15, 184, 73); */
  /* color: #42b983; */
}

body {
  margin: 0 0 75px 0;
}
</style>

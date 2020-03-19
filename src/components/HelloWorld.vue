<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Each page represents it's own utility app that parents can use to make their day smoother!
      <router-link to="/about">suite documentation</router-link>.
    </p>
    <h3>Tracking your baby's daily activities</h3>
    <ul>
      <li>
        <router-link to="/tracker">tracker</router-link>
      </li>
    </ul>
    <h3>Scheduling your daily events</h3>
    <ul>
      <li>
        <router-link to="/scheduler">scheduler</router-link>
      </li>
    </ul>
    <h3>Maintaining your daily tasks</h3>
    <ul>
      <li>
        <router-link to="/tracker">tasks</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 1em 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(0, 166, 121);
  /* color: rgb(15, 184, 73); */
  /* color: #42b983; */
}
</style>

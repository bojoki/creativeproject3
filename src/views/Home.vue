<template>
  <div class="home">
    <img id="logo" alt="Parenthood logo" src="../assets/flogo.svg" />
    <HelloWorld msg="Welcome to the Parenthood Utility App Suite" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Footer
  }
};
</script>

<style scoped>
  #logo {
    width: 300px;
  }
</style>
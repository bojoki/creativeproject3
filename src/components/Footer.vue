<template>
    <div class="footer">
        <a href="https://github.com/bojoki/creativeproject3.git" target="_blank">Github Account</a>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgb(0,124,188);
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: auto;
  }
.footer a {
    padding-top: 12px;
    display: inline-block;
    color: black;
    text-decoration: none;
    vertical-align: middle;
}
.footer a:hover {
    margin-top: -3px;
    font-size: x-large;
    text-shadow: 4px 4px 5px rgb(51, 201, 71);
    border-width: 2px;
    border: black;
}
</style>
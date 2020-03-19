<template>
    <div class="schedule">
        <h1>Scheduler</h1>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;title=Daily%20Planning&amp;showCalendars=1&amp;src=MXJ2bXVmaTZqaXIxaHFpY3NqbzRhMG82bjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import moment from "moment";
export default {
    name: "Schedule",
    data() {
        return {
        }
    },
    components: {
        Footer
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped>

#link-holder:hover{
    height: 50px;
    position: relative;
    display: inline-block;
    border-style: solid;
    border-width: 5px 5px 0px 5px;
    border-color: grey;
}
.allResults {
    
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    height: 1500px;
    margin-bottom: 50px;
}
.results {    
    display: flex;    
    overflow-x: auto;
    justify-content: space-between;
    /* align-content: center; */
	background: white;
    box-shadow: inset 0 4px 6px #000;
    
    /* z-index: 2; */
    /* position: relative; */
    
}
.flexbox-item {
    padding: 20px 10px 20px 10px;
    /* margin: 0px 10px 0px 10px; */
    border-style: solid;
    border-width: 0px 2px;
    border-color: black;
}
.flexbox-item h2 {
    margin: 0px;
    text-align: center;
    width:150px;
}
.flexbox-item p {
    margin: 0px auto 0px auto;
}
.flexbox-item img {
    display: block;
    margin: 0 auto;
    border: black;
    border-width: 2px;
}
#weatherResults { 
    text-align: center;
}
.last-flexbox-item {
    align-self: flex-start
}
.first-flexbox-item {
    align-self: flex-start
}
#weatherResults h2 {
    margin: 0px;
    margin-top: 10px;
}
#weatherResults p {
    margin:0px;
}
#weatherResults img {
    
}
input {
    text-align: center;
    width:90px;
}
h2 {
}
p {
}
img {
    
}
form {
    display: block;
    text-align: center;
    /* margin-top: 20px; */
}
body {
    background-size:cover
}
h1 {
    text-align: center;
    margin-bottom: 10px;
}

</style>
<template>
    
    <div class="tracker">
        <h1>Tracker</h1>
        <h1>An easy way to keep track of important events in the life of baby</h1>
        <label for="fname">Child's name:</label>
        <input type="text" v-model="child" id="fname">
        <button @click="addTime('ate')">Eat</button>
        <button @click="addTime('slept')">Sleep</button>
        <button @click="addTime('woke up')">Wake</button>
        <ul>
            <li v-for="time in times" :key="time">
                <label @click="editTime(time)">{{ child }} {{ printTime(time) }}</label>
            </li>
        </ul>
        <button @click="clearEntries()">Clear Entries</button>
        <button @click="clearName()">Clear Name</button>
        <button @click="clearAll()">Clear All</button>
        <button @click="clearHistory()">Clear History</button>
        <button @click="viewHistory()">Toggle History</button>
        <ul id="history">
            <li v-for="day in printHistory" :key="day.index">
                <label> {{day}} </label>
            </li>
        </ul>
        <Footer />
    </div>
</template>

<script>
import moment from 'moment';
import Footer from "@/components/Footer.vue";
export default {
    name: "Tracker",
    components: {
        Footer
    },
    data() {
        return {
            child: '',
            times: [],
            prevDay: '',
            currDay: '',
            history: '',
            index: 1,
        }
    },
    mounted() {
        // we can possibly eliminate currDay and just use new Date()
        localStorage.currDay = moment(new Date()).format('MMM D');
        if (localStorage.times) {
            this.times = JSON.parse(localStorage.times);
        }
        if (localStorage.child) {
            this.child = localStorage.child;
        }
        if (localStorage.index) {
            this.index = parseInt(localStorage.index);
        }
        if (localStorage.currDay && localStorage.prevDay) {
            if (localStorage.currDay != localStorage.prevDay) {
                if (localStorage.history) {
                    let myTimes = JSON.parse(localStorage.history);
                    myTimes.push({day: this.index, events:this.times})
                    localStorage.history = JSON.stringify(myTimes);
                } else {
                    localStorage.history = JSON.stringify([{day:this.index, events:this.times}]);
                }
                this.times = [];
                this.index += 1;
            }
        } 
        if (localStorage.history) {
            this.history = JSON.parse(localStorage.history);
        }
        localStorage.prevDay = localStorage.currDay;
        localStorage.index = this.index;
    },
    watch: {
        times(newNames) {
            localStorage.times = JSON.stringify(newNames);
        },
        child(newName) {
            localStorage.child = newName;
        }
    },
    methods: {
        addTime(action) {
            let now = new Date();
            this.times.push({type:action,time:now});
            // console.log(this.times);
            // this.$cookies.set("newKey1", this.times[0]);
        },
        clearAll() {
            this.times = [];
            this.child ='';
        },
        clearEntries() {
            this.times = [];
        },
        clearName() {
            this.child ='';
        }, 
        clearHistory() {
            localStorage.history = JSON.stringify([]);
            this.index = 1;
            localStorage.index = this.index;
            this.history = [];
        },
        viewHistory() {
            let style = document.getElementById("history").style.display;
            if (style != "none") {
                document.getElementById("history").style.display = "none";
            } else {
                document.getElementById("history").style.display = "";
            }
            
        },
        // editTime(time) {
        //     let newTime = prompt("What would you like the new time to be?");
        //     var result = this.times.find(elem => {
        //         return (elem.type === time.type && elem.time === time.time);
        //       });
        //     console.log(result);
        //     newTime = new Date(result.getTime())
        //     result
        //     console.log(this.times);
        //     console.log(time);
        // },
        printTime(time) {
            if (time.type === 'woke up') {
                return time.type + ' at ' + moment(time.time).format("h:mm a") + 
                    " (nap again at " + moment(new Date(time.time)).add(75, "minutes").format('hh:mm a') + ")";
            }
            return time.type + ' at ' + moment(time.time).format("h:mm a");
        },
    },

    computed: {
        printTimes() {
            return Array.from(this.times, time => {
                this.printTime(time);
            });
        },
        printHistory() {
            return Array.from(this.history, day => {
                return "Day " + day.day + " :" + Array.from(day.events, event => {
                    return " " + event.type + " at " + moment(event.time).format('h:mm a');
                });
            });
        },
    }
}
</script>

<style scoped>
/* body {
    font-family: 'Arvo';
    font-size: 16px;
    padding: 20px 20px;
    background: #f3f3f3;
} */

.tracker {
    font-size: 1em;
    display: flex;
    flex-direction: column;
    margin: 0 50px 100px;
    font-family: 'Arvo';
    font-size: 16px;
    padding: 20px 20px;
    background: #fff;
}

/* List */

ul {
    list-style: none;
    padding-inline-start: 20px;
    padding-inline-end: 40px;
    max-width: 100%;
    margin: auto;
}

li:first-child {
    margin-top: 10px;
}
li {
    background: #f3f3f3;
    width: 100%;
    min-height: 30px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    display: inline-block;
    text-align: center;
}


.delete {
    display: none;
    margin-left: auto;
}

li:hover .delete {
    display: block;
}

ul li label {
    width: 400px;
    font-size: 20px;
}

.completed {
    text-decoration: line-through;
}

input[type=checkbox] {
    transform: scale(1.5);
    margin-right: 10px;
}

input[type=text] {
    font-size: 1em;
}

button {
    font-family: 'Arvo';
    font-size: 1em; 
}

/* #history {
    /* display: none; 
} */

/* Controls */

.controls {
    margin-top: 20px;
}
</style>
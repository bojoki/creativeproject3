<template>
    <div class="tasks">
        <h1>Tasks</h1>
        <p>Not one of my 3 pages...</p>
        <p v-show="activeTodos.length === 0">You are done with all your tasks! Good job!</p>
        <form @submit.prevent="addItem">
            <input type="text" v-model="message">
            <button type="submit">Add</button>
        </form>
        <ul>
            <li v-for="item in filteredTodos" draggable="true" v-on:dragstart="dragItem(item)" v-on:dragover.prevent v-on:drop="dropItem(item)" :key="item.id">
                <input type="checkbox" v-model="item.completed">
                <label v-bind:class="{ completed: item.completed }">{{ item.text }}</label>
                <button v-on:click="deleteItem(item)" class="delete">X</button>
            </li>
        </ul>
        <div class="controls">
            <button v-on:click="showAll()">Show All</button>
            <button v-on:click="showActive()">Show Active</button>
            <button v-on:click="showCompleted()">Show Complete</button>
            <button v-on:click="deleteCompleted">Delete Complete</button>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
    name: "Tasks",
    components: {
        Footer
    },
    data() {
        return {
            todos: [{
                text: 'make an app',
                completed: false,
            }, {
                text: "declare victory",
                completed: false,
            }, {
                text: "profit",
                completed: false
            }],
            message: '',
            show: 'all',
            drag: {}
        }
    },
    methods: {
        addItem() {
            this.todos.push({text:this.message, completed:false});
            this.message ='';
        },
        deleteItem(item) {
            var index = this.todos.indexOf(item);
            if (index > -1) {
                this.todos.splice(index,1);
            }
        }, 
        showAll() {
            this.show ='all';
        },
        showActive() {
            this.show ='active';
        },
        showCompleted() {
            this.show = 'completed';
        }, 
        deleteCompleted() {
            this.todos = this.todos.filter(item => {
                return !item.completed;
            });
        },
        dragItem(item) {
            this.drag = item;
        },
        dropItem(item) {
            const indexItem = this.todos.indexOf(this.drag);
            const indexTarget = this.todos.indexOf(item);
            this.todos.splice(indexItem,1);
            this.todos.splice(indexTarget,0,this.drag);
        },
    },
    computed: {
        activeTodos() {
            return this.todos.filter(item => {
                return !item.completed;
            });
        },
        filteredTodos() {
            if (this.show === 'active') {
                return this.todos.filter(item => {
                    return !item.completed;
                });
            }
            if (this.show === 'completed') {
                return this.todos.filter(item => {
                    return item.completed;
                });
            }
            return this.todos;
        },
    }
}
</script>

<style scoped>
.tasks {
    font-family: 'Arvo';
    font-size: 16px;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
}

/* List */

ul {
    list-style: none;
    max-width: 100%;
    margin: auto;
    padding-left: 0;
}
/*  ADD SHRINKING */
li:first-child {
    margin-top: 10px;
}
li {
    background: #f3f3f3;
    /* width: 100%; */
    /* min-height: 30px; */
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    display: flex;
    align-items: center;
}

.delete {
    display: none;
    margin-left: auto;
}

li:hover .delete {
    display: block;
}

label {
    width: 400px;
}

.completed {
    text-decoration: line-through;
}
</style>
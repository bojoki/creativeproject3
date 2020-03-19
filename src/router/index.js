import Vue from "vue";
import VueRouter from "vue-router";

// VIEWS
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Schedule from "../views/Schedule.vue";
import Tasks from "../views/Tasks.vue";
// import Tracker from "../views/Tracker.vue";
import Tracker from "../views/Tracker.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/scheduler",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/tracker",
    name: "Tracker",
    component: Tracker
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

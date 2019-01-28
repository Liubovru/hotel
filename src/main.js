// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import MyHeader from "./views/MyHeader";
import Home from "./views/Home";
import Services from "./views/Services";
import Gallery from "./views/Gallery";
import Restaurant from "./views/Restaurant";
import Testimonials from "./views/Testimonials";
import Booking from "./views/Booking";
import Form from "./views/Form";
import Form2 from "./views/Form2";
import Home2 from "./views/Home2";
//
//import GoogleMap from "./components/GoogleMap";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyACaurnZeYNbhLYYZ2EZLDeILpkKOxbxBw",
    libraries: "places" //necessary for places input
  }
});

//import MyFooter from "./components/MyFooter";

Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: "red", //"#795548",
    secondary: "#2b1e15",
    accent: "#f44336",
    error: "#e91e63",
    warning: "#4caf50",
    info: "#fff",
    success: "#8bc34a"
  }
});
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  //{ path: "/", component: MyHeader },
  { path: "/Services", component: Services },
  { path: "/Gallery", component: Gallery },
  { path: "/Restaurant", component: Restaurant },
  { path: "/Testimonials", component: Testimonials },
  { path: "/Booking", component: Booking },
  { path: "/Form", component: Form },
  { path: "/Form2", component: Form2 },
  { path: "/Home2", component: Home2 }
]; 

const router = new VueRouter({
  routes,
  mode: "history"
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  render: h => h(App),
  router
});

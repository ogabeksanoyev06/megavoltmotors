import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also import AOS styles here

Vue.use({
  install(V) {
    V.prototype.$aos = new AOS.init({}); // Here you can pass AOS configurations
  },
});

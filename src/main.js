import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/header_footer/Header.vue";

const app = createApp(App);

app.directive("awesome", {
  created(el) {
    console.log("created");
    console.log(el.parentNode);
  },
  beforeMount(el, binding, vnode) {
    console.log("beforeMount");
    console.log(el.parentNode);
    // el.innerHTML = "Hello World";
    el.innerHTML = binding.value;

    if (binding.arg === "red") {
      el.style.color = "red";
    } else if (binding.arg === "blue") {
      el.style.color = "blue";
    } else {
      el.style.color = "yellow";
    }
  },
  mounted(el) {
    console.log(el.parentNode);
  },

  beforeUpdate(el) {
    console.log(el.parentNode);
  },
});
app.component("app-header", Header);
app.mount("#app");

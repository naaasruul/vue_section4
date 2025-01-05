import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/header_footer/Header.vue";

const app = createApp(App);

app.directive("awesome", {
  beforeMount(el, binding, vnode) {
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
});
app.component("app-header", Header);
app.mount("#app");

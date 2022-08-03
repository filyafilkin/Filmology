import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faInstagram, faFacebook, faTwitter);
library.add(faXmark);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// TypingText
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

// Router
import VueRouter from "vue-router";
import routes from "./router/routes";
Vue.use(VueRouter);

// Axios
Vue.use(VueAxios, axios);
import axios from "axios";
import VueAxios from "vue-axios";

new Vue({
  vuetify,
  router: new VueRouter(routes),
  render: (h) => h(App),
}).$mount("#app");

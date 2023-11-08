import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import myLib from 'my-lib'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
});

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(myLib)

app.mount('#app')
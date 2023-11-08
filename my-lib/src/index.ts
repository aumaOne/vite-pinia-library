import type {App} from 'vue'
import CounterButton from './components/CounterButton.vue';
import {useCounterStore} from './stores/counter'

function install(app: App) {
    app.component('CounterButton', CounterButton)
}

export default install
export {CounterButton, useCounterStore}

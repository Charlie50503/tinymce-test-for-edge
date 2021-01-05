import Vue from 'vue';
import Vuex from 'vuex';
import KeepAlive from './system/KeepAlive.js';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        KeepAlive: KeepAlive,
    },
});

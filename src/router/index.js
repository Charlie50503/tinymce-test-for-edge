import Vue from 'vue';
import VueRouter from 'vue-router';
import test from '../views/test.vue';
import test2 from '../views/test2.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/test',
        name: 'test',
        component: test,
    },
    {
        path: '/test2',
        name: 'test2',
        component: test2,
    },
];

const router = new VueRouter({
    routes,
});

export default router;

<!--
 * @Author: your name
 * @Date: 2021-01-05 16:23:31
 * @LastEditTime: 2021-01-05 16:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tinymce-test-for-edge\src\views\test.vue
-->
<template>
    <div class="">
        <router-link to="/test2">go test2</router-link>
        <tinymce-editor
            v-model="value"
            :target_name="'inquiry'"
        ></tinymce-editor>
    </div>
</template>
<script>
import store from '@/store';
const axios = require('axios');
import TinymceEditor from '@/components/tinymce-editor/tinymce-editor.vue';
export default {
    name: 'tese',
    data: () => {
        return {
            value: '',
        };
    },
    components: {
        'tinymce-editor': TinymceEditor,
    },
    computed: {
        research_layout_info() {
            return this.$store.getters[
                'ResearchLayoutInfo/getResearchLayoutInfo'
            ];
        },
    },
    mounted() {
        axios
            .get('https://run.mocky.io/v3/64d42a11-f24c-4dfd-b588-a4917fcf70b5')
            .then((rep) => {
                console.log('req', rep);
                this.value = rep.data.textContent;
            })
            .catch((error) => {
                console.log('error', error);
            });
    },
    beforeRouteEnter(to, from, next) {
        store.commit('KeepAlive/keepAlive', 'test');
        next();
    },
    beforeRouteLeave(to, from, next) {
        this.$store.commit('KeepAlive/noKeepAlive', 'test');
        next();
    },
};
</script>

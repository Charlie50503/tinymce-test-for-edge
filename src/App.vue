<template>
    <div>
        <keep-alive :include="keep_alive_components_name">
            <router-view> </router-view>
        </keep-alive>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            keep_alive_components_name: 'KeepAlive/getkeepAliveComponentsName',
        }),
    },
};
</script>

const state = {
    keep_alive_components_name: [],
};
const getters = {
    getkeepAliveComponentsName(state) {
        return state.keep_alive_components_name;
    },
};
const mutations = {
    keepAlive(state, component_name) {
        !state.keep_alive_components_name.includes(component_name) &&
            state.keep_alive_components_name.push(component_name);
    },
    noKeepAlive(state, component_name) {
        const index = state.keep_alive_components_name.indexOf(component_name);
        index !== -1 && state.keep_alive_components_name.splice(index, 1);
    },
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
};

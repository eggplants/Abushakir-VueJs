import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#412234',
                secondary: '#8a7090',
                bgd: "#f9f9f9",
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});

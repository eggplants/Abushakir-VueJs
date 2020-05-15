import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        // dark: true,
        themes: {
            light: {
                primary: '#600c05',
                secondary: '#8a7090',
                bgd: "#f8f8f8",
                button: "#3C3F42",
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});

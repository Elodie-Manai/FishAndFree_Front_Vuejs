import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify, {
  VAlert,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VDataTable,
  VProgressLinear,
  VCard,
  VDivider,
  VSpacer,
  VToolbarTitle,
  VDialog,
  VCardTitle,
  VCardText,
  VContainer,
  VForm,
  VRow,
  VCol,
  VTextField,
  VCardActions
} from 'vuetify/lib';

// vue-cli a-la-carte installation
Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VDataTable,
    VProgressLinear,
    VCard,
    VDivider,
    VSpacer,
    VToolbarTitle,
    VDialog,
    VCardTitle,
    VCardText,
    VContainer,
    VForm,
    VRow,
    VCol,
    VTextField,
    VCardActions
  }
});

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50'
      }
      // dark: {
      // }
    }
  }
};

export default new Vuetify(opts);

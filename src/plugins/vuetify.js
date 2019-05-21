import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.brown.darken4,
    secondary: colors.brown.darken2
  }
})

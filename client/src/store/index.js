import Vue from "vue";
import Vuex from 'vuex'
import AuthorsStore from "./modules/AuthorsStore";
import BooksStore from "./modules/BooksStore";
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    AuthorsStore,
    BooksStore
  }
})

export default store;

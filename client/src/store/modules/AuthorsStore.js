import axios from "axios";
export default {
  namespaced:true,
  state:{
    authors:[],
    author:[]
  },
  mutations:{
    storeAuthors: (state, data) => {
      state.authors = data;
    },
    storeAuthor: (state, data) => {
      state.author = data;
    }
  },
  getters:{
    authors: state => state.authors,
    author: state => state.author
  },
  actions:{
    getAuthors(context) {
      axios.get('authors').then( response => {
        context.commit('storeAuthors', response.data)
      })
    },
    getAuthor(context, id) {
      axios.get(`authors/${id}`).then( response => {
        context.commit('storeAuthor', response.data)
      })
    }
  }

}

import axios from 'axios';
export default {
  namespaced:true,
  state:{
    books:[]
  },
  mutations:{
    storeBooks: (state, data) => {
      state.books = data;
    }
  },
  getters:{
    books: state => state.books
  },
  actions:{
    allBooks(context) {
      axios.get('/books').then( response => {
        console.log(response.data.data)
        context.commit('storeBooks', response.data.data)
      })
    }
  }
}

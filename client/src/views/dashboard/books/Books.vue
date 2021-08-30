<template>
  <div>
    <nav-bar />
    <md-button class="md-raised md-primary">
      <router-link style="color:white;text-decoration:none" :to="{name:'NewBook'}">
        New book
      </router-link>
    </md-button>

    <md-table v-model="books" md-card>
      <md-table-toolbar>
        <h1 class="md-title">All book</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{item}">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Book name" >{{ item.book_name }}</md-table-cell>
        <md-table-cell md-label="Pages count" >{{ item.count_pages }}</md-table-cell>
        <md-table-cell md-label="Published" >{{ item.created_at }}</md-table-cell>
        <md-table-cell md-label="Authors" >
          <ul>
            <li v-for="author in item.authors">
              {{ author.author_name}}
            </li>
          </ul>
        </md-table-cell>
        <md-table-cell md-label="Actions">
          <md-button class="md-raised md-accent" @click="deleteBook(item.id)">
            Delete
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>


  </div>
</template>

<script>
export default {
  name:'Books',
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('BooksStore/allBooks');
  },
  computed:{
    books() {
      return this.$store.getters['BooksStore/books'];

    }

  },
  methods:{
    deleteBook(id) {
      this.axios.delete(`books/${id}`).then( response => {
        console.log(response.data.data);
        location.reload();
      });
    }
  }
}
</script>

<style scoped>

</style>

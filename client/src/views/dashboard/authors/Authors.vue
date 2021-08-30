<template>
<div>
  <div class="container">
    <nav-bar />

    <md-button @click="" class="md-raised md-primary">
      <router-link style="color:white;font:14px Tahoma" :to="{name:'NewAuthor'}">
        New author
      </router-link>
    </md-button>
    <md-table v-model="authors" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Authors</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{item}">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" >{{ item.author_name }}</md-table-cell>
        <md-table-cell md-label="Action" >
          <md-button class="md-raised md-accent" @click="deleteAuthor(item.id)">
              Delete
          </md-button>
          <md-button class="md-raised md-primary" >
            <router-link style="color:white;text-decoration: none;font-size: 14px" :to="{name:'AuthorEdit', params:{item:item}}">
              Edit
            </router-link>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</div>

</template>

<script>
export default {
  name:'Authors',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('AuthorsStore/getAuthors');
  },
  computed:{
    authors() {
      return this.$store.getters['AuthorsStore/authors'];
    }
  },
  methods:{
    deleteAuthor(id) {
      this.axios.delete(`authors/${id}`).then( response => {
        console.log(response.data.data);
        location.reload();
      });
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1000px;
    max-width: 100%;
    margin:0 auto;
  }
</style>

<template>
  <div class="container">
  <nav-bar />
    <form  class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Form new book</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">


              <md-field :class="getValidationClass('book_name')">
                <label for="book-name">Author Name</label>
                <md-input name="book_name" id="book-name" autocomplete="given-name" v-model="form.book_name" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.book_name.required">The author name is required</span>
              </md-field>

              <md-field :class="getValidationClass('count_pages')">
                <label for="count-pages">Count-pages</label>
                <md-input name="author_name" id="count-pages" autocomplete="given-name" v-model="form.count_pages" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.count_pages.required">The author name is required</span>
              </md-field>

              <md-field :class="getValidationClass('description')">
                <label for="description">Description</label>
                <md-textarea name="description" id="description" autocomplete="given-name" v-model="form.description" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.description.required">The author name is required</span>
              </md-field>

              <md-field>
                <label for="authors">Movies</label>
                <md-select v-model="form.authors" name="authors" id="authors" multiple>
                  <md-option v-for="author in authors" v-bind:value="author.id"> {{ author.author_name}}</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create author</md-button>
        </md-card-actions>
      </md-card>
      <md-snackbar :md-active.sync="authorSaved">The user {{ form.author_name }} was saved with success!</md-snackbar>
    </form>


  </div>
</template>

<script>
import {validationMixin} from "vuelidate";
import {required} from "vuelidate/lib/validators";

export default {
  name:'NewBook',
  mixins:[validationMixin],
  data() {
    return {
      form:{
        book_name:'aaa',
        count_pages:0,
        description:'aaa',
        authors:[]
      },
      sending:false,
      authorSaved:false
    }
  },
  validations:{
    form: {
      book_name: {
        required
      },
      count_pages: {
        required
      },
      description: {
        required
      }
    }
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
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if(field) {
        return  {
          'md-invalid':field.$invalid && field.$dirty
        }
      }
    },
    saveAuthor() {
      this.sending = true;
      this.axios.post('books', this.form).then( response => {
        console.log(response.data);
      // console.log(this.form)
        this.sending = false;
        this.authorSaved = true;
        // location.reload();
      });

    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveAuthor()
      }
    }
  }
}
</script>

<style scoped>
.container {
  width:1000px;
  margin:0 auto;
}
</style>

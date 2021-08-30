<template>
  <div>
    <div class="container">
      <nav-bar />
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Form edit author</div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('author_name')">
                  <label for="author-name">Author Name</label>
                  <md-input name="author_name" id="author-name" autocomplete="given-name" v-model="form.author_name" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.author_name.required">The author name is required</span>
                </md-field>
              </div>
            </div>
          </md-card-content>
          <md-progress-bar md-mode="indeterminate" v-if="sending" />
          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Update</md-button>
          </md-card-actions>
        </md-card>
        <md-snackbar :md-active.sync="authorSaved">The user {{ form.author_name }} was updated with success!</md-snackbar>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
export default {
  name:'AuthorEdit',
  mixins:[validationMixin],
  data() {
    return {
      form:{
        author_name:''
      },
      sending:false,
      authorSaved:false
    }
  },
  validations:{
    form: {
      author_name: {
        required
      }
    }
  },
  mounted() {
    this.form.author_name = this.$route.params.item.author_name;
    // this.$store.dispatch('AuthorsStore/getAuthor', this.$route.params.id);
  },
  computed:{
    author() {
      this.form.author_name = this.$store.getters['AuthorsStore/author'];
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
    saveAuthor(id) {
      this.sending = true;
      this.axios.post(`authors/${id}`, {_method:'put',...this.form}).then( response => {
        console.log(response.data.data);
        this.sending = false;
        this.authorSaved = true;
        this.$router.push({name:'Authors'})
      });

    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveAuthor(this.$route.params.item.id)
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin:0 auto;
}
</style>

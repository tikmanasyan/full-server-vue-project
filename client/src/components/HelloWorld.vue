<template>
  <div>
    <nav-bar />

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: []
    }
  },
  computed:{
    authors() {
      return this.$store.getters['AuthorsStore/authors']
    }
  },
  mounted() {
    console.log(this.authors)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

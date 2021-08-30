<template>
  <nav>
    <div class="container">
      <ul>
        <li>
          <router-link :to="{name:'Authors'}">Authors</router-link>
        </li>
        <li>
          <router-link :to="{name:'Books'}">Books</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>

</style>

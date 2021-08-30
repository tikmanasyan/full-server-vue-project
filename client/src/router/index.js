import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Authors from "../views/dashboard/authors/Authors";
import EditAuthor from "../views/dashboard/authors/EditAuthor";
import NewAuthor from "../views/dashboard/authors/NewAuthor";
import Books from "../views/dashboard/books/Books";
import NewBook from "../views/dashboard/books/NewBook";
import EditBook from "../views/dashboard/books/EditBook";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/authors/all', name: 'Authors', component:Authors},
    { path: '/authors/edit/:id', name:'AuthorEdit', component:EditAuthor},
    { path: '/authors/new', name:'NewAuthor', component:NewAuthor},
    { path: '/books/all', name:'Books', component:Books},
    { path: '/books/new', name:'NewBook', component:NewBook},
    { path: '/books/edit/:id', name:'EditBook', component:EditBook},
  ]
})

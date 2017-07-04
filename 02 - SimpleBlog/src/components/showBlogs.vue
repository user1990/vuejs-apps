<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blogs Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" class="search">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://simpleblog-6f26b.firebaseio.com/posts.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      const blogsArray = [];
      for (let key in data) {
        data[key].id = key
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      // return value.slice(0, 100) + '...';
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    },
    'theme': {
        bind(el, binding, vnode) {
        if (binding.value === 'wide') {
          el.style.maxWidth = '1200px';
        } else if (binding.value === 'narrow') {
          el.style.maxWidth = '560px';
        }
        if (binding.arg === 'column') {
          el.style.background = '#ddd';
          el.style.padding = '20px';
        }
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
  #show-blogs{
    max-width: 800px;
    margin: 0px auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
  .search {
    width: 100%;
    height: 25px;
  }
</style>
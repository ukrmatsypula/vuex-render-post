<template>
  <div id="app">
    <div class="post" v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    posts: [],
  }),
  components: {},
  async mounted() {
    const response = await fetch(
      'http://jsonplaceholder.typicode.com/posts/?_limit=3'
    );
    const posts = await response.json();
    this.posts = posts;
  },
};
</script>

<style>
.post {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid red;
  border-radius: 5px;
  padding: 20px 0;
  margin: 60px auto;
  max-width: 500px;
}
</style>

<template>
  <div id="app">
    <h3>Всего постов: {{ countPosts }}</h3>
    <div class="post" v-for="(post, index) in allPosts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <PostForm />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostForm from './components/PostForm.vue';

export default {
  name: 'App',
  components: {
    PostForm
  },
  computed: {
    ...mapGetters(['GET_ALL_POSTS']),
    ...mapGetters(['POST_COUNT']),
    allPosts() {
      return this.GET_ALL_POSTS;
      //this.$store.getters.GET_ALL_POSTS;
    },
    countPosts() {
      return this.POST_COUNT;
    },
  },
  methods: {
    ...mapActions(['FETCH_POSTS']),
  },
  async mounted() {
    this.FETCH_POSTS(2);
    // this.$store.dispatch('FETCH_POSTS');
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

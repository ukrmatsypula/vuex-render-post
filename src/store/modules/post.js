export default {
  state: {
    post: [],
  },
  getters: {
    GET_ALL_POSTS: (state) => state.post,
    POST_COUNT: state => state.post.length,
  },
  mutations: {
    UPDATE_POSTS: (state, posts) => {
      state.post = posts;
    },
  },
  actions: {
    async FETCH_POSTS(context, limit = 3) {
      const response = await fetch(
        `http://jsonplaceholder.typicode.com/posts/?_limit=${limit}`
      );
      const posts = await response.json();
      context.commit('UPDATE_POSTS', posts);
    },
  },
};

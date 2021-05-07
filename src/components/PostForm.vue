<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      class="input"
      type="text"
      v-model="title"
      placeholder="enter title"
    />
    <input class="input" type="text" v-model="body" placeholder="enter body" />
    <button type="submit">Create Post</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'PostForm',
  data: () => ({
    title: '',
    body: '',
  }),
  methods: {
    ...mapMutations(['ADD_NEW_POST']),
    onSubmit() {
      const formData = {
        title: this.title,
        body: this.body,
      };

      if (Object.values(formData).every((item) => Boolean(item))) {
        const newPost = {
          ...formData,
          id: new Date().getTime(),
        };

        this.ADD_NEW_POST(newPost);
        this.title = this.body = '';
        //this.$store.commit('ADD_NEW_POST', newPost);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 500px;
  margin: 50px auto;
}
.input {
  display: block;
  width: 100%;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

<template>
  <section>
    <h2>Add your song</h2>
    <form @submit.prevent="addUserSong" action="?">
      <label>Author:</label>
      <input type="text" placeholder="Author name" v-model="author" />
      <label>Title:</label>
      <input type="text" placeholder="Song title" v-model="title" />
      <label>Image Url:</label>
      <input type="text" placeholder="Song image" v-model="imageUrl" />
      <label>Link to youtube:</label>
      <input type="text" placeholder="Youtube link" v-model="youtubeLink" />
      <button type="submit">Submit</button>
    </form>
  </section>
</template>
<script>
import { addSong } from "../firebaseInit";
export default {
  name: "AddSongForm",
  data() {
    return {
      author: "",
      title: "",
      imageUrl: "",
      youtubeLink: "",
    };
  },
  methods: {
    async addUserSong() {
      await addSong(this.author, this.title, this.imageUrl, this.youtubeLink);
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
h2 {
  color: white;
  padding-left: 16px;
  padding-bottom: 16px;
  padding-top: 16px;
}
form {
  display: flex;
  flex-direction: column;
  padding: 16px;
  label {
    color: white;
    padding: 8px 0;
    font-size: 20px;
  }
  input {
    padding: 8px 4px;
    padding-left: 8px;
    background-color: #2c2670;
    outline: none;
    border: none;
    transition: all 0.3s ease;
    font-size: 18px;
    border-radius: 15px;
    &:focus {
      font-size: 20px;
      filter: brightness(300%);
      color: #171717;
      font-weight: 700;
    }
  }
  button {
    margin-top: 24px;
    padding: 8px 24px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 20px;
    align-self: center;
    border: none;
    background-color: #2c2670;
    color: white;
    transition: all 0.3s ease;
    &:hover {
      filter: brightness(300%);
      color: #171717;
    }
  }
}
</style>

<template>
  <div class="hello">
    start of an array
    <template v-for="(song, index) in songs" :key="index">
      <li>{{ song.Author }}</li>
      <li>{{ song.Title }}</li>
    </template>
  </div>
</template>

<script>
import { getSongs } from "../firebaseInit.js";
export default {
  name: "SongsList",
  data() {
    return {
      songs: Array,
    };
  },
  props: {
    msg: String,
  },
  async created() {
    this.songs = await getSongs();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

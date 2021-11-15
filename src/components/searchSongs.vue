<template>
  <section class="songs-search">
    <h2>Search for your song</h2>
    <input
      type="text"
      placeholder="Search for songs"
      v-model="searchResult"
      @keydown="onSearch"
    />
  </section>
</template>
<script>
import { getSongs, getUsersSongs } from "../firebaseInit.js";
export default {
  name: "SongSearch",
  data() {
    return {
      searchResult: "",
      songs: Array,
      usersSongs: Array,
      filteredSongs: []
    };
  },
    async created() {
    this.songs = await getSongs();
    this.usersSongs = await getUsersSongs();
    for (const song of this.usersSongs) {
      this.songs.push(song);
    }
    
  },
  methods: {
    onSearch() {
      this.searchResult = this.searchResult.toLowerCase();
      let results = this.songs.filter((song) => {
        const name = song.title.toLowerCase();
        if (name.includes(this.searchResult)) {
         
          return song;
        }
      });
      
      this.$emit("searchChanged", results);
    },
  },

};
</script>
<style lang="scss" scoped>
.songs-search {
  padding: 0 16px;
  padding-top: 16px;
  h2 {
    color: white;
    padding-bottom: 16px;
  }
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
  width: 100%;
  &:focus {
    font-size: 20px;
    filter: brightness(300%);
    color: #171717;
    font-weight: 700;
  }
}
</style>

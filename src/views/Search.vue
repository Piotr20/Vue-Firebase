<template>
  <section>
    <SongSearch @searchChanged="onSearchChamged" />
    <SearchResults
      @songClicked="onSongClicked"
      :searchResult="inputSearchResult"
    />
  </section>
</template>
<script>
import SongSearch from "../components/searchSongs.vue";
import SearchResults from "../components/searchResults.vue";

export default {
  name: "Search",
  components: {
    SongSearch,
    SearchResults,
  },
  data() {
    return {
      inputSearchResult: Array,
      clickedSomg: Object,
    };
  },
  methods: {
    onSearchChamged(value) {
      this.inputSearchResult = value;
    },
    onSongClicked(value) {
      this.clickedSomg = value;
      this.$emit("songToPass", this.clickedSomg);
    },
  },
};
</script>
<style lang="scss" scoped></style>

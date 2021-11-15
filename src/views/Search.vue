<template>
  <section>
    <SongSearch @searchChanged="onSearchChamged" />
    <SearchResults :searchResult="inputSearchResult" />
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
    };
  },
  methods: {
    onSearchChamged(value) {
      this.inputSearchResult = value;
    },
  },
};
</script>
<style lang="scss" scoped></style>

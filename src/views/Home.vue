<template>
  <div class="home">
    <SongsList />
    <AddedSongs @allSongs="emitSongs" />
  </div>
</template>

<script>
// @ is an alias to /src
import SongsList from "@/components/songsList.vue";
import AddedSongs from "@/components/addedSongs.vue";
export default {
  name: "Home",
  components: {
    SongsList,
    AddedSongs,
  },
  methods: {
    emitSongs(value) {
      console.log("event value", value);
    },
  },
};
</script>
<style lang="scss" scoped></style>

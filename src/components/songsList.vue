<template>
  <div class="all-songs">
    <h2>All songs</h2>
    <div class="carusel-wrapper">
      <carousel :items-to-show="1">
        <slide v-for="(song, index) in songs" :key="index">
          <div class="carusel-box">
            <a :href="song.youtube_link">
              <img :src="song.url" alt="image missing" />
            </a>
            <h3>{{ song.author }}</h3>
            <p>{{ song.title }}</p>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import { getSongs, getUsersSongs } from "../firebaseInit.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "SongsList",
  data() {
    return {
      songs: Array,
      usersSongs: Array,
    };
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  async created() {
    this.songs = await getSongs();
    this.usersSongs = await getUsersSongs();
    for (const song of this.usersSongs) {
      this.songs.push(song);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carusel-wrapper {
  width: 100%;
  padding: 0 32px;
}
.carusel-box {
  color: white;
  img {
    width: 50%;
  }
}
.all-songs {
  padding-top: 16px;
  h2 {
    color: white;
    padding-left: 16px;
    padding-bottom: 16px;
  }
}
</style>

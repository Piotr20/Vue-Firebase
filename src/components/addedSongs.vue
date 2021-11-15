<template>
  <section id="added-songs">
    <h2>Songs added by users</h2>
    <div class="carusel-wrapper">
      <carousel :items-to-show="1">
        <template v-for="(song, index) in songs" :key="index">
          <template v-if="song.addedByUsers">
            <slide>
              <div class="carusel-box">
                <a :href="song.youtube_link">
                  <img :src="song.url" alt="Image missing" />
                </a>
                <h3>{{ song.author }}</h3>
                <p>{{ song.title }}</p>
              </div>
            </slide>
          </template>
        </template>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>
<script>
import { getUsersSongs } from "../firebaseInit.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "AddedSongs",
  data() {
    return {
      songs: Array,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  async created() {
    this.songs = await getUsersSongs();
  },
};
</script>
<style lang="scss" scoped>
#added-songs {
  margin-top: 32px;
}
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
#added-songs {
  padding-top: 16px;
  h2 {
    color: white;
    padding-left: 16px;
    padding-bottom: 16px;
  }
}
</style>

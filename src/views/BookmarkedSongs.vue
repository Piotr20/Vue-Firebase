<template>
  <section class="songs-details">
    <h2>Liked songs</h2>
    <div class="content-container">
      <template v-for="(song, index) in likedSongs" :key="index">
        <div class="bookmarked-wrapper">
          <img :src="song.url" alt="Liked song cover" />
          <h3>{{ song.title }}</h3>
          <p>{{ song.author }}</p>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  name: "BookmarkedSongs",
  components: {},
  props: ["likedSongs"],
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.likedSongs);
  },
};
</script>
<style lang="scss" scoped>
.songs-details {
  padding: 0 16px;
  padding-top: 16px;
  h2 {
    color: white;
    padding-bottom: 16px;
  }
}
.content-container {
  padding: 16px;

  img {
    width: 100%;
  }
  h3 {
    padding-top: 8px;
    margin-top: 0;
    padding-bottom: 4px;
    font-size: 20px;
    color: white;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
  }
  .bookmarked-wrapper {
    margin-bottom: 32px;
  }
}
</style>

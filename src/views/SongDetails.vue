<template>
  <section class="songs-details">
    <h2>Song Details</h2>
    <div class="content-container">
      <img :src="clickedSongProp.url" alt="" />

      <div class="song-bio">
        <div class="text-wrapper">
          <h3>{{ clickedSongProp.title }}</h3>
          <p>{{ clickedSongProp.author }}</p>
        </div>
        <div class="song-bookmark" @click="heartClickToggle">
          <img
            v-if="this.heartClicked == false"
            src="../assets/images/Icons/heart_empty.png"
            alt="empty heart icon"
          />
          <img
            v-if="this.heartClicked == true"
            src="../assets/images/Icons/heart_filled.png"
            alt="filled heart icon"
          />
        </div>
      </div>
      <div class="youtube-link">
        <a :href="clickedSongProp.youtube_link">
          <img src="../assets/images/Icons/yt-icon.png" alt="youtube icon" />
          <p>Go to youtube</p>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SongDetails",
  components: {},
  props: ["clickedSongProp"],
  data() {
    return {
      songClicked: Object,
      heartClicked: false,
      bookmarkedSongs: [],
    };
  },
  methods: {
    heartClickToggle() {
      this.heartClicked = !this.heartClicked;
      console.log(this.heartClicked);

      if (this.heartClicked == true) {
        this.bookmarkedSongs.push(this.clickedSongProp);
        console.log("1st click", this.bookmarkedSongs);
        if (this.bookmarkedSongs.length > 1) {
          for (let index = 0; index < this.bookmarkedSongs.length; index++) {
            if (
              this.bookmarkedSongs[index].title === this.clickedSongProp.title
            ) {
              this.bookmarkedSongs.splice(index, 1);
              console.log("2nd click", this.bookmarkedSongs);
            }
          }
        } else {
          this.$emit("songBookmarked", this.bookmarkedSongs[0]);
        }
      }
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.songs-details {
  padding: 0 16px;
  padding-top: 32px;
  h2 {
    color: white;
    padding-bottom: 32px;
    text-align: center;
  }
}
.content-container {
  padding: 16px;
  .song-bio {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .text-wrapper {
      width: fit-content;
    }
  }
  .song-bookmark {
    display: flex;
    justify-content: right;
    align-items: flex-end;
    width: fit-content;
    img {
      width: 35px;
    }
  }
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
    text-decoration: none;
  }
  .youtube-link {
    margin-top: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
    }
    img {
      width: 100px;
    }
  }
}
</style>

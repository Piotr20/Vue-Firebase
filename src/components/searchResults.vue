<template>
  <section class="search-results">
    <h2>Results:</h2>
    <div class="message" v-if="searchResult[0] == undefined">
      Just start typing song title
    </div>
    <div class="results">
      {{ searchResult.title }}
      <ul v-for="(song, index) in searchResult" :key="index">
        <li>
          <img :src="song.url" alt="" />
          <div>
            <h2>{{ song.title }}</h2>
            <h3>{{ song.author }}</h3>
          </div>
          <a :href="song.youtube_link">
            <img src="../assets/images/Icons/yt-icon.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "SearchResults",
  props: ["searchResult"],
};
</script>
<style lang="scss" scoped>
.search-results {
  padding: 16px;
  h2 {
    font-size: 18px;
    margin-top: 16px;
    color: white;
    padding-bottom: 16px;
  }
  h3 {
    font-size: 14px;
    color: white;
  }
}
.results {
  margin-top: 16px;
  width: 100%;
  li {
    background-color: #2c267067;
    border-radius: 15px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    img {
      display: inline;
      object-fit: contain;
      width: 65px;
    }
    div {
      padding-left: 16px;
    }
  }
  h2 {
    margin-top: 0;
    padding-bottom: 4px;
    font-size: 20px;
  }
  h3 {
    color: rgba(255, 255, 255, 0.5);
  }
  a {
    margin-left: auto;
    padding-right: 16px;
    img {
      width: 40px;
      transition: all 0.3s ease;
      &:hover {
        filter: brightness(300%);
      }
    }
  }
}
.message {
  color: white;
  text-align: center;
}
</style>

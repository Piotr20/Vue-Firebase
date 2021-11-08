<template>
  <div class="home">
    <SongsList />
  </div>
</template>

<script>
// @ is an alias to /src
import SongsList from "@/components/songsList.vue";

export default {
  name: "Home",
  components: {
    SongsList,
  },
};
</script>

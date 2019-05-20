<template>
  <div class="gallery">
    <div v-for="(item, index) in items.results" :key="index" >
      <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" class="comicImage" alt="">
        <h3 class="text-center">{{ item.name }}</h3>
    </div>
  </div>
  <!-- <h3 v-for="(item, index) in items.results" :key="index">{{ item.name }}</h3> -->
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      somethingCount: 'FETCH_CHARACTERS'
    }),
    items() {
      return this.somethingCount.data
    }
  },
  mounted() {
    this.getCharacters()
  },
  methods: {
    getCharacters() {
      this.$store.dispatch(
        'FETCH_CHARACTERS'
      )
    }
  }
}
</script>

<style scoped>
/* =======================================
card#2
========================================*/
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.comicImage {
  height: 300px;
  width: 300px;
  margin: 15px;
}


</style>


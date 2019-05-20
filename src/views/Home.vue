<template>
  <div class="home">
    <h3 v-for="(item, index) in items.results" :key="index">{{ item.name }}</h3>
  </div>
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

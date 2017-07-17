<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <div class="col-md-12">
      <Character v-for="(id, index) in initial_ids" :id="id" key="index"></Character>
    </div>
  </div>
</template>

<script>
import Character from './components/Character.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team',
      initial_ids: [1, 2, 3, 4, 5, 6]
    }
  },
  components: {
    Character
  }
}
</script>

<style>

</style>

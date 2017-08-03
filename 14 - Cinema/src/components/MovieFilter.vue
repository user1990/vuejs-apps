<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter
        v-for="time in times"
        :key="time.id"
        :title="time"
        category="time"
        @check-filter="checkFilter">
      </check-filter>
    </div>
    <h3>By genre</h3>
    <div class="filter-group">
      <check-filter
        v-for="genre in genres"
        :key="genre.id"
        :title="genre"
        category="genre"
        @check-filter="checkFilter">
      </check-filter>
    </div>
  </div>
</template>

<script>
  import genres from '../util/genres';
  import times from '../util/times';
  import CheckFilter from './CheckFilter.vue';

  export default {
    data() {
      return {
        genres,
        times
      };
    },
    methods: {
      checkFilter(category, title, checked) {
        this.$emit('check-filter', category, title, checked);
      }
    },
    components: {
      CheckFilter
    }
  }
</script>


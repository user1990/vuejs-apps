new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function(e) {
      this.health -= 10;
      if (this.health <= 0) {
        e.stopPropagation();
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
});

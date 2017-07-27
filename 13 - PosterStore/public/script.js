const PRICE = 9.99;
const LOAD_NUMBER = 10;

new Vue({
  el: '#app',
  data: {
    total: 1,
    items: [],
    cart: [],
    results: [],
    newSearch: 'Posters',
    lastSearch: '',
    loading: false,
    price: PRICE
  },
  computed: {
    noMoreItems() {
      return this.items.length === this.results.length && this.results.length > 0;
    }
  },
  methods: {
    appendItems() {
      if (this.items.length < this.results.length) {
        const append = this.results.slice(this.items.length, this.items.length + LOAD_NUMBER);
        this.items = this.items.concat(append);
      }
    },
    onSubmit() {
      if (this.newSearch.length) {
        this.items = [];
        this.loading = true;
        this.$http
          .get('/search/'.concat(this.newSearch))
          .then(res => {
            this.lastSearch = this.newSearch;
            this.results = res.data;
            this.appendItems();
            this.loading = false;
          });
      }
    },
    addItem(index) {
      this.total += 10.00;
      const item = this.items[index];
      let found = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          found = true;
          this.cart[i].quantity++;
          break;
        }
      }
      if (!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          quantity: 1,
          price: PRICE
        });
      }
    },
    inc(item) {
      item.quantity++;
      this.total += PRICE;
    },
    dec(item) {
      item.quantity--;
      this.total -= PRICE;
      if (item.quantity <= 0) {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  },
  filters: {
    currency(price) {
      return '$'.concat(price.toFixed(2));
    }
  },
  mounted() {
    this.onSubmit();

    const vueInstance = this;
    const element = document.getElementById('product-list-bottom');
    const watcher = scrollMonitor.create(element);
    watcher.enterViewport(function() {
      vueInstance.appendItems();
    });
  }
});



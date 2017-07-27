const PRICE = 9.99;

new Vue({
  el: '#app',
  data: {
    total: 1,
    items: [],
    cart: [],
    newSearch: '',
    lastSearch: '',
    loading: false
  },
  methods: {
    onSubmit() {
      this.items = [];
      this.loading = true;
      this.$http
        .get('/search/'.concat(this.newSearch))
        .then(res => {
          this.lastSearch = this.newSearch;
          this.items = res.data;
          this.loading = false;
        });
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
  }
});

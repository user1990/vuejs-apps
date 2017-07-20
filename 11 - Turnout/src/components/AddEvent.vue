<template>
  <div class="">
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <input type="text" class="form-control" v-model="event.title" placeholder="Title">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="event.description" placeholder="Description">
      </div>
      <div class="form-group">
        <input type="date" class="form-control" v-model="event.date" placeholder="Date">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="event.location" placeholder="Location">
      </div>
      <button class="btn btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from '../config/firebaseApp';

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        email: ''
      },
      showForm: false
    }
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event)
    }
  }
}
</script>
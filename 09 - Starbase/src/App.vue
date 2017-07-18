<template>
  <div id="app">
    <h3>Starbase</h3>
    <h4>
      <router-link class="link" to="/data/people">Meet The Characters</router-link> |
      <router-link class="link" to="/data/planets">Explore The Planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>


<template>
  <v-toolbar dark color="blue">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      Maindesk
    </v-toolbar-title>
    <v-spacer></v-spacer>
     <nuxt-link class="title" to="/results/prio">Prio</nuxt-link>
     <nuxt-link class="title" to="/state/prio">Prio</nuxt-link>
  </v-toolbar>
</template>
<script>
</script>
<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited{
  color: white;
}
</style>

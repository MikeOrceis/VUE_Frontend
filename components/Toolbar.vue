<template>
  <v-toolbar dark color="blue">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
            <v-btn
              color="secondary"
              dark
            >
              <nuxt-link class="title" to="results/prio">Prio</nuxt-link>
            </v-btn>
            <v-btn
              color="secondary"
              dark
            >
              <nuxt-link class="title" to="results/open">Offene</nuxt-link>
            </v-btn>
            <v-btn
              color="secondary"
              dark
            >
              <nuxt-link class="title" to="results/closed">Geschlossene</nuxt-link>
            </v-btn>

    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
</script>
<style scoped>
</style>

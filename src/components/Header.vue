<template>
  <nav>
    <v-app-bar app fixed color="grey" flat>
        <span>(Logo + Name)</span>
        <v-spacer></v-spacer>
      <div class="pa-2" v-for="page in pages" :key="page.text">
        <router-link id="link" :to="`${page.route}`">
          <v-btn id="button" text>{{page.text}}</v-btn>
        </router-link>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    pages: [
      { text: "Home", route: "/" },
      { text: "About", route: "/about" },
      {text: "Contact", route: "/contact"}
    ]
  })
};
</script>

<style>
</style>
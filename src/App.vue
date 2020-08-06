<template>
  <v-app id="App">
    <Header></Header>
    <v-main class="mx-5 my-2">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>

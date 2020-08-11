<template>
  <v-app id="App">
    <Header></Header>
    <v-main class="mx-7 my-2">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#link{
  text-decoration: none;
}

</style>

<template>
  <v-app id="App">
    <Header></Header>
    <v-main v-if="`${this.$vssWidth}` > 600" class="mx-7 my-2">
      <router-view></router-view>
    </v-main>
    <v-main v-if="`${this.$vssWidth}` <= 600" class="mx-4 my-2">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VueScreenSize from "vue-screen-size";
export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style>
#link{
  text-decoration: none;
}

</style>

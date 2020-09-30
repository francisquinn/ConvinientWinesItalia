<template>
  <v-app id="App">
    <Header></Header>
    <v-main class="my-0">
      <router-view></router-view>
    </v-main>
    <br>
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
#background-grape{
  background-color: #6f1d32;
}
#text-grape{
  color: #6f1d32;
}
#black-text{
  color: #323232;
}
#lm_button{
  background-color: #6f1d32;
  font-family: Playfair;
}
@font-face {
  font-family: "Playfair";
  src: url("/PlayfairDisplay-Regular.ttf");
}
@font-face {
  font-family: "Playfair semi-bold it";
  src: url("/PlayfairDisplay-SemiBoldItalic.ttf");
}
#link{
  text-decoration: none;
}
#playfair-regular{
  font-family: Playfair;
  color: #323232;
}
#playfair-md-text {
  font-size: 19px;
  font-family: Playfair;
  color: #323232;
}
#playfair-regular-grape{
  font-family: Playfair;
  color: #6f1d32;
  font-size: 25px;
}
#playfair-semibold-it{
  font-family: Playfair semi-bold it;
  font-size: 40px;
  color: #6f1d32;
}
#playfair-semibold-it-error{
  font-family: Playfair semi-bold it;
  font-size: 30px;
  color: #6f1d32;
}


</style>

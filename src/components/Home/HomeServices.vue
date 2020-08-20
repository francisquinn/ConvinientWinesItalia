<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600" class="yellow">
      <v-row class="lime">
        <v-col>
          <span>Link to services</span>
        </v-col>
      </v-row>
      <v-row class="pink">
        <v-col cols="12" sm="6" md="6" lg="7" order="first">
          <v-card>
            <span>{{info.home_service_text}}</span>
            <br>
            <v-row>
              <v-col class="text-center">
              <router-link id="link" tag="a" to="/services">
                <v-btn id="button" class="black white--text">
                  <span>Learn More</span>
                </v-btn>
              </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="5" order="last">
          <v-card>
            <v-img :src="info.home_service_picture" :lazy-src="info.home_service_picture"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small screen picture first, text last -->
    <v-container v-if="`${this.$vssWidth}` <= 600" class="yellow">
      <v-row class="lime">
        <v-col>
          <span>Link to services</span>
        </v-col>
      </v-row>
      <v-row class="pink">
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>Small text about services</span>
            <br>
            <v-row>
              <v-col class="text-center">
              <router-link id="link" tag="a" to="/services">
                <v-btn id="button" class="black white--text">
                  <span>Learn More</span>
                </v-btn>
              </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <v-img :src="info.home_service_picture" :lazy-src="info.home_service_picture"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
export default {
  props: {
    info: {
      type: Object,
    },
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style>
</style>
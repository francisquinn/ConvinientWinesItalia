<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600">
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">Services</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col data-aos="fade-right" cols="12" sm="6" md="6" lg="7" order="first">
          <v-card flat class="pa-2">
            <span id="playfair-regular">{{info.home_service_text}}</span>
            <br />
            <br>
            <v-row>
              <v-col class="text-center">
                <router-link id="link" tag="a" to="/services">
                  <v-btn id="lm_button" class="white--text">
                    <span>Learn More</span>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col data-aos="fade-left" cols="12" sm="6" md="6" lg="5" order="last">
          <v-card>
            <v-img :src="info.home_service_picture" :lazy-src="info.home_service_picture">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small screen picture first, text last -->
    <v-container v-if="`${this.$vssWidth}` <= 600">
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">Services</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card flat class="pa-2">
            <span id="playfair-regular">{{info.home_service_text}}</span>
            <br />
            <v-row>
              <v-col class="text-center">
                <router-link id="link" tag="a" to="/services">
                  <v-btn id="lm_button" class="white--text">
                    <span>Learn More</span>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <v-img :src="info.home_service_picture" :lazy-src="info.home_service_picture">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
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
<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600">
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">Wines</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="7" order="first">
          <v-card flat class="pa-2">
            <span id="playfair-regular">{{info.home_wine_text}}</span>
            <br />
            <v-row>
              <v-col class="text-center">
                <router-link id="link" tag="a" to="/wines">
                  <v-btn id="lm_button" class="white--text">
                    <span>Learn More</span>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="5" order="last">
          <v-card>
            <v-img :src="info.home_wine_picture" :lazy-src="info.home_wine_picture"></v-img>
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
            <span class="pa-3" id="playfair-semibold-it">Wines</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card flat class="pa-2">
            <span id="playfair-regular">{{info.home_wine_text}}</span>
            <br />
            <v-row>
              <v-col class="text-center">
                <router-link id="link" tag="a" to="/wines">
                  <v-btn id="lm_button" class="black white--text">
                    <span>Learn More</span>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <v-img :src="info.home_wine_picture" :lazy-src="info.home_wine_picture"></v-img>
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
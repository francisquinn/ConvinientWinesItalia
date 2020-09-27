<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600" class="about_anchor">
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">About</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          data-aos="fade-right"
          cols="12"
          sm="6"
          md="6"
          lg="7"
          order="first"
        >
          <v-card flat class="pa-2" id="playfair-regular" v-html="info.about">
            <span></span>
          </v-card>
        </v-col>
        <v-col data-aos="fade-left" cols="12" sm="6" md="6" lg="5" order="last">
          <v-card flat>
            <v-img :src="info.about_image" :lazy-src="info.about_image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small screen picture first, text last -->
    <v-container v-if="`${this.$vssWidth}` <= 600" class="about_anchor">
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">About</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col data-aos="fade-right" cols="12" sm="6" md="6" lg="6" order="last">
          <v-card id="playfair-regular" flat class="pa-2" v-html="info.about">
          </v-card>
        </v-col>
        <v-col data-aos="fade-left" cols="12" sm="6" md="6" lg="6" order="first">
          <v-card flat>
            <v-img :src="info.about_image" :lazy-src="info.about_image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
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
.about_anchor {
  position: relative;
  top: 70px;
}
</style>
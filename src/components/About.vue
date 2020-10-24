<template>
  <div>
    <v-container class="about_anchor">
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">About</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col data-aos="fade-right" cols="12" sm="6" md="6" lg="5">
          <v-card flat>
            <v-img :src="info.about_image" :lazy-src="info.about_image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="#6f1d32"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col
          data-aos="fade-right"
          v-if="`${this.$vssWidth}` > 600"
          cols="12"
          sm="6"
          md="6"
          lg="7"
        >
          <v-card
            flat
            id="playfair-regular"
            class="pa-2"
            v-html="info.about"
          ></v-card>
        </v-col>
        <v-col
          data-aos="fade-right"
          v-if="`${this.$vssWidth}` <= 600"
          cols="12"
          sm="6"
          md="6"
          lg="7"
        >
          <v-card
            v-if="!readMore"
            id="playfair-regular"
            flat
            class="pa-2"
            v-html="info.about.slice(0, 280) + '...'"
          >
          </v-card>
          <v-card
            flat
            id="playfair-regular"
            class="pa-2"
            v-if="readMore"
            v-html="info.about"
          ></v-card>
          <v-row class="ma-0 pa-0">
            <v-col class="text-center">
              <v-btn
                id="playfair-regular"
                class="blue--text ma-0 pa-0"
                text
                v-show="!readMore"
                @click="readMore = true"
                >Read more</v-btn
              >
              <v-btn
                id="playfair-regular"
                class="red--text"
                text
                v-show="readMore"
                v-if="readMore"
                @click="readMore = false"
                >Close</v-btn
              >
            </v-col>
          </v-row>
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
  data: () => ({
    readMore: false,
  }),

  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style>
.about_anchor {
  position: relative;
  top: 70px;
  margin-top: -70px;
}
</style>
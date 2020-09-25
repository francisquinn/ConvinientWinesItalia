<template>
  <div>
    <!-- Large text for computer -->
    <v-container v-if="`${this.$vssWidth}` > 870" fluid>
      <v-row justify="center" align="center">
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
          <v-card flat id="black-text"  class="pa-4">
            <span id="home_paragraph_large">{{info.home_paragraph}}</span>
          </v-card>
          <v-row justify="center" align="center">
            <v-card flat id="text-grape">
              <span id="home_paragraph_large" v-html="info.one_stop"></span>
            </v-card>
          </v-row>
        </v-col>
        <v-col data-aos="fade-down"  cols="12" sm="6" md="6" lg="6">
          <v-row class="pa-3" v-for="points in info.home_bullet_points" :key="points.id">
            <v-col cols="1" sm="1" md="1" lg="1">
              <v-icon id="text-grape" size="40">{{arrow}}</v-icon>
            </v-col>
            <v-col class="black--text" cols="11" sm="11" md="11" lg="11">
              <v-card flat >
              <span id="home_bullet_points_large" v-html="points.point"></span>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small text for phone -->
    <v-container v-if="`${this.$vssWidth}` <= 870" id="background-grape" fluid>
      <v-row justify="center" align="center">
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
          <v-card flat id="background-grape" class="white--text pa-4">
            <span id="home_paragraph_small">{{info.home_paragraph}}</span>
          </v-card>
          <v-row justify="center" align="center">
            <v-card flat id="background-grape" class="white--text">
              <span id="home_paragraph_small" v-html="info.one_stop"></span>
            </v-card>
          </v-row>
        </v-col>
        <v-col data-aos="fade-down" cols="12" sm="6" md="6" lg="6">
          <v-row class="pa-3" v-for="points in info.home_bullet_points" :key="points.id">
            <v-col  cols="1" sm="1" md="1" lg="1">
              <v-icon class="white--text" >{{arrow}}</v-icon>
            </v-col>
            <v-col class="white--text" cols="10" sm="10" md="10" lg="10">
              <span id="home_bullet_points_small" v-html="points.point"></span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiChevronRight } from '@mdi/js'; 
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data: () => ({
    arrow: mdiChevronRight,
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style scoped>
li {
  list-style-type: none;
}
ol {
  margin: 0;
  padding: 0;
}
#home_paragraph_large {
  font-size: 40px;
  font-family: Playfair;
}
#home_bullet_points_large {
  font-size: 25px;
  font-family: Playfair;
}

#home_paragraph_small {
  font-size: 25px;
  font-family: Playfair;
}
#home_bullet_points_small {
  font-size: 17px;
  font-family: Playfair;
}

</style>
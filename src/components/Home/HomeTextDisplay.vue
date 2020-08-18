<template>
  <div>
    <!-- Large text for computer -->
    <v-container v-if="`${this.$vssWidth}` > 870" class="blue" fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card class="pa-4">
            <span id="home_paragraph_large" v-html="info.home_paragraph"></span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-row class="yellow pa-3" v-for="points in info.home_bullet_points" :key="points.id">
            <v-col class="blue" cols="1" sm="1" md="1" lg="1">
              <v-icon size="30">{{arrow}}</v-icon>
            </v-col>
            <v-col class="red" cols="11" sm="11" md="11" lg="11">
              <span id="home_bullet_points_large">{{points.point}}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small text for phone -->
    <v-container v-if="`${this.$vssWidth}` <= 870" class="blue" fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card class="pa-4">
            <span id="home_paragraph_small" v-html="info.home_paragraph"></span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-row class="yellow pa-3" v-for="points in info.home_bullet_points" :key="points.id">
            <v-col class="blue" cols="1" sm="1" md="1" lg="1">
              <v-icon >{{arrow}}</v-icon>
            </v-col>
            <v-col class="red" cols="10" sm="10" md="10" lg="10">
              <span id="home_bullet_points_small">{{points.point}}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiArrowRight } from "@mdi/js";
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data: () => ({
    arrow: mdiArrowRight,
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
  font-size: 35px;
}
#home_bullet_points_large {
  font-size: 20px;
}

#home_paragraph_small {
  font-size: 25px;
}
#home_bullet_points_small {
  font-size: 17px;
}
</style>
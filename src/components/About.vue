<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600" class="purple about_anchor">
      <v-row class="red">
        <v-col>
          <span>About</span>
        </v-col>
      </v-row>
      <v-row class="blue">
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <span>{{info.about}}</span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>(Logo + Name)</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small screen picture first, text last -->
    <v-container v-if="`${this.$vssWidth}` <= 600"  class="purple about_anchor">
      <v-row class="red">
        <v-col>
          <span>About</span>
        </v-col>
      </v-row>
      <v-row class="blue">
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>About text</span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <span>(Logo + Name)</span>
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
      type: Object
    }
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
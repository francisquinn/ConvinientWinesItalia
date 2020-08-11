<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600" fluid class="purple">
      <v-row class="red">
        <v-col>
          <span>Wines</span>
        </v-col>
      </v-row>
      <v-row class="yellow">
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <span>( small description)</span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>wine picture</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small screen picture first, text last -->
    <v-container v-if="`${this.$vssWidth}` <= 600" fluid class="purple">
      <v-row class="red">
        <v-col>
          <span>Wines</span>
        </v-col>
      </v-row>
      <v-row class="yellow">
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>(title and small description)</span>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <span>wine picture</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
export default {
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style>
</style>
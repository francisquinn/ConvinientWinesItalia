<template>
  <div>
    <!-- Large screen center -->
    <v-container data-aos="fade-down"  fluid>
      <v-row
        id="logo_picture_large"
        class="white"
        justify="center"
        align="center"
        v-if="`${this.$vssWidth}` > 600"
      >
        <v-col cols="12" lg="12" class="text-center">
          <v-card flat>
            <v-img src="/logo-text-white-color.png" lazy-src="/logo-text-white-color.png">
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

<!-- small screen center -->
    <v-container data-aos="fade-down" fluid >
      <v-row
        id="logo_picture_small"
        class="white"
        justify="center"
        align="center"
        v-if="`${this.$vssWidth}` <= 600"
      >
        <v-col cols="12" lg="12" class="text-center">
          <v-card flat>
            <v-img src="/small-logo-text-color.png" lazy-src="/small-logo-text-color.png">
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
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style scoped>
#logo_picture_large {
  height: 91vh;
}
#logo_picture_small {
  height: 80vh;
}
</style>
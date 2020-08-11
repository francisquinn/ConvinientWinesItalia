<template>
  <div>
    <!-- Large screen text to the left, picture to the right -->
    <v-container v-if="`${this.$vssWidth}` > 600" fluid class="green">
      <v-row class="red">
        <v-col>
          <span>Link to wines page</span>
        </v-col>
      </v-row>
      <v-row class="orange">
        <v-col cols="12" sm="6" md="6" lg="6" order="first">
          <v-card>
            <span>text about wines on offer</span>
            <br />
            <v-row>
              <v-col class="text-center">
                <router-link id="link" tag="a" to="/wines">
                  <v-btn id="button" class="black white--text">
                    <span>Learn More</span>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>Picture of wines</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Small screen picture first, text last -->
    <v-container v-if="`${this.$vssWidth}` <= 600" fluid class="green">
      <v-row class="red">
        <v-col>
          <span>Link to wines page</span>
        </v-col>
      </v-row>
      <v-row class="orange">
        <v-col cols="12" sm="6" md="6" lg="6" order="last">
          <v-card>
            <span>text about wines on offer</span>
            <br />
            <v-row>
              <v-col class="text-center">
                <router-link id="link" tag="a" to="/wines">
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
            <span>Picture of wines</span>
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
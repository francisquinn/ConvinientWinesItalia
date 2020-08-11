<template>
  <v-container class="blue" fluid>
      <v-row>
          <v-col cols="12" sm="6" md="6" lg="6">
              <v-card>
                  <v-card-text>Text here</v-card-text>
              </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6">
              <v-card>
                  <v-card-text>
                      Points here
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import VueScreenSize from "vue-screen-size";
export default {
    mixins: [VueScreenSize.VueScreenSizeMixin]
}
</script>

<style>

</style>
<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-card flat class="pa-2">
          <v-divider></v-divider>
          <span class="pa-3" id="playfair-semibold-it">Services</span>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
    <!-- Account manager -->
    <v-row data-aos="fade-up" class=" pa-3" align="center" justify="center">
      <v-col class="text-center" cols="12" sm="5" md="4" lg="3">
        <v-card>
          <v-img id="service_pic" src="/account-manager.jpg" lazy-src="/account-manager.jpg">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" md="8" lg="8">
        <v-row class="pa-2" v-for="serv in info.services[0].account_services" :key="serv.id">
          <v-col class="text-center" cols="1" sm="1" md="1" lg="1">
            <v-icon id="text-grape">{{arrow}}</v-icon>
          </v-col>
          <v-col cols="10" sm="10" md="9" lg="9">
            <span id="playfair-md-text">{{serv.service}}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- Wine services -->
    <v-row data-aos="fade-up" class=" pa-3" align="center" justify="center">
      <v-col class="text-center" cols="12" sm="5" md="4" lg="3">
        <v-card>
          <v-img id="service_pic" src="/bottles-blured.jpg" lazy-src="/bottles-blured.jpg">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" md="8" lg="8">
        <v-row class="pa-2" v-for="serv in info.services[2].wine_services" :key="serv.id">
          <v-col class="text-center" cols="1" sm="1" md="1" lg="1">
            <v-icon id="text-grape">{{arrow}}</v-icon>
          </v-col>
          <v-col cols="10" sm="11" md="9" lg="9">
            <span id="playfair-md-text">{{serv.service}}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- Packing services -->
    <v-row data-aos="fade-up" class="pa-3" align="center" justify="center">
      <v-col class="text-center" cols="12" sm="5" md="4" lg="3">
        <v-card>
          <v-img id="service_pic" src="/wine-glasses.jpg" lazy-src="/wine-glasses.jpg">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" md="8" lg="8">
        <v-row class="pa-2" v-for="serv in info.services[1].language_services" :key="serv.id">
          <v-col class="text-center" cols="1" sm="1" md="1" lg="1">
            <v-icon id="text-grape">{{arrow}}</v-icon>
          </v-col>
          <v-col cols="10" sm="11" md="9" lg="9">
            <span id="playfair-md-text">{{serv.service}}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiChevronRight } from "@mdi/js";
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
#service_pic {
  height: 230px;
  border-radius: 1%;
  -moz-border-radius: 1%;
  -webkit-border-radius: 1%;
}
</style>
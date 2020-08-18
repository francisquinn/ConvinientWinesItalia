<template>
  <v-container class="purple">
    <v-row class="yellow">
      <v-col>
        <span>Services</span>
      </v-col>
    </v-row>
    <!-- Account manager -->
    <v-row align="center" justify="center" class="blue pa-3">
      <v-col class="orange text-center" cols="12" sm="5" md="4" lg="3">
        <v-img id="service_pic" src="/account-manager.jpg" lazy-src="/account-manager.jpg"></v-img>
      </v-col>
      <v-col class="green" cols="12" sm="7" md="8" lg="8">
        <v-row class="pink pa-2" v-for="serv in info.services[0].account_services" :key="serv.id">
          <v-col class="lime text-center" cols="1" sm="1" md="1" lg="1">
            <v-icon class="blue">{{arrow}}</v-icon>
          </v-col>
          <v-col class="red" cols="10" sm="11" md="9" lg="9">
            <span>{{serv.service}}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Wine services -->
    <v-row align="center" justify="center" class="blue pa-3">
      <v-col class="orange text-center" cols="12" sm="5" md="4" lg="3">
        <v-img id="service_pic" src="/bottles-blured.jpg" lazy-src="/bottles-blured.jpg"></v-img>
      </v-col>
      <v-col class="green" cols="12" sm="7" md="8" lg="8">
        <v-row class="pink pa-2" v-for="serv in info.services[2].wine_services" :key="serv.id">
          <v-col class="pink text-center" cols="1" sm="1" md="1" lg="1">
            <v-icon>{{arrow}}</v-icon>
          </v-col>
          <v-col class="red" cols="10" sm="11" md="9" lg="9">
            <span>{{serv.service}}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Language services -->
    <v-row align="center" justify="center" class="blue pa-3">
      <v-col class="orange text-center" cols="12" sm="5" md="4" lg="3">
        <v-img id="service_pic" src="/uk-flag.jpg" lazy-src="/uk-flag.jpg"></v-img>
      </v-col>
      <v-col class="green" cols="12" sm="7" md="8" lg="8">
        <v-row class="pink pa-2" v-for="serv in info.services[1].language_services" :key="serv.id">
          <v-col class="pink text-center" cols="1" sm="1" md="1" lg="1">
            <v-icon>{{arrow}}</v-icon>
          </v-col>
          <v-col class="red" cols="10" sm="11" md="9" lg="9">
            <span>{{serv.service}}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
#service_pic {
  border: 1px solid red;
  height: 230px;
  border-radius: 5%;
  -moz-border-radius: 5%;
  -webkit-border-radius: 5%;
  width: 280px;
}
</style>
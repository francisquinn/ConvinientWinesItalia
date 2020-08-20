<template>
  <v-container class="amber">
    <v-row class="pink">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card class="pa-2">
          <div class="red pa-2">
            <v-icon>{{email}}</v-icon>
            <span class="mx-2">email</span>
          </div>
          <v-divider></v-divider>
          <div class="red pa-2">
            <v-icon>{{phone}}</v-icon>
            <span class="mx-2">office</span>
          </div>
          <v-divider></v-divider>
          <div class="red pa-2">
            <v-icon>{{cell}}</v-icon>
            <span class="mx-2"><a href="tel: +39 327 5482914">+39 327 5482914</a></span>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card class="pa-2" flat>
          <p>Via G.D'Annunzio 28</p>
          <p>Biancade</p>
          <p>31056 Treviso (TV)</p>
          <p>Italia</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCellphoneAndroid } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiPhone } from '@mdi/js'; 
export default {
  data: () => ({
    cell: mdiCellphoneAndroid,
    email: mdiEmail,
    phone: mdiPhone
  }),
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
  font-family: Playfair;
}
</style>
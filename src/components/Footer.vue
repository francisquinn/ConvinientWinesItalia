<template>
  <v-footer id="background-grape" dark width="100%">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4" lg="4">
        <v-card flat class="pa-2" id="background-grape">
          <p>Via G.D'Annunzio 28</p>
          <p>Biancade</p>
          <p>31056 Treviso (TV)</p>
          <p>Italia</p>
          <br />
          <p>
            <b>Tel:</b>
          </p>
          <p>
            <b>Email:</b>
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card flat class="pa-2" id="background-grape">
          <p class="py-2" v-for="link in pages" :key="link.text">
            <router-link class id="link" :to="`${link.route}`">
              <span id="nav_link">{{link.text}}</span>
            </router-link>
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="6">
        <v-card flat id="background-grape">
          <span>(Logo + name here)</span>
        </v-card>
      </v-col>
      
      <v-col class="text-center" cols="12" sm="12" md="12" lg="12">
        <v-divider class="white"></v-divider>
        <v-card id="background-grape" flat class="pa-3">
          <span>copyright</span>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiHome } from "@mdi/js";
import { mdiInformationVariant } from "@mdi/js";
import { mdiFileDocumentEdit } from "@mdi/js";
import { mdiGlassWine } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
export default {
  data: () => ({
    pages: [
      { icon: mdiHome, text: "Home", route: "/" },
      { icon: mdiInformationVariant, text: "About", route: "/#about" },
      { icon: mdiFileDocumentEdit, text: "Services", route: "/services" },
      { icon: mdiGlassWine, text: "Wines", route: "/wines" },
      { icon: mdiEmail, text: "Contact", route: "/contact" },
    ],
  }),
};
</script>

<style scoped>
#link{
  color: white;
}
p {
  padding: 0;
  margin: 0;
  font-family: Playfair;
}
</style>
<template>
  <div>
    <v-footer id="background-grape" dark width="100%">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" md="4" lg="4">
            <v-card flat class="pa-2" id="background-grape">
              <p>Via G.D'Annunzio 28</p>
              <p>Biancade</p>
              <p>31056 Treviso (TV)</p>
              <p>Italia</p>
              <br />
              <p class="pa-1">
                <v-icon size="20">{{ mdiEmail }}</v-icon>
                <a
                  class="white--text mx-3"
                  href="mailto:info@convinientwines.com"
                  >info@convinientwines.com</a
                >
              </p>
              <p class="pa-1">
                <v-icon size="20">{{ mdiPhone }}</v-icon>
                <a class="mx-3 white--text" href="tel: (+39) 0422 844061"
                  >(+39) 0422 844061</a
                >
              </p>
              <p class="pa-1">
                <v-icon size="20">{{ mdiCellphoneAndroid }}</v-icon>
                <a class="mx-3 white--text" href="tel: (+39) 348 816 4092"
                  >(+39) 348 816 4092</a
                >
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="2" lg="2">
            <v-card flat class="pa-2" id="background-grape">
              <p class="py-2" v-for="link in pages" :key="link.text">
                <router-link class id="link" :to="`${link.route}`">
                  <v-icon size="20">{{ link.icon }}</v-icon>
                  <span class="mx-5" id="nav_link">{{ link.text }}</span>
                </router-link>
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="4">
            <v-card flat id="background-grape">
              <v-img
                src="/small-logo-text.png"
                lazy-src="/small-logo-text.png"
              ></v-img>
            </v-card>
            <v-row>
              <v-col id="playfair-regular" class="text-center">
                <span class="white--text" id="footer-text"
                  >Convinient Wines Italia di Gerard Leonelli</span
                >
                <br />
                <br />
                <a
                  id="policy_link"
                  target="_blank"
                  href="https://www.iubenda.com/privacy-policy/71430357/full-legal"
                  title="Privacy Policy"
                  >Privacy Policy</a
                >
                
                <a
                  id="policy_link"
                  target="_blank"
                  href="https://www.iubenda.com/privacy-policy/71430357/cookie-policy"
                  class="iubenda-black no-brand iubenda-embed iub-no-markup iub-body-embed"
                  title="Cookie Policy"
                  >Cookie Policy</a
                ></v-col
              >
            </v-row>
          </v-col>

          <v-col class="text-center" cols="12" sm="12" md="12" lg="12">
            <v-divider class="white"></v-divider>
            <v-card id="background-grape" flat class="pa-3">
              <span>copyright</span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { mdiCellphoneAndroid } from "@mdi/js";
import { mdiPhone } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { mdiInformationVariant } from "@mdi/js";
import { mdiFileDocumentEdit } from "@mdi/js";
import { mdiGlassWine } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
export default {
  data: () => ({
    mdiCellphoneAndroid,
    mdiPhone,
    mdiEmail,
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
#link {
  color: white;
}
p {
  padding: 0;
  margin: 0;
  font-family: Playfair;
}
a {
  text-decoration: none;
}
#policy_link {
  color: white;
  font-size: 13px;
  padding: 13px;
}
#footer-text{
  font-size: 15px;
}
</style>
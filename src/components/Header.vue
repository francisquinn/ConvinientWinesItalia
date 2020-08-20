<template>
  <nav>
    <!-- Large screen Laptop / Tablet -->
    <v-app-bar elevate-on-scroll app fixed color="white" v-if="`${this.$vssWidth}` > 600">
      <span>(Logo) {{this.$vssWidth}}</span>
      <v-spacer></v-spacer>
      <div class="pa-2" v-for="page in pages" :key="page.text">
        <router-link class  id="link" :to="`${page.route}`">
          <span  id="nav_link">{{page.text}}</span>
        </router-link>
      </div>
    </v-app-bar>

    <!-- Small screen Phone -->
    <v-app-bar app fixed color="white" elevate-on-scroll v-if="`${this.$vssWidth}` <= 600">
      <v-app-bar-nav-icon id="text-grape" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span>(Logo) {{this.$vssWidth}}</span>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer id="background-grape" temporary v-model="drawer" app>
      <v-list-item-title class="pa-3">
        <span class="white--text">(Logo)</span>
      </v-list-item-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="page in pages" :key="page.text" router :to="page.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title id="playfair-regular" class="white--text">{{page.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-card flat class="pa-2">
          <v-card-text class="text-center">
            <span id="date">
              {{ new Date().getFullYear() }} —
              <strong>(name of company)</strong>
            </span>
          </v-card-text>
        </v-card>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiHome } from '@mdi/js';
import { mdiInformationVariant } from '@mdi/js';
import { mdiFileDocumentEdit } from '@mdi/js';
import { mdiGlassWine } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
export default {
  data: () => ({
    drawer: false,
    pages: [
      { icon: mdiHome, text: "Home", route: "/" },
      { icon: mdiInformationVariant, text: "About", route: "/#about" },
      { icon: mdiFileDocumentEdit,  text: "Services", route: "/services" },
      { icon: mdiGlassWine, text: "Wines", route: "/wines" },
      { icon: mdiEmail, text: "Contact", route: "/contact" },
    ],
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style scoped>
#link{
  color: white;
  padding: 5px;
}
#nav_link{
  font-family: Playfair;
  color: #6f1d32;
}
#nav_link:hover{
  color: black;
}
.router-link-exact-active{
  font-weight: 700;
  border-bottom: 2px solid #6f1d32;
}
</style>
<template>
  <nav>
    <!-- Large screen Laptop / Tablet -->
    <v-app-bar
      scroll-threshold="500"
      elevate-on-scroll
      app
      fixed
      color="white"
      v-if="`${this.$vssWidth}` > 600"
    >
      <router-link id="logo-link" to="/">
        <v-img
          max-height="200"
          max-width="200"
          src="/small-logo-text-color.png"
          lazy-src="/small-logo-text-color.png"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </router-link>
      <v-spacer></v-spacer>
      <div class="pa-2">
        <router-link class id="link" exact to="/">
          <span id="nav_link">Home</span>
        </router-link>
        <router-link class id="link" to="/#about">
          <span id="nav_link">About</span>
        </router-link>
        <router-link class id="link" to="/services">
          <span id="nav_link">Services</span>
        </router-link>
        <router-link class id="link" to="/wines">
          <v-menu open-on-hover close-on-click close-on-content-click offset-y>
            <template v-slot:activator="{ on, attrs }">
              <span id="nav_link" v-bind="attrs" v-on="on">Wines</span>
            </template>
            <v-list dense v-for="wines in wine_links" :key="wines.id">
              <v-list-item>
                <v-list-item-title
                  ><router-link :to="`${wines.route}`">
                    <span id="nav_link">{{ wines.text }}</span>
                  </router-link></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </router-link>
        <router-link class id="link" to="/contact">
          <span id="nav_link">Contact</span>
        </router-link>
      </div>
    </v-app-bar>

    <!-- Small screen Phone -->
    <v-app-bar
      app
      fixed
      color="white"
      elevate-on-scroll
      v-if="`${this.$vssWidth}` <= 600"
    >
      <router-link id="logo-link" to="/">
        <v-img
          max-height="50"
          max-width="50"
          src="/logo.png"
          lazy-src="/logo.png"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        id="text-grape"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer
      right
      id="background-grape"
      temporary
      v-model="drawer"
      app
    >
      <v-list-item-title class="pa-3">
        <div>
          <router-link id="logo-link" to="/">
            <v-img src="/small-logo-text.png" lazy-src="/small-logo-text.png">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </router-link>
        </div>
      </v-list-item-title>
      <v-divider></v-divider>
      <!-- Start of Nav List -->
      <v-list dark>
        <!-- Home -->
        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon class="white--text">{{ mdiHome }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title id="playfair-regular" class="white--text"
              >Home</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <!-- About -->
        <v-list-item router to="/#about">
          <v-list-item-icon>
            <v-icon class="white--text">{{ mdiInformationVariant }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title id="playfair-regular" class="white--text"
              >About</v-list-item-title
            >
          </v-list-item-content>
          <!-- Services -->
        </v-list-item>
        <v-list-item router to="/services">
          <v-list-item-icon>
            <v-icon class="white--text">{{ mdiFileDocumentEdit }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title id="playfair-regular" class="white--text"
              >Services</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <!-- Wines -->
        <v-list-group  class="this.$vuetify.theme.dark" no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon class="white--text">{{ mdiGlassWine }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title id="playfair-regular" class="white--text"
                >Wines</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item class="white--text" router to="/wines/#region">
            <v-list-item-content>
              <v-list-item-title id="playfair-regular" class="white--text"
                >By region</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- Contact -->
        <v-list-item router to="/contact">
          <v-list-item-icon>
            <v-icon class="white--text">{{ mdiEmail }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title id="playfair-regular" class="white--text"
              >Contact</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-card id="background-grape" flat class="pa-2">
          <v-card-text class="text-center white--text">
            <span id="playfair-regular">
              {{ new Date().getFullYear() }} — Convinient Wines Italia
            </span>
          </v-card-text>
        </v-card>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiHome } from "@mdi/js";
import { mdiInformationVariant } from "@mdi/js";
import { mdiFileDocumentEdit } from "@mdi/js";
import { mdiGlassWine } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
export default {
  data: () => ({
    drawer: false,
    mdiHome,
    mdiInformationVariant,
    mdiFileDocumentEdit,
    mdiGlassWine,
    mdiEmail,
    wine_links: [
      { id: 1, text: "Special Offers", route: "/wines/specialoffers" },
      { id: 2, text: "By Region", route: "/wines/#region" },
      { id: 3, text: "Other Products", route: "/wines/#otherproducts" },
    ],
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style scoped>
.v-list-group--active{
  color: red;
}
#link {
  color: white;
  padding: 5px;
}
#logo-link {
  color: white;
  border: none;
}
a {
  text-decoration: none;
}
#nav_link {
  font-family: Playfair;
  color: #6f1d32;
  padding: 7px;
}
#nav_link:hover {
  color: black;
}
.router-link-exact-active {
  font-weight: 700;
  border-bottom: 2px solid #6f1d32;
}
.router-link-active {
  font-weight: 700;
  border-bottom: 2px solid #6f1d32;
}
</style>
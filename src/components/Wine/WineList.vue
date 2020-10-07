<template>
  <v-container class="region_anchor">
    <v-row class="pa-2">
      <v-col>
        <span id="playfair-regular-grape"><u>Wines by Region</u></span>
      </v-col>
    </v-row>
    <!--
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="4"
        v-for="wine_info in wines.wine_list"
        :key="wine_info.id"
      >
        <v-card data-aos="fade-up"  height="100%" class="pa-1">
          <v-row>
            <v-col class="text-center">
              <span id="playfair-regular-grape" class="pa-2">{{
                wine_info.region
              }}</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row v-for="wine_brand in wine_info.wines" :key="wine_brand.id">
            <v-col cols="1" sm="1" md="1" lg="1">
              <v-icon id="text-grape" size="20">{{ arrow }}</v-icon>
            </v-col>
            <v-col cols="11" sm="11" md="11" lg="11">
              <span id="playfair-regular">{{ wine_brand.name }}</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    -->
    <v-row data-aos="fade-up">
      <v-col>
        <stack :column-min-width="320" :gutter-width="10" :gutter-height="12">
          <stack-item  v-for="wine_info in wines.wine_list" :key="wine_info.id">
            <v-card class="pa-1">
              <v-row>
                <v-col class="text-center">
                  <span id="playfair-regular-grape" class="pa-2">{{
                    wine_info.region
                  }}</span>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row v-for="wine_brand in wine_info.wines" :key="wine_brand.id">
                <v-col cols="1" sm="1" md="1" lg="1">
                  <v-icon id="text-grape" size="20">{{ arrow }}</v-icon>
                </v-col>
                <v-col cols="11" sm="11" md="11" lg="11">
                  <span id="playfair-regular">{{ wine_brand.name }}</span>
                </v-col>
              </v-row>
            </v-card>
          </stack-item>
        </stack>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiChevronRight } from "@mdi/js";
import { Stack, StackItem } from "vue-stack-grid";
export default {
  components: { Stack, StackItem },
  props: {
    wines: {
      type: Object,
    },
  },
  data: () => ({
    arrow: mdiChevronRight,
  }),
};
</script>

<style scoped>
.region_anchor {
  position: relative;
  top: 70px;
  margin-top: -70px;
}
</style>
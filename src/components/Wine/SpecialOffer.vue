<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
          v-for="offer in offers.special_offers"
          :key="offer.id"
          data-aos="fade-right"
        >
          <v-card flat class="pa-2">
            <v-icon class="mx-1" id="text-grape" size="20">{{ arrow }}</v-icon>
            <span id="playfair-md-text">{{ offer.product }} </span>
            <span id="playfair-md-text"><span id="from_style">from</span> {{ offer.price }}</span>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="playfair-regular" class="grey--text text-center">
          <span>All prices are per bottle ex cellar - full pallets only.</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiChevronRight } from "@mdi/js";
export default {
  props: {
    offers: {
      type: Object,
    },
  },
  data: () => ({
    arrow: mdiChevronRight,
  }),
};
</script>

<style scoped>

#from_style {
  font-size: 12px;
  color: gray;
}
</style>
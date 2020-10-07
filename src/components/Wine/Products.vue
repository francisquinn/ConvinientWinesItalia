<template>
  <v-container>
    <v-row data-aos="fade-right" >
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="4"
        v-for="product in products.other_products"
        :key="product.id"
        
      >
        <v-card flat class="pa-2">
          <v-icon class="mx-1" id="text-grape" size="20">{{ arrow }}</v-icon>
          <span id="playfair-md-text">{{ product.name }} </span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiChevronRight } from "@mdi/js";
export default {
  props: {
    products: {
      type: Object,
    },
  },
  data: () => ({
    arrow: mdiChevronRight,
  }),
};
</script>

<style scoped>

</style>
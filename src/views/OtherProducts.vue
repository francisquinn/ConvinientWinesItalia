<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">Other Products</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Products :products="Data"></Products>
  </div>
</template>

<script>
import Products from "@/components/Wine/Products";
import Data from "../data/data";
export default {
  components: {
    Products,
  },
  data: () => ({
    Data,
  }),
};
</script>

<style>
</style>
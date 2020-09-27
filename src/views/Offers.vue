<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-card flat class="pa-2">
            <v-divider></v-divider>
            <span class="pa-3" id="playfair-semibold-it">Special Offers</span>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <SpecialOffer :offers="Data"></SpecialOffer>
  </div>
</template>

<script>
import SpecialOffer from "@/components/Wine/SpecialOffer";
import Data from "../data/data";
export default {
  components: {
    SpecialOffer,
  },
  data: () => ({
    Data,
  }),
};
</script>

<style>
</style>
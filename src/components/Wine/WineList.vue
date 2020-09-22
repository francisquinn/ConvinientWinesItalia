<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-card flat class="pa-2">
          <v-divider></v-divider>
          <span class="pa-3" id="playfair-semibold-it">Wines</span>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="green" >
      <v-col cols="12" sm="6" md="4" lg="4" v-for="wines in wines.wine_list" :key="wines.id">
        <v-card >
          {{wines.region}}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    wines: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
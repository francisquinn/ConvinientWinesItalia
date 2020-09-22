<template>
  <v-container>
      <v-row class="blue">
          <v-col cols="12" sm="6" md="4" lg="4" v-for="product in products.other_products" :key="product.id">
              <span>{{product.name}}</span>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
props: {
    products: {
      type: Object,
    },
  },
}
</script>

<style>

</style>
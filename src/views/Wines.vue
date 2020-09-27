<template>
  <div>
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
    </v-container>
    <div class="pa-0 my-0" id="region">
      <WineList :wines="Data"></WineList>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="pa-0 my-0" id="otherproducts">
      <OtherProducts :products="Data"></OtherProducts>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import WineList from "@/components/Wine/WineList";
import OtherProducts from "@/components/Wine/OtherProducts";
import Data from "../data/data";
export default {
  components: {
    WineList,
    OtherProducts,
  },
  data: () => ({
    Data,
  }),
};
</script>

<style scoped>
#region {
  padding: 0;
  margin: 0;
}
#otherproducts {
  padding: 0;
  margin: 0;
}
</style>
<template>
  <div>
    <WineList :wines="Data"></WineList>
    <br>
    <OtherProducts :products="Data"></OtherProducts>
  </div>
</template>

<script>
import WineList from "@/components/Wine/WineList";
import OtherProducts from "@/components/Wine/OtherProducts"
import Data from '../data/data'
export default {
  components: {
    WineList,
    OtherProducts
  },
  data: () =>({
    Data
  })
};
</script>

<style>
</style>
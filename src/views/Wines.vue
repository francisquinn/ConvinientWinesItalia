<template>
  <div>
    <WineTitle></WineTitle>
    <br>
    <WineList></WineList>
  </div>
</template>

<script>
import WineTitle from "@/components/Wine/WineTitle";
import WineList from "@/components/Wine/WineList";
export default {
  components: {
    WineTitle,
    WineList,
  },
};
</script>

<style>
</style>
<template>
  <div>
    <HomeTitle></HomeTitle>
    <br>
    <HomeTextDisplay></HomeTextDisplay>
    <div id="about">
      <About></About>
    </div>
    <br />
    <br />
    <br />
    <br />
    <HomeServices></HomeServices>
    <br>
    <HomeWines></HomeWines>
  </div>
</template>

<script>
import HomeTitle from "@/components/Home/HomeTitle";
import HomeTextDisplay from '@/components/Home/HomeTextDisplay'
import HomeServices from "@/components/Home/HomeServices";
import HomeWines from '@/components/Home/HomeWines'
import About from "@/components/About";
export default {
  name: "Home",
  components: {
    HomeTitle,
    HomeTextDisplay,
    HomeServices,
    HomeWines,
    About,
  },
};
</script>
<style scoped>
</style>

<template>
  <div>
    <HomeLogoTitle></HomeLogoTitle>
    <br>
    <HomeTextDisplay :info="Data"></HomeTextDisplay>
    <div id="about">
      <About :info="Data"></About>
    </div>
    <br />
    <br />
    <br />
    <br />
    <HomeServices :info="Data"></HomeServices>
    <br>
    <HomeWines :info="Data"></HomeWines>
  </div>
</template>

<script>
import HomeLogoTitle from "@/components/Home/HomeLogoTitle";
import HomeTextDisplay from '@/components/Home/HomeTextDisplay'
import HomeServices from "@/components/Home/HomeServices";
import HomeWines from '@/components/Home/HomeWines'
import About from "@/components/About";
import Data from "../data/data"
export default {
  name: "Home",
  components: {
    HomeLogoTitle,
    HomeTextDisplay,
    HomeServices,
    HomeWines,
    About
  },
  data: () => ({
    Data
  })
};
</script>
<style scoped>
#about {
  padding: 0;
  margin: 0;
}
</style>

<template>
  <div>
      <HomeLogoTitle></HomeLogoTitle>
      <br>
      <HomeTextDisplay :info="Data"></HomeTextDisplay>
      <br>
      <div class="pa-0 ma-0" id="about">
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
import HomeLogoTitle from '@/components/Home/HomeLogoTitle'
import HomeTextDisplay from '@/components/Home/HomeTextDisplay'
import About from '@/components/About'
import HomeServices from '@/components/Home/HomeServices'
import HomeWines from '@/components/Home/HomeWines'
import Data from '../data/data'
export default {
    components:{
        HomeLogoTitle,
        HomeTextDisplay,
        About,
        HomeServices,
        HomeWines
    },
    data: () => ({
        Data
    })

}
</script>

<style>

</style>
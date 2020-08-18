<template>
  <ServiceList :info="Data"></ServiceList>
</template>

<script>
import ServiceList from '@/components/ServiceList'
import Data from '../data/data'
export default {
  components: {
    ServiceList
  },
  data: () =>({
    Data
  })
}
</script>

<style>

</style>
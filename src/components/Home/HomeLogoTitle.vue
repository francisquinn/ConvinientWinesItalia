<template>
  <v-container fluid class="white">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card flat>
          <v-img src="/logo-text-white-color.png" lazy-src="/logo-text-white-color.png">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
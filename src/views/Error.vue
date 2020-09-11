<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card flat class="text-center">
          <span id="playfair-semibold-it-error">Page not found</span>
          <br />
          <br />
          <span id="playfair-regular">The page you have requested has not be found</span>
          <br />
          <br />
          <router-link id="link" tag="a" to="/">
            <v-btn id="lm_button" class="white--text">
              <span>Back to home page</span>
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
<style scoped>
</style>

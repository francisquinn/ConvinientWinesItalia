<template>
  <v-container class="pink">
    <v-row class="blue">
      <v-col class="text-center">
        <span>Contact us</span>
      </v-col>
    </v-row>

    <!-- Formspree contact form -->
    <form class="red pa-5" action="https://formspree.io/mdowjzol" method="POST">
      <v-row class="white">
        <v-col cols="12" sm="6" md="6" lg="6">
          <input id="name" autocomplete="off" type="text" name="name" placeholder="Full name *" required />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <input id="email" autocomplete="off" type="email" name="_replyto" placeholder="Email *" required />
        </v-col>
      </v-row>
      <v-row class="orange">
        <v-col>
          <textarea name="message" autocomplete="off" placeholder="Message *" required />
        </v-col>
      </v-row>
      
      <br />
      <br />
      <input type="text" name="_gotcha" style="display:none" />

      <input type="submit" value="Send" />
    </form>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  padding: 5px;
  border: 1px solid grey;
  border-radius: 2px;
  width: 100%;
  font-family: Playfair;
}
textarea {
  padding: 5px;
  border: 1px solid grey;
  border-radius: 2px;
  resize: none;
  width: 100%;
  height: 120px;
  font-family: Playfair;
}
</style>
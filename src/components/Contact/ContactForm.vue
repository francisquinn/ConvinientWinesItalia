<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-card flat class="pa-2">
          <v-divider></v-divider>
          <span class="pa-3" id="playfair-semibold-it">Contact</span>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>

    <!-- Formspree contact form -->
    <form
      data-aos="fade-up"
      class="pa-2"
      action="https://formspree.io/f/mrgobyok"
      method="POST"
    >
      <!-- Full name and email -->
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <input
            id="name"
            autocomplete="off"
            type="text"
            name="fullname"
            v-model="nameInput"
            v-on:input="emptyInput"
            placeholder="Full name *"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <input
            id="email"
            autocomplete="off"
            type="email"
            name="_replyto"
            v-model="emailInput"
            v-on:input="emptyInput"
            placeholder="Email *"
            required
          />
        </v-col>
      </v-row>
      <!-- Phone and company name -->
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <input
            id="phone"
            autocomplete="off"
            type="number"
            name="phone"
            v-model="phoneInput"
            v-on:input="emptyInput"
            placeholder="Phone number *"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <input
            id="company"
            autocomplete="off"
            type="text"
            name="company"
            v-model="companyInput"
            v-on:input="emptyInput"
            placeholder="Company name *"
            required
          />
        </v-col>
      </v-row>
      <!-- Enquirer -->
      <v-row>
        <v-col>
          <select name="enquirer" v-model="selectedText" id="enquirer" required>
            <option value="" disabled selected>Enquirer profile *</option>
            <option v-for="enq in enquirer" :key="enq.value" :value="enq.value">
              {{ enq.text }}
            </option>
          </select>
        </v-col>
      </v-row>
      <!-- Other, optional -->
      <v-row v-show="this.selectedText == 'Other'">
        <v-col>
          <input
            id="other"
            autocomplete="off"
            type="text"
            name="enquirer"
            placeholder="Please specify"
          />
        </v-col>
      </v-row>
      <!-- Message -->
      <v-row>
        <v-col>
          <textarea
            name="message"
            autocomplete="off"
            v-model="messageInput"
            v-on:input="emptyInput"
            placeholder="Message *"
            required
          />
        </v-col>
      </v-row>
      <br />
      <!-- Privacy policy -->
      <input type="checkbox" id="policy" name="privacy_policy" required />
      <label id="playfair-regular" for="vehicle1">
        I've read and accept the
        <a
          id="text-grape"
          href="https://www.iubenda.com/privacy-policy/71430357/full-legal"
          target="_blank"
          >Privacy Policy</a
        >
        *</label
      >
      <br />
      <br />
      <br />
      <!-- Send button -->
      <input type="text" name="_gotcha" style="display: none" />
      <v-btn
        :disabled="button_disable"
        type="submit"
        id="send_button"
        class="pa-2 white--text"
      >
        <input type="submit" value="Send" />
        <v-icon class="mx-2" size="18">{{ send }}</v-icon>
      </v-btn>
    </form>
  </v-container>
</template>

<script>
import { mdiSend } from "@mdi/js";
export default {
  data: () => ({
    send: mdiSend,
    nameInput: "",
    emailInput: "",
    phoneInput: "",
    companyInput: "",
    messageInput: "",
    button_disable: true,
    enquirer: [
      { value: "Private individual", text: "Private individual" },
      { value: "Wine Importer", text: "Wine Importer" },
      { value: "Restaurant", text: "Restaurant" },
      { value: "Supermarket", text: "Supermarket" },
      { value: "Cash & Carry", text: "Cash & Carry" },
      { value: "Other", text: "Other" },
    ],
    selectedText: "",
  }),
  methods: {
    emptyInput: function () {
      if (this.nameInput == "") {
        this.button_disable = true;
      } else if (this.emailInput == "") {
        this.button_disable = true;
      } else if (!this.emailInput.includes("@")) {
        this.button_disable = true;
      } else if (this.messageInput == "") {
        this.button_disable = true;
      } else {
        this.button_disable = false;
      }
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="email"],
input[type="number"] {
  padding: 5px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  width: 100%;
  font-family: Playfair;
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
#policy {
  border: 1px solid #d7d7d7;
  cursor: pointer;
  color: red;
}
select {
  padding: 5px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  width: 100%;
  font-family: Playfair;
  outline: none;
  color: grey;
}
option[value=""][disabled] {
  display: none;
}
option {
  padding: 5px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  width: 100%;
  font-family: Playfair;
  outline: none;
  color: grey;
}
textarea {
  padding: 5px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  resize: none;
  width: 100%;
  height: 120px;
  font-family: Playfair;
  outline: none;
}
#send_button {
  background-color: #6f1d32;
  font-family: Playfair;
}
</style>
<template>
  <v-container>
    <v-row data-aos="fade-up" id="playfair-regular">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card flat>
          <div class="pa-2">
            <v-icon id="text-grape">{{ email }}</v-icon>
            <a
              id="contact_link"
              class="mx-5"
              href="mailto:info@convinientwines.com"
              >info@convinientwines.com</a
            >
          </div>
          <div class="pa-2">
            <v-icon id="text-grape">{{ phone }}</v-icon>
            <a id="contact_link" class="mx-5" href="tel: (+39) 0422 844061"
              >(+39) 0422 844061</a
            >
          </div>
          <div class="pa-2">
            <v-icon id="text-grape">{{ cell }}</v-icon>
            <a id="contact_link" class="mx-5" href="tel: (+39) 348 816 4092"
              >(+39) 348 816 4092</a
            >
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card id="text-grape" class="pa-2" flat>
          <p>Via G.D'Annunzio 28</p>
          <p>Roncade</p>
          <p>31056 Treviso (TV)</p>
          <p>Italia</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCellphoneAndroid } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiPhone } from "@mdi/js";
export default {
  data: () => ({
    cell: mdiCellphoneAndroid,
    email: mdiEmail,
    phone: mdiPhone,
  }),
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
#contact_link {
  color: #6f1d32;
}
a {
  text-decoration: none;
}
</style>
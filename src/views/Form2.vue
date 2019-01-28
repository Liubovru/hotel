<template>
  <div id="content">
    <v-app dark>
      <div class="form-wrapper">
        <div class="text-xs-center" v-if="submitted">
          <h2>Thank you for your comments</h2>
          <div class="details text-xs-left">
            <h3 class="red--text">Details</h3>
            <p>
              <span style="{color:#fff;}"><strong>Name:</strong></span>
              {{ name }}
            </p>
            <p><strong>E-mail:</strong> {{ email }}</p>
            <p><strong>Textarea:</strong> {{ textarea }}</p>
          </div>
          <v-btn large dark color="#a50000" to="/">Go to homepage</v-btn>
        </div>

        <v-form v-else v-model="valid" class="testimon">
          <v-text-field
            label="Name"
            required
            :rules="nameRules"
            v-model="name"
            color="red"
          ></v-text-field>

          <v-text-field
            label="Email"
            required
            :rules="emailRules"
            v-model="email"
            color="red"
          ></v-text-field>

          <v-textarea
            label="Textarea"
            required
            :rules="textareaRules"
            v-model="textarea"
            color="red"
          ></v-textarea>

          <v-btn large dark color="#a50000" @click="submit" :disabled="!valid"
            >Submit</v-btn
          >
        </v-form>
      </div>
    </v-app>
  </div>
</template>
//...
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      text: "",
      submitted: false,
      valid: true,
      nameRules: [
        name => !!name || "Name is required",
        name => name.length > 2 || "Name must be longer than 2 characters"
      ],
      emailRules: [
        email => !!email || "Email is required",
        email =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
          "Email must be valid"
      ],
      textareaRules: [
        textarea => !!textarea || "Text is required",
        textarea =>
          textarea.length > 7 || "Text should be at least 7  characters"
      ]
    };
  },

  methods: {
    submit() {
      //this.$store.dispatch("clearFavorites");
      this.submitted = true;
    }
  }
};
</script>

<style lang="scss">

.form-wrapper {
  //padding: 40px;
  text-align: center;
}
/*.theme--dark.v-input input,
.theme--dark.v-input textarea {
  color: rgba(252, 251, 251, 0.87) !important;
}*/
.v-text-field input {
  color: #fff !important;
}

.theme--dark.application {
  background: #2b1e15 !important;
}
</style>

<template>
  <div id="content">
    <div class="form-wrapper">
      <div class="text-xs-center" v-if="submitted">
        <h2>Thank you for you interest, we will contact you soon</h2>
        <div class="details text-xs-left">
          <h3 class="blue-grey--text">Customer details</h3>
          <p>
            <span style="{color:#fdfdfd;}"><strong>Name:</strong></span>
            {{ name }}
          </p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Phone:</strong> {{ phone }}</p>
        </div>
        <v-btn to="/">Go to homepage</v-btn>
      </div>

      <v-form v-else v-model="valid">
        <v-text-field
          label="Name"
          required
          :rules="nameRules"
          v-model="name"
          background-color="#2b1e15"
          dark
        ></v-text-field>

        <v-text-field
          label="Email"
          required
          :rules="emailRules"
          v-model="email"
          background-color="#2b1e15"
          dark
        ></v-text-field>

        <v-text-field
          label="Phone"
          required
          :rules="phoneRules"
          mask="(###) ### - ####"
          v-model="phone"
          background-color="#2b1e15"
          dark
        ></v-text-field>
        <v-textarea
          name="text"
          label="Your testimonial text"
          :rules="textRules"
          background-color="#2b1e15"
          dark
        ></v-textarea>

        <v-btn dark @click="submit" :disabled="!valid">Submit</v-btn>
      </v-form>
    </div>
  </div>
</template>
//...
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
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
      phoneRules: [
        phone => !!phone || "Phone is required",
        phone => phone.length >= 7 || "Phone number should be at least 7 digits"
      ],
      textRules: [
        text => !!text || "Text field Must not be empty!",
        text => text.length > 2 || "Text must be longer than 2 characters"
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

.v-text-field input {
  color: #fff !important;
  padding: 20px !important;
}
.details {
  //padding-top: 30px;
}
h3 {
  //padding-bottom: 20px;
}
</style>

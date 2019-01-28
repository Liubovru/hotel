<template>
  <!-- content -->
  <div id="content">
    <div class="content">
      <h3>Reservation:</h3>
      <v-form>
        <v-layout row>
          <v-flex>
            <v-layout row
              ><v-flex xs12 sm6 md2
                ><v-menu
                  :close-on-content-click="false"
                  v-model="menu2"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Chek In"
                    prepend-icon="event"
                    readonly
                    dark
                  ></v-text-field>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false;"
                    color="#c30000"
                  ></v-date-picker> </v-menu
              ></v-flex>
              <v-flex xs12 sm6 md2
                ><v-menu
                  :close-on-content-click="false"
                  v-model="menu1"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Check Out"
                    prepend-icon="event"
                    readonly
                    dark
                  ></v-text-field>
                  <v-date-picker
                    v-model="date"
                    @input="menu1 = false;"
                    color="#c30000"
                  ></v-date-picker> </v-menu
              ></v-flex>
              <v-spacer></v-spacer>
            </v-layout>
            <v-text-field
              label="Persons"
              type="number"
              required
              :rules="personsRules"
              v-model="persons"
              flat
              dark
              color="red"
            ></v-text-field>
          </v-flex>
          <v-text-field
            label="Rooms"
            type="number"
            required
            :rules="roomssRules"
            v-model="rooms"
            flat
            dark
            color="red"
          ></v-text-field>
          <v-btn large dark color="#a50000" to="/">Go to homepage</v-btn>
        </v-layout></v-form
      >
    </div>
    <div class="indent">
      <h2>FiveStar is happy to welcome you!</h2>
      <div class="container__section">
        <div>
          <img class="img-main" alt="" src="../assets/1page-img1.png" />
        </div>
        <div>
          <p class="alt-top">
            Come alone or bring your family with you, stay here for a night or
            for weeks, stay here while on business trip or at some kind of
            conference - either way our hotel is the best possible variant.
          </p>
          Feel free to contact us anytime in case you have any questions or
          concerns.
        </div>
      </div>
      <div class="container__section">
        <div class="col__1">
          <h3>Special Offers</h3>
          <ul class="offers__list">
            <li>
              <i class="material-icons" style="font-size:6px;color:red"
                >fiber_manual_record</i
              >FREE wide-screen TV
            </li>
            <li>
              <i class="material-icons" style="font-size:6px;color:red"
                >fiber_manual_record</i
              >50% Discount for Restaraunt service
            </li>
            <li>
              <i class="material-icons" style="font-size:6px;color:red"
                >fiber_manual_record</i
              >30% Discount for 3 days+ orders
            </li>
            <li>
              <i class="material-icons" style="font-size:6px;color:red"
                >fiber_manual_record</i
              >FREE drinks and beverages in rooms
            </li>
            <li>
              <i class="material-icons" style="font-size:6px;color:red"
                >fiber_manual_record</i
              >Exclusive souvenirs
            </li>
          </ul>
          <div class="button center">
            <span
              ><span><a href="#">Order Now!</a></span></span
            >
          </div>
        </div>
        <div class="col__2">
          <h3>Location</h3>
          <p>
            We are located in the center of Prague surrounded by malls and
            boutiques.
          </p>
          <ul class="contacts__list">
            <li>Gazek st., 210</li>
            <li>1-800-412-4556</li>
            <li>1-800-542-6448</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    menu1: false,
    text: "",
    name: "",
    email: "",
    phone: "",
    persons: "1",
    rooms: "1",
    submitted: false,
    valid: true
  })
};
</script>

<style lang="scss" scoped>
.col__1 {
  width: 50%;
  display: block;
}

.offers__list {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-bottom: 20px;
}

.material-icons {
  padding-right: 10px;
}

.contacts__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.img-main {
  margin-left: 10px;
  width: 166px;
  height: 109px;
  margin: 0;
}
</style>

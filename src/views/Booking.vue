<template>
  <div>
    <div id="content">
      <div class="content">
        <div class="inner"><h3>Reservation:</h3></div>

        <v-app id="inspre">
          <v-form>
            <v-container fluid class="reserve">
              <v-layout align-center justify-space-between row fill-height wrap>
                <v-flex xs12 sm4 md3>
                  <v-menu
                    :close-on-content-click="false"
                    v-model="menu2"
                    lazy
                    transition="scale-transition"
                    full-width
                    offset-y
                    min-width="200px"
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
                <v-flex xs12 sm4 md3
                  ><v-menu
                    :close-on-content-click="false"
                    v-model="menu1"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="200px"
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
                <v-flex xs12 sm1>
                  <v-text-field
                    label="Adults"
                    type="number"
                    required
                    :rules="adultsRules"
                    v-model="adults"
                    flat
                    dark
                    color="red"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm1>
                  <v-text-field
                    label="Children"
                    type="number"
                    required
                    :rules="childrenRules"
                    v-model="children"
                    flat
                    dark
                    color="red"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm1>
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
                </v-flex>
               
              </v-layout>
                             <v-flex xs12 sm1 md3>
                  <v-btn large dark color="#a50000" to="/"
                    >Check Availability</v-btn
                  >
                </v-flex>
            </v-container>
          </v-form>
        </v-app>
      </div>
      <div class="indent">
        <h2>Our location</h2>
        <div class="location">
          <img
            alt="mainFoto__hotel"
            src="../assets/5page-img1.png"
            class="foto__hotel"
          />
          <div class="location hotel">
            <p>
              We are located in the center of Prague surrounded by malls and
              boutiques, restaurants and luxurious shops.
            </p>
            <p>Please feel free to come visit us at the following adress:</p>
            <ul class="contacts__list">
              <li>Gazek st., 210</li>
              <li>1-800-412-4556</li>
              <li>1-800-542-6448</li>
            </ul>
          </div>
        </div>
        <div id="mapid"><GoogleMap /></div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";

export default {
  name: "Booking",
  components: {
    GoogleMap
  },
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
    adults: "1",
    children: "1",
    rooms: "1",
    submitted: false,
    valid: true
  })
};
</script>

<style lang="scss" scoped>
$breakpoint-small: 576px;
$breakpoint-medium: 768px;
@mixin small {
  @media screen and (max-width: $breakpoint-small) {
    @content;
  }
}
@mixin medium {
  @media screen and (max-width: $breakpoint-medium) {
    @content;
  }
}
.foto__hotel {
  margin-right: 10px;
  width: 160px;
  height: 107px;
}

.location {
  display: flex;
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}

.hotel {
  display: flex;
  flex-direction: column;
}

.contacts__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}

#inspre {
  background-color: #1d110b !important;
  height: 200px;
  border: 1px solid #fff;
  flex-wrap: wrap;
  @include small {
    display: flex;
    flex-wrap: wrap;
    height: 500px;
  }
}

.reserve {
  display: flex;
  flex-wrap: wrap;
}

  </style>

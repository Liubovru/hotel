<template>
  <!-- content -->
  <div id="content">
    <div class="content">
      <div class="box maxheight">
        <div class="inner">
          <h3>Reservation:</h3>
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
                            <v-flex xs12 sm1 md3 >
                  <v-btn large dark color="#a50000" to="/"
                    >Check Availability</v-btn
                  >
                </v-flex>
            </v-container>
          </v-form>
        </v-app>
        </div>
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
  </div>
</template>

<script>

export default {
  name: "Booking",
  
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
$breakpoint-small: 600px;
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

.container__section {
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}

.center {
  @include small {
    margin-bottom: 20px;
  }
}
</style>

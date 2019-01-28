<template>
  <div id="content">
    <div class="gallery">
      <ul class="gallery__list">
        <li>
          <a href="#"
            ><img class="gallery__small" alt="" src="../assets/2page-img1.jpg"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img class="gallery__small" alt="" src="../assets/2page-img2.jpg"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img class="gallery__small" alt="" src="../assets/2page-img3.jpg"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img class="gallery__small" alt="" src="../assets/2page-img4.jpg"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img class="gallery__small" alt="" src="../assets/2page-img5.jpg"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img class="gallery__small" alt="" src="../assets/2page-img6.jpg"
          /></a>
        </li>
      </ul>
    </div>
    <div class="container__section2 wrap--flex">
      <div class="services">
        <h3>Other Services</h3>
        <p>In addition to housing we also offer</p>
        <ul class="services__list">
          <li class="services__item">
            <img alt="" src="../assets/2page-img7.jpg" class="img__service" />

            Premium food (either at our restaraunt or delivered to your room)
          </li>
          <li class="services__item">
            <img alt="" src="../assets/2page-img8.jpg" class="img__service" />
            Drinks and bevarages in your rooms
          </li>
          <li class="services__item">
            <img alt="" src="../assets/2page-img9.jpg" class="img__service" />
            Daily cleaning (included into your package)
          </li>
          <li class="services__item">
            <img
              alt=""
              src="../assets/2page-img10.jpg"
              class="img__service"
            />Free access to our gym and swimming pool
          </li>
        </ul>
      </div>
      <div class="indent min--width">
        <h2>We offer several kinds of rooms</h2>
        <ul class="description__list">
          <li class="description__item">
            <img alt="" src="../assets/2page-img12.jpg" class="room" />
            <div>
              <h6>Deluxe Room</h6>
              <p> Newly renovated, 20% restaurant discount, 55-inch TV, minibar, marble bathroom.</p>
              
              <v-expansion-panel >
                 <v-expansion-panel-content
         expand-icon="mdi-menu-down" class="exp__header"
      >
        <div slot="header">
          read more...
        </div>
        <v-card color="#2b1e15"
        dark>
          The King Deluxe Guest Room has a fresh and stylish design, highlighted by Art Deco elements such as the headboard, reading lamp, and bedside lighting. Unwind after a busy day in a relaxation corner perfectly positioned by the window. The separate working desk with a built-in USB socket makes keeping up with work and family quick and easy.
Special touches include bathrobes and slippers, complimentary water per stay and voucher for 20% discount from bar and restaurant consumption (excluding special events).
Enjoy the 55-inch TV, minibar that serves as a cooling drawer, and wardrobe with a built-in light. The fully renovated marble bathroom features a large walk-in shower and wall-sized anti-fog heated mirror. Sleeps 2 adults.
        </v-card> 
      </v-expansion-panel-content>
      </v-expansion-panel>
      
            </div>
            <div class="button rooms">
              <span
                ><span
                  ><a
                    href="#"
                    onclick="document.getElementById('reservation-form').submit()"
                    ><router-link to="/Booking"> order now!</router-link></a
                  ></span
                ></span
              >
            </div>
          </li>
          <li class="description__item">
            <img alt="" src="../assets/2page-img13.jpg"  width="195px" class="room" />
            <div>
              <h6>Superior Room</h6>
              <p>Newly renovated spacious room, 55-inch TV, cooling drawer, marble bathroom.</p>
              <v-expansion-panel >
                 <v-expansion-panel-content
         expand-icon="mdi-menu-down" class="exp__header"
      >
        <div slot="header">
          read more...
        </div>
        <v-card color="#2b1e15"
        dark>
          Choose this spacious corner room with two large windows and a sofa, plenty of natural light and great city views. Work in comfort at the desk with built-in USB sockets, check your emails with Wi-Fi (fees apply) or unwind on a king-sized bed while watching the 55-inch flat-screen TV.
Refresh yourself with a drink from the minibar that serves as a cooling drawer. The fully renovated marble bathroom features a large walk-in shower and wall-sized anti-fog heated mirror. Sleeps 4. </v-card> 
      </v-expansion-panel-content>
      </v-expansion-panel>
            </div>
            <div class="button rooms">
              <span
                ><span
                  ><a
                    href="#"
                    onclick="document.getElementById('reservation-form').submit()"
                    ><router-link to="/Booking"> order now!</router-link></a
                  ></span
                ></span
              >
            </div>
          </li>
          <li class="description__item">
            <img alt="" src="../assets/2page-img14.jpg" class="room" />
            <div>
              <h6>Junior Suite</h6>
              <p>Separate living area, 40 sq.m., Executive Lounge access, sofa</p>
              <v-expansion-panel>
                 <v-expansion-panel-content
         expand-icon="mdi-menu-down" class="exp__header"
        
      >
        <div slot="header">
          <div>
            read more...
          
          </div>
        </div>
        <v-card
        color="#2b1e15"
        dark>
         Indulge yourself in this spacious junior suite with a separate seating area, one king bed and opening windows.
Executive level guests enjoy exclusive access to the hotel's Executive Lounge, serving complimentary continental breakfast, drinks and snacks throughout the day plus private check-in and check-out.
Work in comfort at the desk, keep in touch with WiFi (fees apply) or watch the 55-inch TV. Special touches include two complimentary bottles of water, bathrobes and slippers. Sleeps 4.</v-card> 
      </v-expansion-panel-content>
      </v-expansion-panel>
            </div>
            <div class="button rooms">
              <span
                ><span
                  ><a
                    href="#"
                    onclick="document.getElementById('reservation-form').submit()"
                    ><router-link to="/Booking"> order now!</router-link></a
                  ></span
                ></span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
.gallery {
  overflow: hidden;
}
.gallery__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.gallery__small {
  border: 5px solid #e7e7e7;
  margin: 0 5px;
}

.services {
  width: 236px;
  background-color: #1d110b;
  text-align: center;
  padding: 20px;
  margin-right: 50px;
  @include small {
    margin-right: 20px;
  }
}

.services__list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.services__item {
  display: flex;
  text-align: left;
  margin-bottom: 20px;
  flex: 0 1 auto;
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}

.img__service {
  width: 61px;
  height: 61px;
  margin-right: 10px;
  @include small {
    margin-bottom: 10px;
  }
}

.container__section2 {
  display: flex;
  padding: 20px 0;
}

.min--width {
  max-width: 600px;
}

.description__list {
  list-style-type: none;
  margin: 0 !important;
  padding: 0 !important;
}

h6 {
  font-size: 1em;
  color: #e7e7e7;
  font-weight: bold;
  margin: 0;
}

.description__item {
  display: flex;
  justify-content: space-between;
  align-items: top;
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}

.rooms {
  margin-left: 10px;
  display: flex;
  align-items: center;
  @include small {
  margin-bottom: 20px;
  }
}

.room {
  border: 5px solid #fff;
  margin: 0 10px 10px 0;
  width: 195px;
  height: 133px;
  flex-shrink: 0;
  }

  .exp__header {
    display: block;
    width: 100%;
    height: 100%;

.v-expansion-panel__header {
  background: #2b1e15;
  color: #fff;
  padding: 0;
}
  }


</style>

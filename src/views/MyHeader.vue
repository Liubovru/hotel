<template>
  <div>
    <!-- header -->
    <header class="header">
      <div class="container__head row--1">
        <div class="logo">
          <span class="logo__first">Hotel</span>
          <h1><a href="index.html" class="logo__link">Five Star</a></h1>
          <span class="logo__third"> True Luxury</span>
        </div>
        <div class="phones">
          {{ tel1 }}<br />
          {{ tel2 }}
        </div>
      </div>
      <div class="container__head ">
        <!-- header-box begin -->
        <div class="header__box">
          <v-toolbar class="transparent nav pb-0 pl-0">
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn
                flat
                dark
                class="ml-1  nav__item--btn "
                v-for="item in menu"
                :key="item.icon"
                :to="item.link"
                active-class=".btn_active"
                :class="item.link === $route.path ? 'btn_active' : ''"
                >{{ item.title }}</v-btn
              >
            </v-toolbar-items>

            <v-menu class="hidden-md-and-up">
              <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
              <v-list>
                <v-list-tile
                  v-for="item in menu"
                  :key="item.icon"
                  :to="item.link"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-toolbar>
        </div>
        <!-- header-box end -->
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      tel1: "1-800-412-45-56",
      tel2: "1-800-542-64-48",
      menu: [
        { icon: "home", title: "Home", link: "/" },
        { icon: "info", title: "Services", link: "/Services" },
        { icon: "error", title: "Gallery", link: "/Gallery" },
        { icon: "sucsess", title: "Restaurant", link: "/Restaurant" },
        { icon: "crash", title: "Testimonials", link: "/Testimonials" },
        { icon: "warning", title: "Booking", link: "/Booking" }
      ],
      methods: {
        menuItems() {
          return this.menu;
        },
        activeFilter() {
          //var btnContainer = document.getElementById("myDIV");

          // Get all buttons with class="btn" inside the container
          //const btns = btnContainer.getElementsByClassName("nav__item--btn");
          console.log("Me Here");

          //alert("YYEEEE!!!!");
          // Loop through the buttons and add the active class to the current/clicked button
          /*for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  }); 
} */
        }
      }
      //bgImage: "../assets/header-bg1.jpg"
    };
  }
};
</script>

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
.header {
  background-repeat: no-repeat;
  padding: 0 !important;
  margin: 0;

  .v-toolbar__content {
    padding-left: 0;
    padding-right: 0;
  }
}
.container__head {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 !important;
}

.row--1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  @include small {
    padding-left: 5px;
    padding-right: 5px;
  }
}

.logo__link {
  color: #c30000;
  font-size: 60px;
  text-decoration: none;
  @include small {
    font-size: 40px;
  }
}

.logo__first {
  color: #bca695;
  font-size: 16px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-style: normal;
  padding-left: 5px;
}

.logo__third {
  color: #ad0000;
  font-size: 0.91em;
  padding-left: 5px;
}

.phones {
  color: #c30000;
  font-size: 25px;
  line-height: 1em;
  @include small {
    font-size: 20px;
  }
}

.header__box {
  height: 364px;
  background: #37271c;
  border: 5px solid #e7e7e7;
  background-image: url("https://uploads.codesandbox.io/uploads/user/c3639c5f-7b20-4785-8194-3687bc6cfdff/Q6z0-header-bg1.jpg");
  background-repeat: no-repeat;
  /*background-image: url("../assets/header-bg1.jpg");*/
}

/*.nav {
  padding-top: 286px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  justify-content: space-between;
}
*/
.nav {
  padding-top: 286px !important;
}
.nav__list {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.nav__item--btn {
  width: 154px;

  min-width: 110px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(207, 205, 205, 0.363);
}

.nav__item--btn {
  display: block;
  line-height: 52px;
  font-size: 16px !important;
  text-transform: uppercase;
  font-weight: bold !important;
  color: #fff;
  text-decoration: none;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(207, 205, 205, 0.363);

  &:hover,
  active {
    border: 1px solid #df0000;
  }
}
.btn_active {
  background-color: #a50000;
  border: 1px solid #df0000;
}

.head__mobile logo__link{
  font-size: 32px;
}
</style>

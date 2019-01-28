<template>
  <div>
    <!-- header -->
    <header class="header">
      <div class="container__head row--1">
        
        <div class="logo">
          <span class="logo__first">Hotel</span>
          <v-card-text :fullscreen="$vuetify.breakpoint.xsOnly"><h1><a href="index.html" class="logo__link">Five Star</a></h1></v-card-text>
          <span class="logo__third"> True Luxury</span>
        </div>
        <div class="phones">
          {{ tel1 }}<br />
          {{ tel2 }}
        </div>
       <div class="left__menu--mobile"><Menu /></div>
      </div>
      <div class="container__head ">
        <!-- header-box begin -->
       <div class="header__box">  
        <Menu />
        </div>
        <!-- header-box end -->
      </div>
    </header>
  </div>
</template>
<script>
import Menu from "../components/Menu";
export default {
  name: "MyHeader",
  components: {
        Menu
    },
  data() {
    return {
      tel1: "1-800-412-45-56",
      tel2: "1-800-542-64-48"
    } 
  }  
}; 
</script>

<style lang="scss">
$breakpoint-small: 578px;
$breakpoint-medium: 768px;
@mixin small {
  @media screen and (max-width: $breakpoint-small) {
    @content;
  }
}@mixin medium {
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
     @include small{
        margin: 20px 15px;
        padding: 0 15px;
    } 
}

.row--1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
       @include small{
        height: 100px;
        padding: 20px 15px;
    } 
  
}

.logo__link {
  color: #c30000;
  font-size: 60px;
  text-decoration: none;
  white-space: nowrap;
   @include small{
     line-height: 0.75em !important;
        font-size: 52px;
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
  line-height: 0.75em !important;
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
     @include small{
        font-size: 18px;
        display: none;
    } 
}
.left__menu--mobile {
  display: none;
  @include small{
    display: block;
        color: #fff;
    } 
}
.header__box {
  height: 364px;
  background: #37271c;
  border: 5px solid #e7e7e7;
  background-image: url("https://uploads.codesandbox.io/uploads/user/c3639c5f-7b20-4785-8194-3687bc6cfdff/Q6z0-header-bg1.jpg");
 background-repeat: no-repeat;
  @include small{
    display: none;
    border: none;
    background-image:none;
    }
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
.nav__item--btn {
  width: 154px;
  height: 52px;
  font-size: 16px !important;
  text-transform: uppercase;
  font-weight: bold !important;
  color: #fff;
  text-decoration: none;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(207, 205, 205, 0.363);
  top: 288px;
  
&:hover, active {
  
  border: 1px solid #df0000;
  
}
}
.btn_active {
  background-color: #a50000;
  border: 1px solid #df0000;
}
</style>

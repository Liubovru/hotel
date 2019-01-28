<template>
  <div>
    <MyHeader />

    <!-- отображаем тут компонент, для которого совпадает маршрут -->
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import MyHeader from "./views/MyHeader";
import MyFooter from "./components/MyFooter";
//import GoogleMap from "./components/GoogleMap";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter
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
* {
  box-sizing: border-box;
}
 

html,
body {
  width: 100%;
  min-height: 100vh;
}

body {
  display: flex;
  flex-direction: column;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 14px;
  line-height: 1.4em;
  color: #bca695 !important;
  background: #37271c;
  //max-width: 976px;
}
h1,
h2,
h3 {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  color: #c30000;
  font-weight: normal;
  line-height: 1em;
}

h1 {
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin: 0;
   @include small {
    font-size: 40px;
  }
}

h2 {
  font-size: 30px;
  margin-bottom: 12px;
  letter-spacing: -1px;
  @include small {
    font-size: 25px;
  }
}

h3 {
  font-size: 25px;
  margin-bottom: 16px;
  @include small {
    font-size: 20px;
  }
}

/*--content--*/
#content {
  background-color: #2b1e15 !important;
  margin: 0 auto;
  padding: 20px;
  max-width: 960px;
}

#reservation-form fieldset {
  display: flex;
  border: none;
  background-color: #1d110b;
  border: 1px solid #bca695;
  justify-content: space-between;
  align-items: center;
  font-size: 0.91em;
  font-weight: bold;
  padding: 20px 10px;
}

.button a {
  display: inline-block;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  background-color: #a50000;
  border: 1px solid #df0000;
  padding: 10px 15px;
  color: #d5c6bb;
}

.button a:hover {
  text-decoration: underline;
}

#reservation-form select {
  border: 1px solid #5d3825;
  background: #1d110b;
  color: #bca695;
}

.indent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0 20px 0 !important;
}

.center {
  margin-left: 50px;
}

.container__section {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

#app {
  font-family: "Trebuchet MS", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
}
</style>

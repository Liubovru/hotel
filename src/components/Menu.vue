<template>
<div>
        <v-toolbar flat  class="transparent" >
                 <v-toolbar-items  class="hidden-sm-and-down">
            <v-btn dark flat class="ml-1  nav__item--btn"  
             
            v-for="item in menu" :key="item.icon" :to="item.link"
               active-class= ".btn_active"
    :class="item.link === $route.path ? 'btn_active' : ''" 
            >{{
              item.title
            }}</v-btn> 
          </v-toolbar-items>
          <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon large size="24px" slot="activator"></v-toolbar-side-icon>
            <v-list>
              <v-list-tile v-for="item in menu" :key="item.icon" :to="item.link">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu> 
        </v-toolbar>
        </div>
        </template>

        <script>

export default {
    name: 'Menu',
    data() {
            return {
         menu: [
        { icon: "home", title: "Home" , link: "/" },
        { icon: "info", title: "Services" , link: "/Services" },
        { icon: "error", title: "Gallery" , link: "/Gallery" },
        { icon: "sucsess", title: "Restaurant" , link: "/Restaurant" },
        { icon: "crash", title: "Testimonials" , link: "/Testimonials" },
        { icon: "warning", title: "Booking", link: "/Booking" }
        
      ],
      methods: {
        menuItems() {
          return this.menu;
        }
      }
    };
  }
}; 
</script>
<style lang="scss">
</style>
        
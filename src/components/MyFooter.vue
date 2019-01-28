<template>
 <div id="footer">
  
    <v-footer
      dark
      height="auto"
    >
      <v-card
        color="#37271c"
        flat
        tile
        width="100%"
        class=" white--text text-xs-center"
      >
        <v-card-text> 
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. 
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          Copyright&copy;2019 — <strong> FiveStar Hotel</strong>
        </v-card-text>
      </v-card>
    </v-footer>
 
</div>
 </template>


<script>

export default {
  name: "MyFooter",
   data() {
    return {
       icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
    } 
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
#footer {
  font-family: Arial, Helvetica, sans-serif;
  width:100%;
  max-width: 950px;
  margin: 0 auto;
  @include small {
    display: flex;
  }
}



</style>   
 

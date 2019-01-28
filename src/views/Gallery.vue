<template>
  <div id="content">
    <h2>Gallery</h2>
    
    <v-carousel :cycle="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade"
        transition="fade"
      ></v-carousel-item>
    </v-carousel>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/3page-img1.jpg")
        },
        {
          src: require("../assets/3page-img2.jpg")
        },
        {
          src: require("../assets/3page-img3.jpg")
        },
        {
          src: require("../assets/3page-img4.jpg")
        },
        {
          src: require("../assets/3page-img5.jpg")
        },
        {
          src: require("../assets/3page-img6.jpg")
        },
        {
          src: require("../assets/3page-img7.jpg")
        }
      ]
    };
  }
};
</script>

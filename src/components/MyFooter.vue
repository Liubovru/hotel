<template>
  <!-- footer -->
  <div id="footer">
    <ul class="nav__footer">
      <li class="footer__item"><a href="index.html"><router-link to="/"
                        >Home</router-link></a></li>
      <li class="footer__item"><a href="services.html"><router-link to="/Services">Services</router-link></a></li>
      <li class="footer__item"><a href="gallery.html"><router-link to="/Gallery">Gallery</router-link></a></li>
      <li class="footer__item"><a href="restaurant.html"><router-link to="/Restaurant">Restaurant</router-link></a></li>
      <li class="footer__item"><a href="testimonials.html"><router-link to="/Testimonials">Testimonials</router-link></a></li>
      <li class="footer__item"><a href="booking.html"><router-link to="/Booking">Booking</router-link></a></li>
    </ul>
    <div class="social">
      <ul class="social__list">
        <li class="social__item">
            <a href="#" class="social__link">
             <i class="fab fa-twitter"></i>
            </a>
          </li>
        <li class="social__item">
            <a href="#" class="social__link">
            <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="social__item">
            <a href="#" class="social__link">
            <i class="fab fa-instagram"></i>
            </a>
          </li>
      </ul>
      <div class="fleft">Copyright (c) 2019 FiveStar Hotel</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
data () {
    return {
      menu: [
        {  icon: "home", title: "Home", link: "/" },
        { icon: "info", title: "Services", link: "/Services" },
        { icon: "error", title: "Gallery", link: "/Gallery" },
        { icon: "sucsess", title: "Restaurant", link: "/Restaurant" },
        { icon: "crash", title: "Testimonials", link: "/Testimonials" },
        { icon: "warning", title: "Booking", link: "/Booking" }
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  }
} 

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
  padding: 28px 40px 35px 40px;
  max-width: 950px;
  margin: 0 auto;
  @include small {
    display: flex;
  }
}

.nav__footer {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}

.nav__footer li a {
  color: #e3dad2;
}

.footer__item {
  border-right: 1px solid #a5a09d;
  width: 100%;
  text-align: center;
  line-height: 1em;
}

.nav__footer :last-child {
  border: none;
}

.social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px 20px 40px;
  @include small {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }
}
.social__list {
    display: flex;
    //justify-content: center;
    list-style: none;
    padding-left: 0;
    @include small {
      display: flex;
      margin-bottom: 10px;
       align-items: center;
    text-align: center;
    }
}

.social__link  {
    text-decoration: none;
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
    text-align: center;
    margin-right: 10px;
    font-weight: 700;
    color: #fff;
    background-color: #1d110b;
    &:hover {
    opacity: 0.7;
    }
}

</style>

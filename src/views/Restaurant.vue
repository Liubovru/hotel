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
    <div class="container__restaurant">
      <div class="menu">
        <h3>Menu</h3>
        <ul class="menu__list">
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Specials</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Lunch</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Diner</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Beverage</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Winery</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Dessert</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">Italian</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">French</a>
          </li>
          <li class="menu__item">
            <i class="material-icons" style="font-size:6px;color:red"
              >fiber_manual_record</i
            ><a href="" class="type">German</a>
          </li>
        </ul>
        <div class="button menu--2">
          <span
            ><span
              ><a
                href="#"
                onclick="document.getElementById('reservation-form').submit()"
                >make reservation</a
              ></span
            ></span
          >
        </div>
      </div>
      <div class="content">
        <div class="indent min--width">
          <h2>Today featured menu item</h2>
          <div class="indent__restaurant">
            <img class="img__menu" alt="" src="../assets/4page-img1.png" />
            <div class="indent__menu">
              <h5>Foie gras</h5>
              <ul class="preposition__list">
                <li class="preposition__item">
                  <i class="material-icons">fiber_manual_record</i>Nice and
                  tasty!
                </li>
                <li class="preposition__item">
                  <i class="material-icons">fiber_manual_record</i>Made from
                  French ingredients!
                </li>
                <li class="preposition__item">
                  <i class="material-icons">fiber_manual_record</i>Cooked by
                  Italian chef!
                </li>
                <li class="preposition__item">
                  <i class="material-icons">fiber_manual_record</i>Awarded by
                  Czech assosiation of chef!
                </li>
                <li class="preposition__item">
                  <i class="material-icons">fiber_manual_record</i>Proved to be
                  good for your health!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

.menu {
  width: 236px;
  background-color: #1d110b;
  padding: 20px;
  margin-right: 50px;
  @include small {
    margin-right: 20px;
  }
}

.menu__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu__item a {
  text-decoration: none;
  color: #bca695;
}

.menu__item a:hover {
  text-decoration: underline;
}

.material-icons {
  padding-right: 10px;
}

.menu--2 {
  width: 100%;
  text-align: center;
  padding-top: 20px;
}

.container__restaurant {
  padding: 20px 0;
  display: flex;
}

.indent__restaurant {
  display: flex;
}

.preposition__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

h5 {
  font-size: 1.33em;
  color: #c30000;
  padding-bottom: 26px;
  margin: 0;
}

.img__menu {
  width: 374px;
  height: 220px;
  margin-right: 10px;
  @include small {
    width: 150px;
    height: 100px;
    margin-bottom: 20px;
  }
}

.min--width {
  max-width: 600px;
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}

.material-icons {
  padding-right: 10px;
  font-size: 6px !important;
  color: red !important;
}
.indent__restaurant {
  @include small {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

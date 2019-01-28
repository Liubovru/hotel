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
    <div class="indent">
      <h2>Customers testimonials</h2>
      <ul class="testimonials__list">
        <li class="testimonials__item">
          <img
            alt=""
            src="../assets/5page-img1.jpg"
            class="avatar"
          />
          <div>
            <h6>Matthew, London</h6>
            <p>
              It was pure luxury. Exellent shower also and a top class breakfast.
            </p>
          </div>
        </li>
        <li class="testimonials__item">
          <img
            alt=""
            src="../assets/5page-img2.jpg"
            class="avatar"
          />
          <div>
            <h6>Debora, L.A.</h6>
            <p>
              The hotel is in a central area close to everything. It is clean. The staff is friendly. Rooms are renovated so they are modern and luxurious.
            </p>
          </div>
        </li>
        <li class="testimonials__item">
          <img
            alt=""
            src="../assets/5page-img3.jpg"
            class="avatar"
          />
          <div>
            <h6>Mark, New York</h6>
            <p>
              Friendly and helpful staff. Good sized bedroom. Luxurious and comfortable bed. Good TV.
            </p>
          </div>
        </li>
        <li class="testimonials__item">
          <img
            alt=""
            src="../assets/5page-img4.jpg"
            class="avatar"
          />
          <div>
            <h6>Lilian, Munich</h6>
            <p>
              The location just close to the powder gate. A lot of restaurants and shops in the surrounding. Breakfast included in the price and cheaper than the other hotel at the
at the same level star.
            </p>
          </div>
        </li>
      </ul>
      <div class="button">
        <span
          ><router-link to="/Form2" 
            >SUBMIT YOUR OWN TESTIMONIAL</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.indent {
  padding: 20px 0 20px 0;
}

h6 {
  font-size: 1em;
  color: #e7e7e7;
  font-weight: bold;
  margin: 0;
}

.testimonials__list li img {
  margin: 0 15px 0 0;
}

.testimonials__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.testimonials__item {
  display: flex;
  //justify-content: space-between;
  align-items: top;
}

.avatar {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 2px solid #e7e7e7;
  flex-shrink: 0;
  margin-right: 10px;
  margin-bottom: 10px !important;
}

.button {
  margin: 0 auto;
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

  &:hover {
    text-decoration: underline;
  }
}

.gallery__small {
  border: 5px solid #e7e7e7;
  margin: 0 5px;
}
</style>

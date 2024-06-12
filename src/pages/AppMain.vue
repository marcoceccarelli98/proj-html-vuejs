<script>
import ArrowsCarousel from "../components/ArrowsCarousel.vue";
import DotsCarousel from "../components/DotsCarousel.vue";
import CardsDotsCarousel from "../components/CardsDotsCarousel.vue";
import { store } from "../data/store.js";

export default {
  name: "AppMain",
  components: {
    ArrowsCarousel,
    DotsCarousel,
    CardsDotsCarousel,
  },

  data() {
    return {
      store,
      infoIndex: 0,
    };
  },
  methods: {
    setInfoIndex(value) {
      store.homeInfo.index = value;
      console.log(store.homeInfo.index);
    },
  },
  created() {},
};
</script>

<!-- ------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------ -->

<template>
  <main>
    <!-- ------------------------------ CAROUSEL ------------------------------ -->
    <ArrowsCarousel :carousel="store.homeCarousel" />
    <div class="container-70">
      <!-- ICON LIST -->

      <section class="icon-list">
        <div
          v-for="(icon, index) in store.homeIconList"
          class="icon-square"
          :key="'icon' + index"
        >
          <img :src="icon.image" :alt="'image' + index" />
          <p>{{ icon.title }}</p>
        </div>
      </section>
      <!-- /ICON LIST -->
      <!-- ------------------------------ THE TRUSTED NAME ------------------------------ -->
      <section class="trusted-name row">
        <div class="col-40">
          <h2>The Trusted Name for In-Home Tutoring.</h2>
          <p>
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed
            odio sit amet nibh vulputate cursus mauris.
          </p>
          <router-link :to="{ name: 'about' }">learn more</router-link>
        </div>
        <div class="col-60">
          <img src="/public/h5-img-1.jpg" alt="" />
        </div>
      </section>
      <!-- /THE TRUSTED NAME -->
    </div>
    <hr />
    <div class="container-70">
      <!-- ------------------------------ EMPOWERING ------------------------------ -->
      <section class="empowering row">
        <div class="col-60">
          <img src="/public/h5-img-2.jpg" alt="" />
        </div>
        <div class="col-40">
          <h2>Empowering Children to Reach Their Potential.</h2>
          <p>
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed
            odio sit amet nibh vulputate.
          </p>
          <div class="numbers">
            <div class="stories">
              <p class="number">168</p>
              <p>User stories</p>
            </div>
            <div class="events">
              <p class="number">347</p>
              <p>Scheduled Events</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /EMPOWERING -->
      <!-- ------------------------------ DOTS CAROUSEL ------------------------------ -->
      <div class="container-1920">
        <DotsCarousel />
      </div>
      <!-- /DOTS CAROUSEL -->
      <!-- ------------------------------ INFO ------------------------------ -->
      <section class="info-container">
        <div class="row">
          <!-- SELECTION -->
          <div class="col-30">
            <div
              v-for="(info, index) in store.homeInfo.info"
              class="selection"
              @click="setInfoIndex(index)"
              :class="{ active: index === store.homeInfo.index }"
            >
              <a href="">
                {{ info.selection }}
              </a>
            </div>
          </div>
          <!-- /SELECTION -->
          <div class="col-70">
            <div class="info">
              <h2>{{ store.homeInfo.info[store.homeInfo.index].title }}</h2>
              <p>{{ store.homeInfo.info[store.homeInfo.index].text }}</p>
              <div class="row">
                <!-- LIST -->
                <div class="col-80">
                  <ul>
                    <li
                      v-for="item in store.homeInfo.info[store.homeInfo.index]
                        .list"
                    >
                      <font-awesome-icon
                        class="check"
                        :icon="['fas', 'fa-check']"
                      />{{ item }}
                    </li>
                  </ul>
                </div>
                <!-- /LIST -->
                <!-- IMAGE -->
                <div class="col-20">
                  <img
                    :src="store.homeInfo.info[store.homeInfo.index].image"
                    :alt="store.homeInfo.info[store.homeInfo.index].image"
                  />
                </div>
                <!-- /IMAGE -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /INFO -->
      <!-- ONLINE COURSES -->
      <section class="my-100">
        <div class="online-courses">
          <h2>Popular Online Courses</h2>
          <h4>
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci elit consequat ipsutis sem nibh id elit
          </h4>
          <!-- <CardsDotsCarousel :cards="store.onlineCourses" /> -->
        </div>
      </section>
      <!-- /ONLINE COURSES -->
    </div>
  </main>
</template>

<!-- ------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------ -->

<style scoped lang="scss">
@use "../styles/partials/variables.scss" as *;

//  ------------------------------ ICON LIST ------------------------------

.icon-list {
  padding: 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon-square {
    position: relative;
    font-weight: bold;
    font-size: large;
    height: 200px;
    width: 200px;
    background-color: $bg-home-icon-list;
    &:hover {
      img {
        top: 30%;
        transition: 0.3s;
      }
    }
    img {
      position: absolute;
      left: 50%;
      top: 35%;
      transition: 0.3s;
      transform: translate(-50%, -50%);
      margin-bottom: 10px;
    }
    p {
      line-height: 280px;
      text-align: center;
    }
  }
}

//  ------------------------------ TRUSTED NAME ------------------------------

.trusted-name {
  h2 {
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 40px;
  }
  p {
    color: grey;
    line-height: 30px;
    margin-bottom: 20px;
  }
  a {
    font-weight: bold;
    text-transform: uppercase;
    color: $primary-color;
  }
  img {
    width: 100%;
  }
}

//  ------------------------------ EMPOWERING ------------------------------

.empowering {
  margin-top: 100px;
  h2 {
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 40px;
  }
  p {
    color: grey;
    line-height: 30px;
    margin-bottom: 20px;
  }
  a {
    font-weight: bold;
    text-transform: uppercase;
    color: $primary-color;
  }
  img {
    width: 80%;
  }

  // NUMBERS
  .numbers {
    display: flex;
    margin: 60px 0;
  }
  .numbers p {
    color: $primary-color;
    font-weight: 700;
  }
  .stories {
    margin-right: 180px;
  }
  .number {
    font-size: 50px;
    margin-bottom: 20px;
  }
}

//  ------------------------------ INFO ------------------------------

.info-container {
  margin: 100px 0;

  .selection {
    width: 100%;
    padding: 25px;
    border-left: 1px solid lightgray;
    border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-collapse: collapse;
    &:last-of-type {
      border-bottom: 1px solid lightgray;
    }
    &:hover {
      a {
        color: $primary-color;
        margin-left: 10px;
        transition: 0.3s;
      }
    }

    a {
      transition: 0.3s;
      color: grey;
      font-weight: bold;
    }
  }
  .active {
    background-color: #fcfcfc;
    border-left: 10px solid $primary-color;
    a {
      color: $primary-color;
      margin-left: 10px;
      transition: 0.3s;
    }
  }
  .info {
    color: grey;
    padding: 10px 50px;
    font-size: 17px;
    h2 {
      color: black;
      font-size: 40px;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 50px;
    }
    .row {
      justify-content: space-between;
      ul {
        line-height: 40px;
      }
      .check {
        color: $primary-color;
        margin-right: 10px;
      }
      .col-20 {
        margin-top: 50px;
        img {
          width: 90%;
        }
      }
    }
  }

  //  ------------------------------ INFO ------------------------------

  .online-courses {
    h2 {
      text-align: center;
    }
  }
}
</style>

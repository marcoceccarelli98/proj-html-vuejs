<script>
// --- IMPORT ---

// COMPONENTS
import ArrowsCarousel from "../components/ArrowsCarousel.vue";
import DotsCarousel from "../components/DotsCarousel.vue";
import SwiperCardsCarousel from "../components/SwiperCardsCarousel.vue";

// STORE
import { store } from "../data/store.js";

// --- EXPORT ---
export default {
  name: "AppMain",
  components: {
    ArrowsCarousel,
    DotsCarousel,
    SwiperCardsCarousel,
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

    tickAndCross(value) {
      if (value) {
        return ["fas", "fa-check"];
      } else {
        return ["fas", "fa-xmark"];
      }
    },
  },

  computed: {},

  created() {
    // console.log(store.homeTablePlans.coursesNum);
  },
};
</script>

<!-- ------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------ -->
<!-- ------------------------------------------------------------------------------------------ -->

<template>
  <main>
    <!-- ------------------------------ CAROUSEL ------------------------------ -->
    <ArrowsCarousel :carousel="store.homeBigCarousel" />
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
          <img src="/h5-img-1.jpg" alt="" />
        </div>
      </section>
      <!-- /THE TRUSTED NAME -->
    </div>
    <hr />
    <div class="container-70">
      <!-- ------------------------------ EMPOWERING ------------------------------ -->
      <section class="empowering row">
        <div class="col-60">
          <img src="/h5-img-2.jpg" alt="" />
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
    </div>
    <!-- ------------------------------ DOTS CAROUSEL ------------------------------ -->
    <div class="container-1920">
      <DotsCarousel :bgImage="'/h5-parallax-img-1.png'" />
    </div>
    <!-- /DOTS CAROUSEL -->
    <div class="container-70">
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
    </div>
    <!-- ONLINE COURSES -->
    <div class="bg-image">
      <div class="container-70">
        <section class="my-100">
          <div class="titles-content max-w-700px">
            <h2>Popular Online Courses</h2>
            <h4>
              Lorem ipsum gravida nibh vel velit auctor aliquetnean
              sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem
              nibh id elit
            </h4>
          </div>
          <SwiperCardsCarousel :cards="store.homeOnlineCourses" />
        </section>
      </div>
    </div>
    <hr />
    <!-- /ONLINE COURSES -->
    <!-- BEST TUTORS -->
    <section class="my-100">
      <div class="container-70">
        <div class="titles-content max-w-580px">
          <h2>The Best Tutors in Town</h2>
          <h4>
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci elit consequat ipsutis sem nibh id elit
          </h4>
        </div>
        <div class="tutor-cards">
          <!-- ---------- CARD 1 ---------- -->
          <div class="tutor-card">
            <img class="tutor-img" src="/h5-team-member-1.jpg" alt="" />
            <h3>Brenda Harris</h3>
            <h4>Teacher</h4>
            <p>
              Lorem ipsum oin gravida nibh vel veliauctor aliquenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequa
            </p>
            <div class="tutor-social">
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-twitter']"
              />
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-instagram']"
              />
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-facebook-f']"
              />
            </div>
          </div>

          <!-- ---------- CARD 2 ---------- -->
          <div class="tutor-card">
            <img class="tutor-img" src="/h5-team-member-2.jpg" alt="" />
            <h3>Lisa Griffin</h3>
            <h4>Teacher</h4>
            <p>
              Lorem ipsum oin gravida nibh vel veliauctor aliquenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequa
            </p>
            <div class="tutor-social">
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-twitter']"
              />
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-instagram']"
              />
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-facebook-f']"
              />
            </div>
          </div>

          <!-- ---------- CARD 3 ---------- -->
          <div class="tutor-card">
            <img class="tutor-img" src="/h5-team-member-3.jpg" alt="" />
            <h3>Victor Green</h3>
            <h4>Teacher</h4>
            <p>
              Lorem ipsum oin gravida nibh vel veliauctor aliquenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequa
            </p>
            <div class="tutor-social">
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-twitter']"
              />
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-instagram']"
              />
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'fa-facebook-f']"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <!-- /BEST TUTORS -->
    <!-- PRICING PLANS -->
    <section class="bg-image">
      <div class="container-70">
        <div class="titles-content">
          <h2>Pricing Plans</h2>
          <h4>
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci
          </h4>
        </div>
        <div class="table-plans">
          <table>
            <thead>
              <tr>
                <th>
                  <span> Save up to 40% by paying weekly </span>
                </th>
                <th>
                  <img src="/h5-custom-icon-7.png" alt="bulbIcon" />
                  <p>Standard</p>
                  <p>$12</p>
                </th>
                <th>
                  <img src="/h5-custom-icon-8.png" alt="brainIcon" />
                  <p>Professional</p>
                  <p>$59</p>
                </th>
                <th>
                  <img src="/h5-custom-icon-9.png" alt="capIcon" />
                  <p>Advanced</p>
                  <p>$88</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of Courses</td>
                <td v-for="(value, index) in store.homeTablePlans.coursesNum">
                  {{ store.homeTablePlans.coursesNum[index] }}
                </td>
              </tr>
              <tr>
                <td>Time</td>
                <td v-for="(value, index) in store.homeTablePlans.time">
                  {{ store.homeTablePlans.time[index] + " Days" }}
                </td>
              </tr>
              <tr>
                <td>Web Designing</td>
                <td v-for="(value, index) in store.homeTablePlans.webDesign">
                  <font-awesome-icon
                    class="tableIcon"
                    :class="{
                      'primary-color': store.homeTablePlans.webDesign[index],
                    }"
                    :icon="
                      this.tickAndCross(store.homeTablePlans.webDesign[index])
                    "
                  />
                </td>
              </tr>
              <tr>
                <td>Human-Centered Design</td>
                <td v-for="(value, index) in store.homeTablePlans.humanDesign">
                  <font-awesome-icon
                    class="tableIcon"
                    :class="{
                      'primary-color': store.homeTablePlans.humanDesign[index],
                    }"
                    :icon="
                      this.tickAndCross(store.homeTablePlans.humanDesign[index])
                    "
                  />
                </td>
              </tr>
              <tr>
                <td>Basic Marketing</td>
                <td
                  v-for="(value, index) in store.homeTablePlans.basicMarketing"
                >
                  <font-awesome-icon
                    class="tableIcon"
                    :class="{
                      'primary-color':
                        store.homeTablePlans.basicMarketing[index],
                    }"
                    :icon="
                      this.tickAndCross(
                        store.homeTablePlans.basicMarketing[index]
                      )
                    "
                  />
                </td>
              </tr>
              <tr>
                <td>Python for Everybody</td>
                <td v-for="(value, index) in store.homeTablePlans.python">
                  <font-awesome-icon
                    class="tableIcon"
                    :class="{
                      'primary-color': store.homeTablePlans.python[index],
                    }"
                    :icon="
                      this.tickAndCross(store.homeTablePlans.python[index])
                    "
                  />
                </td>
              </tr>
              <tr>
                <td>Android Developer</td>
                <td v-for="(value, index) in store.homeTablePlans.android">
                  <font-awesome-icon
                    class="tableIcon"
                    :class="{
                      'primary-color': store.homeTablePlans.android[index],
                    }"
                    :icon="
                      this.tickAndCross(store.homeTablePlans.android[index])
                    "
                  />
                </td>
              </tr>
              <tr>
                <td>Business English</td>
                <td v-for="(value, index) in store.homeTablePlans.businessEng">
                  <font-awesome-icon
                    class="tableIcon"
                    :class="{
                      'primary-color': store.homeTablePlans.businessEng[index],
                    }"
                    :icon="
                      this.tickAndCross(store.homeTablePlans.businessEng[index])
                    "
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td><button class="btnGetItNow">Get it now</button></td>
                <td><button class="btnGetItNow btnBlue">Get it now</button></td>
                <td><button class="btnGetItNow">Get it now</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>

    <!-- /PRICING PLANS -->
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
}

//  ------------------------------ ONLINE COURSES ------------------------------

.bg-image {
  background-image: url("/page-background-img.png");
  padding: 100px 0;
}

//  ------------------------------ BEST TUTORS ------------------------------

.titles-content {
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 45px;
    margin-bottom: 20px;
  }
  h4 {
    color: gray;
    font-weight: lighter;
    margin-bottom: 80px;
  }
}

.tutor-cards {
  display: flex;
  justify-content: space-between;
  .tutor-card {
    margin: 0 50px;
    width: calc(100% / 3 - 30px);
    text-align: center;
    color: $grey-subtitle;
    img {
      display: inline-block;
      width: 155px;
    }
    h3 {
      margin-top: 20px;
      font-size: 25px;
      color: black;
    }
    h4 {
      font-size: 14px;
      text-transform: uppercase;
      margin: 15px 0;
    }
    p {
      font-size: 16px;
      color: $grey-paragraph;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .social-icon {
      margin: 0 10px;
    }
  }
}

//  ------------------------------ PRICING PLANS ------------------------------

.primary-color {
  color: $primary-color;
}

.bg-image {
  .table-plans {
    // TABLE
    table {
      empty-cells: hide;
      width: 100%;
      border-collapse: collapse;
      th,
      td {
        border: 1px solid $grey-subtitle;
        padding: 20px;
        text-align: center;
        width: 25%;
        &:first-of-type {
          font-weight: bold;
          text-align: start;
        }
      }
      // TABLE HEAD
      thead {
        th {
          background-color: #f7fdff;
          height: 250px;
          font-size: 25px;
          border-top: 4px solid rgba($color: $primary-color, $alpha: 0.3);
          &:nth-of-type(3) {
            border-top: 4px solid rgba($color: $primary-color, $alpha: 1);
          }
          &:first-of-type {
            background-color: white;
          }
          p {
            margin: 10px;
            &:last-of-type {
              color: #646464;
              font-size: 20px;
            }
          }
          img {
            display: inline-block;
          }
        }
      }
      // TABLE BODY
      tbody {
        color: grey;
        font-size: 20px;
        .tableIcon {
          font-size: 20px;
        }
      }
      // TABLE FOOTER
      tfoot {
        td {
          height: 95px;
          background-color: #f7fdff;
          &:first-of-type {
            background-color: transparent;
            border-bottom: 0;
            border-left: 0;
          }
          .btnGetItNow {
            font-weight: bold;
            text-transform: uppercase;
            color: grey;
            padding: 15px 35px;
            border: 2px solid lightgray;
            &.btnBlue {
              padding: 17px 35px;
              color: white;
              background-color: $primary-color;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>

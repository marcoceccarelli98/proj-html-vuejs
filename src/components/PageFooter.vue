<script>
export default {
  name: "PageFooter",
  data() {
    return {
      hoverPhone: false,
      hoverClock: false,
      courses: [
        {
          name: "Business English",
          professor: "Preston Marshall"
        },
        {
          name: "Social Computing",
          professor: "David Sanders"
        },
        {
          name: "Learn Spanish",
          professor: "Jennie King"
        }
      ],
      supports: ["User dashboard", "Contact Us", "FAQ", "Course Offer", "Events"]
    }
  },
  methods: {
    handleMouseOver(contactType) {
      if (contactType === 'phone') {
        this.hoverPhone = true;
      } else if (contactType === 'clock') {
        this.hoverClock = true;
      }
    },
    handleMouseLeave(contactType) {
      if (contactType === 'phone') {
        this.hoverPhone = false;
      } else if (contactType === 'clock') {
        this.hoverClock = false;
      }
    }
  }
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-top">
        <div class="row">
          <div class="col-25">
            <div>
              <router-link :to="{ name: 'home' }">
                <img class="logo" src="/logo-light.png" alt="">
              </router-link>
            </div>
            <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home
            </p>
            <div class="contacts" @mouseover="handleMouseOver('phone')" @mouseleave="handleMouseLeave('phone')">
              <span class="icon-contact" :class="{ primary: hoverPhone }"><font-awesome-icon
                  :icon="['fas', 'phone']" /></span>
              <p> 1-677-124-44227</p>
            </div>
            <div class="contacts" @mouseover="handleMouseOver('clock')" @mouseleave="handleMouseLeave('clock')">
              <span class="icon-contact" :class="{ primary: hoverClock }"><font-awesome-icon
                  :icon="['far', 'clock']" /></span>
              <p>Mon - Sat 8.00 - 18.00</p>
            </div>
          </div>
          <div class="col-25">
            <h3>Popular Courses</h3>
            <div v-for="course in courses">
              <p class="course-name"><strong>{{ course.name }}</strong></p>
              <p class="course-prof">{{ course.professor }}</p>
            </div>
          </div>
          <div class="col-25">
            <h3>Support</h3>
            <p class="supports" v-for="support in supports">{{ support }}</p>
          </div>
          <div class="col-25">
            <h3>Flexible Learning</h3>
            <img src="/footer-img-1.png" alt="">
          </div>
        </div>
        <hr>
      </div>
      <div class="footer-bottom">
        <div class="row">
          <div class="col-30">
            <p class="rights">© 2017 Qode Interactive, All Rights Reserved</p>
          </div>
          <div class="col-30">
            <ul>
              <li>CALL +44 300 303 0266</li>
              <li>follow us</li>
              <li>
                <span><font-awesome-icon :icon="['fab', 'twitter']" /></span>
                <span><font-awesome-icon :icon="['fab', 'instagram']" /></span>
                <span><font-awesome-icon :icon="['fab', 'facebook-f']" /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.container {
  color: rgb(189, 189, 189);
  background-color: #222;
}

.col-25 {
  width: calc(25% - 24px);
  padding: 60px 0;
  margin: 40px;
}

.col-30 {
  width: 30%;
}

.footer-top p {
  font-size: 15px;
}

.contacts {
  display: flex;
  margin-top: 25px;
}

img {
  width: 100%;
  margin-bottom: 25px;
}

.logo {
  width: 160px;
}

h3 {
  margin-bottom: 25px;
  color: white;
}

.course-prof,
.supports {
  margin-bottom: 20px;
}

.icon-contact {
  margin-right: 10px;
}

.course-name:hover,
.supports:hover,
.icon-contact.primary {
  color: $primary-color;
}

.course-prof:hover {
  color: rgb(77, 77, 77);
}

hr {
  background-color: rgb(77, 77, 77);
  border: none;
  height: 0.5px;
  margin: 0 40px;
}

.footer-bottom {
  padding: 30px 0;
  color: rgb(123, 123, 123);
}

.footer-bottom .row {
  justify-content: space-between;
}

.rights {
  font-size: 14px;
  margin-left: 40px;
}

.footer-bottom ul li {
  display: inline;
  padding: 15px;
  text-transform: uppercase;
  font-size: 12px;
}

.footer-bottom span {
  padding: 8px;
}
</style>

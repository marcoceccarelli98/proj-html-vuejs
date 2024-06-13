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
    <div class="footer-top">
      <div class="container">
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
            <h2>Popular Courses</h2>
            <div v-for="course in courses">
              <p class="course-name"><strong>{{ course.name }}</strong></p>
              <p class="course-prof">{{ course.professor }}</p>
            </div>
          </div>
          <div class="col-25">
            <h2>Support</h2>
            <p class="supports" v-for="support in supports">{{ support }}</p>
          </div>
          <div class="col-25">
            <h2>Flexible Learning</h2>
            <img src="/footer-img-1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.container {
  color: lightgray;
  background-color: rgba(0, 0, 0, 0.9);
  height: 500px;
}

.col-25 {
  width: calc(25% - 24px);
  padding: 50px 0;
  margin: 40px;
}

.contacts {
  display: flex;
  margin-top: 25px;
}

img {
  width: 100%;
  margin-bottom: 20px;
}

.logo {
  width: 180px;
}

h2 {
  margin-bottom: 20px;
  color: white;
}

.course-prof,
.supports {
  margin-bottom: 25px;
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
</style>

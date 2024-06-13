<script>
export default {
  name: "PageFooter",
  data() {
    return {
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
  }
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-25">
          <img src="/logo-light.png" alt="">
          <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home
          </p>
          <div class="contacts">
            <span>icon</span>
            <p> 1-677-124-44227</p>
          </div>
          <div class="contacts">
            <span>icon</span>
            <p>Mon - Sat 8.00 - 18.00</p>
          </div>
        </div>
        <div class="col-25">
          <h2>Popular Courses</h2>
          <div v-for="course in courses">
            <p><strong>{{ course.name }}</strong></p>
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
  </footer>
</template>

<style scoped>
.container {
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  height: 500px;
}

.col-25 {
  width: calc(25% - 20px);
  padding: 50px 0;
  margin: 20px;
}

.contacts {
  display: flex;
  margin: 20px;
}

img {
  width: 100%;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

.course-prof,
.supports {
  margin-bottom: 20px;
}
</style>

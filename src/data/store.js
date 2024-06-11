import { reactive } from "vue";

export const store = reactive({
  homeCarousel: [
    {
      image: "/h5-slide-1-background.jpg",
      title: "Accelerate Your Career",
      text: "Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.",
      button: {
        btnStr: "REGISTER NOW",
        btnType: "button",
      },
    },
    {
      image: "/public/h5-slide-2-background.jpg",
      title: "Premium Education",
      text: "Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.",
      button: {
        btnStr: "fas fa-play",
        btnType: "icon",
      },
    },
    {
      image: "/public/h5-slide-3-background.jpg",
      title: "Contemporary Ideas",
      text: "Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.",
      button: {
        btnStr: "fas fa-play",
        btnType: "icon",
      },
    },
  ],

  tutors: [
    {
      img: "/instructor-img-1.jpg",
      name: "Edward Bowman",
      role: "Associate Professor"
    },
    {
      img: "/instructor-img-2.jpg",
      name: "Denise Wood",
      role: "Assistant Professor"
    },
    {
      img: "/instructor-img-3.jpg",
      name: "Kathryn Webb",
      role: "Teaching Assistant"
    },
    {
      img: "/instructor-img-4.jpg",
      name: "Jennifer Powell",
      role: "Associate Professor"
    },
    {
      img: "/instructor-img-5.jpg",
      name: "Dave Robbins",
      role: "Assistant Professor"
    },
    {
      img: "/instructor-img-7.jpg",
      name: "Keyth Taylor",
      role: "Teaching Assistant"
    },
    {
      img: "/instructor-img-8.jpg",
      name: "Jennie King",
      role: "Assistant Professor"
    },
    {
      img: "/instructor-img-9.jpg",
      name: "David Sanders",
      role: "Assistant Professor"
    },
    {
      img: "/instructor-img-6.jpg",
      name: "Preston Marshall",
      role: "Associate Professor"
    }
  ],

  aboutTestimonials: [
    {
      img: "/testimonials-standard-3-100x100.png",
      name: "Jonathan Gibson",
      role: "Teaching Assistant"
    },
    {
      img: "/testimonials-standard-5-100x100.png",
      name: "Brooke Austin",
      role: "Teaching Assistant"
    },
    {
      img: "/testimonials-standard-4-100x100.png",
      name: "Rachel Collins",
      role: "Student"
    }
  ]
});

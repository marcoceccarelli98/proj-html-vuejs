import { reactive } from "vue";

export const store = reactive({
  // HOME
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
        btnStr: ["fas", "fa-play"],
        btnType: "icon",
      },
    },
    {
      image: "/public/h5-slide-3-background.jpg",
      title: "Contemporary Ideas",
      text: "Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elited odio sit amet nibcursus a sit amet mauris.",
      button: {
        btnStr: ["fas", "fa-play"],
        btnType: "icon",
      },
    },
  ],

  homeIconList: [
    {
      title: "Languages",
      image: "/h5-custom-icon-1.png",
    },
    {
      title: "Software",
      image: "/h5-custom-icon-2.png",
    },
    {
      title: "Business",
      image: "/h5-custom-icon-3.png",
    },
    {
      title: "Chemistry",
      image: "/h5-custom-icon-4.png",
    },
    {
      title: "Science",
      image: "/h5-custom-icon-5.png",
    },
    {
      title: "DIY&Craft",
      image: "/h5-custom-icon-6.png",
    },
  ],

  homeInfo: {
    index: 0,
    info: [
      {
        selection: "What We Do",
        title: "Learning Possibilities",
        text: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
        image: "/h12-tabs-icon-1.png",
        list: [
          "We enrich lives through learning.",
          "Maximizing potential through individual attention.",
          "The trusted name for specialized training.",
          "People teach. People learn. This is where they connect.",
        ],
      },
      {
        selection: "Degree Programme",
        title: "Inspiring Minds",
        text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
        image: "/h12-tabs-icon-2.png",
        list: [
          "Maximizing potential through individual attention.",
          "We enrich lives through learning.",
          "People teach. People learn. This is where they connect.",
          "The trusted name for specialized training.",
        ],
      },
      {
        selection: "Career Achievements",
        title: "Investing in Knowledge",
        text: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
        image: "/h12-tabs-icon-3.png",
        list: [
          "We enrich lives through learning.",
          "Maximizing potential through individual attention.",
          "The trusted name for specialized training.",
          "People teach. People learn. This is where they connect.",
        ],
      },
      {
        selection: "Personal Managment",
        title: "Secure Your Future",
        text: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
        image: "/h12-tabs-icon-4.png",
        list: [
          "Maximizing potential through individual attention.",
          "We enrich lives through learning.",
          "People teach. People learn. This is where they connect.",
          "The trusted name for specialized training.",
        ],
      },
      {
        selection: "Steps To Success",
        title: "Where Learning Begins",
        text: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
        image: "/h12-tabs-icon-5.png",
        list: [
          "We enrich lives through learning.",
          "Maximizing potential through individual attention.",
          "The trusted name for specialized training.",
          "People teach. People learn. This is where they connect.",
        ],
      },
      {
        selection: "Knowledge Trensfer",
        title: "Knowledge is Power",
        text: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
        image: "/h12-tabs-icon-6.png",
        list: [
          "Maximizing potential through individual attention.",
          "We enrich lives through learning.",
          "People teach. People learn. This is where they connect.",
          "The trusted name for specialized training.",
        ],
      },
    ],
  },

  // ABOUT
  tutors: [
    {
      img: "/instructor-img-1.jpg",
      name: "Edward Bowman",
      role: "Associate Professor",
    },
    {
      img: "/instructor-img-2.jpg",
      name: "Denise Wood",
      role: "Assistant Professor",
    },
    {
      img: "/instructor-img-3.jpg",
      name: "Kathryn Webb",
      role: "Teaching Assistant",
    },
    {
      img: "/instructor-img-4.jpg",
      name: "Jennifer Powell",
      role: "Associate Professor",
    },
    {
      img: "/instructor-img-5.jpg",
      name: "Dave Robbins",
      role: "Assistant Professor",
    },
    {
      img: "/instructor-img-7.jpg",
      name: "Keyth Taylor",
      role: "Teaching Assistant",
    },
    {
      img: "/instructor-img-8.jpg",
      name: "Jennie King",
      role: "Assistant Professor",
    },
    {
      img: "/instructor-img-9.jpg",
      name: "David Sanders",
      role: "Assistant Professor",
    },
    {
      img: "/instructor-img-6.jpg",
      name: "Preston Marshall",
      role: "Associate Professor",
    },
  ],

  aboutTestimonials: [
    {
      img: "/testimonials-standard-3-100x100.png",
      name: "Jonathan Gibson",
      role: "Teaching Assistant",
    },
    {
      img: "/testimonials-standard-5-100x100.png",
      name: "Brooke Austin",
      role: "Teaching Assistant",
    },
    {
      img: "/testimonials-standard-4-100x100.png",
      name: "Rachel Collins",
      role: "Student",
    },
  ],
});

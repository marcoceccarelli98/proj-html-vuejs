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

  onlineCourses: [
    {
      image: "/course-1-f-img.jpg",
      course: "Business English",
      teacher: "Prenston Marshall",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 20,
      tag: "languages",
    },
    {
      image: "/course-2-f-img.jpg",
      course: "Social Computing",
      teacher: "David Sanders",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 0,
      tag: "programming",
    },
    {
      image: "/course-3-f-img.jpg",
      course: "Learn Spanish",
      teacher: "Jennie King",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 20,
      tag: "languages",
    },
    {
      image: "/course-4-f-img.jpg",
      course: "Basic Marketing",
      teacher: "Edward Bowman",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 40,
      tag: "business",
    },
    {
      image: "/course-5-f-img.jpg",
      course: "Android Developer",
      teacher: "David Sanders",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 0,
      tag: "programming",
    },
    {
      image: "/course-6-f-img.jpg",
      course: "Web Designing",
      teacher: "Jennifer Powell",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 0,
      tag: "programming",
    },
    {
      image: "/course-7-f-img.jpg",
      course: "Academic English",
      teacher: "Dave Robbins",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 0,
      tag: "languages",
    },
    {
      image: "/course-8-f-img.jpg",
      course: "Modern Psychology",
      teacher: "Kathryn Webb",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 40,
      tag: "business",
    },
    {
      image: "/course-9-f-img.jpg",
      course: "Business English",
      teacher: "Prenston Marshall",
      description:
        "Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris",
      price: 20,
      tag: "languages",
    },
  ],

  // ----------------- ABOUT -----------------
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

  // ----------------- HEADER -----------------
  header: [
    {
      name: "Home",
      subItems: [
        { name: "Home 1" },
        { name: "Home 2" },
        { name: "Home 3" },
        { name: "Home 4" },
        { name: "Home 5" },
        { name: "Home 6" },
        { name: "Home 7" },
        { name: "Home 8" },
        { name: "Home 9" },
        { name: "Home 10" },
        { name: "Home 11" },
        { name: "Home 12" },
        { name: "Landing" }
      ]
    },
    {
      name: "Courses",
      subItems: [
        { name: "FEATURES" },
        { name: "All Courses" },
        { name: "Standard List" },
        { name: "Course Single" },
        { name: "User dashboard" },
        {
          name: "BUSINESS",
          img: "course-4-f-img.jpg",
          text: "Basic Marketing",
          price: "$40"
        },
        {
          name: "LANGUAGE",
          img: "course-1-f-img.jpg",
          text: "Business English",
          price: "$20"
        },
        {
          name: "PROGRAMMING",
          img: "course-2-f-img.jpg",
          text: "Social Computing",
          price: "free"
        }
      ],
    },
    {
      name: "Instructors",
      subItems: [
        { name: "Become an Instructor" },
        { name: "Instructor Single" }
      ]
    },
    {
      name: "Events",
      subItems: [
        { name: "Events Calendar" },
        { name: "Events List" },
        { name: "Event Single" }
      ]
    },
    {
      name: "Pages",
      subItems: [
        { name: "About" },
        { name: "Gallery" },
        { name: "Pricing Plan" },
        {
          name: "Blog",
          subItems: [
            { name: "Standard List" },
            { name: "Masonry List" },
            { name: "Blog Split" },
            { name: "Standard Post" },
            { name: "Quote Post" },
            { name: "Link Post" },
            { name: "Audio Post" },
            { name: "Video Post" }
          ]
        },
        {
          name: "Shop",
          subItems: [
            { name: "Shop List" },
            { name: "Standard Product" },
            { name: "Grouped Product" },
            { name: "External Product" },
            { name: "Variable Product" },
            { name: "Three Columns Grid" },
            { name: "Three Columns Wide" },
            { name: "Four Columns Grid" },
            { name: "Four Columns Wide" },
            { name: "Five Columns Grid" },
            { name: "Five Columns Wide" },
            { name: "My account" },
            { name: "Cart" },
            { name: "Checkout" }
          ]
        },
        {
          name: "Forums",
          subItems: [
            { name: "All Forums" },
            { name: "Forum Topic" }
          ]
        },
        { name: "Contact" },
        { name: "FAQ" },
        { name: "Coming Soon" },
        { name: "Error Page" }
      ]
    },
    {
      name: "Elements",
      subItems: [
        { name: "COURSE SHORTCODES" },
        { name: "Course List" },
        { name: "Course Slider" },
        { name: "Course Table" },
        { name: "Course Features" },
        { name: "Instructor List" },
        { name: "Instructor Slider" },
        { name: "Education Timeline" },
        { name: "Advanced Course Search" },
        { name: "Linked Image List" },
        { name: "CLASSIC" },
        { name: "Accordions & Toggles" },
        { name: "Tabs" },
        { name: "Buttons" },
        { name: "Call To Action" },
        { name: "Contact Form" },
        { name: "Separators" },
        { name: "Icon With Text" },
        { name: "Blockquote" },
        { name: "Typography" },
        { name: "INFOGRAPHIC" },
        { name: "Counters" },
        { name: "Countdown" },
        { name: "Pie Charts" },
        { name: "Google Maps" },
        { name: "Process" },
        { name: "Progress Bar" },
        { name: "Events List" },
        { name: "Pricing Tables" },
        { name: "Comparison Pricing Tables" },
        { name: "PRESENTATION" },
        { name: "Team Shortcode" },
        { name: "Testimonials" },
        { name: "Clients" },
        { name: "Blog List Shortcode" },
        { name: "Twitter List" },
        { name: "Product List" },
        { name: "Image Gallery" },
        { name: "Masonry Gallery" },
        { name: "Video Button" }
      ]
    }
  ]
});
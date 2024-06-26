import { reactive } from "vue";

import { homeBigCarousel } from "./homepage/homeBigCarousel.js";
import { homeIconList } from "./homepage/homeIconList.js";
import { homeInfo } from "./homepage/homeInfo.js";
import { homeOnlineCourses } from "./homepage/homeOnlineCourses.js";
import { homeTablePlans } from "./homepage/homeTablePlans.js";

export const store = reactive({
  // HOME
  homeBigCarousel,
  homeIconList,
  homeInfo,
  homeOnlineCourses,
  homeTablePlans,

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
        { name: "Landing" },
      ],
    },
    {
      name: "Courses",
      subItems: [
        {
          name: "FEATURES",
          subNames: ["All Courses", "Standard List", "Course Single", "User dashboard"]
        },
        {
          name: "BUSINESS",
          img: "/course-4-f-img.jpg",
          text: "Basic Marketing",
          price: "$40",
        },
        {
          name: "LANGUAGE",
          img: "/course-1-f-img.jpg",
          text: "Business English",
          price: "$20",
        },
        {
          name: "PROGRAMMING",
          img: "/course-2-f-img.jpg",
          text: "Social Computing",
          price: "free",
        },
      ],
    },
    {
      name: "Instructors",
      subItems: [
        { name: "Become an Instructor" },
        { name: "Instructor Single" },
      ],
    },
    {
      name: "Events",
      subItems: [
        { name: "Events Calendar" },
        { name: "Events List" },
        { name: "Event Single" },
      ],
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
            { name: "Video Post" },
          ],
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
            { name: "Checkout" },
          ],
        },
        {
          name: "Forums",
          subItems: [{ name: "All Forums" }, { name: "Forum Topic" }],
        },
        { name: "Contact" },
        { name: "FAQ" },
        { name: "Coming Soon" },
        { name: "Error Page" },
      ],
    },
    {
      name: "Elements",
      subItems: [
        {
          name: "COURSE SHORTCODES",
          subNames: ["Course List", "Course Slider", "Course Table", "Course Features", "Instructor List", "Instructor Slider", "Education Timeline", "Advanced Course Search", "Linked Image List"]
        },
        {
          name: "CLASSIC",
          subNames: ["Accordions & Toggles", "Tabs", "Buttons", "Call To Action", "Contact Form", "Separators", "Icon With Text", "Blockquote", "Typography"]
        },
        {
          name: "INFOGRAPHIC",
          subNames: ["Counters", "Countdown", "Pie Charts", "Google Maps", "Process", "Progress Bar", "Events List", "Pricing Tables", "Comparison Pricing Tables"]
        },
        {
          name: "PRESENTATION",
          subNames: ["Team Shortcode", "Testimonials", "Clients", "Blog List Shortcode", "Twitter List", "Product List", "Image Gallery", "Masonry Gallery", "Video Button"]
        }
      ],
    },
  ],
});

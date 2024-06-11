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
});

<script>
export default {
  name: "CourseCard",
  data() {
    return {};
  },
  props: {
    image: {
      type: String,
    },
    course: {
      type: String,
    },
    teacher: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    tag: {
      type: String,
    },
  },

  methods: {},

  computed: {
    getPrice() {
      return this.price === 0 ? "Free" : "$" + this.price;
    },
    isFree() {
      return this.price === 0 ? "free" : "";
    },
  },
};
</script>

<template>
  <div class="card">
    <!-- IMAGE -->
    <img :src="this.image" :alt="this.course" />
    <div class="content">
      <div class="top-text">
        <h2>{{ course }}</h2>
        <div class="price" :class="isFree">
          <div>{{ this.getPrice }}</div>
        </div>
      </div>
      <h4>{{ teacher }}</h4>
      <p>{{ description }}</p>
      <span class="tags">
        <font-awesome-icon class="icon" :icon="['fas', 'fa-user']" />
        <span>0</span>
        <font-awesome-icon class="icon" :icon="['fas', 'fa-tag']" />
        <span> {{ tag }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables.scss" as *;

.card {
  position: relative;
  min-width: calc(100% / 3 - 30px);
  border: 1px solid lightgrey;
  img {
    width: 100%;
  }
  .content {
    padding: 30px;
    color: #b9b9b9;
    text-align: start;
    // TEXT AND PRICE
    .top-text {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: black;
      }
      .price {
        text-align: center;
        min-width: 50px;
        color: white;
        background-color: $primary-color;
        padding: 2px 25px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .free {
        background-color: $free-label;
      }
    }
    h4 {
      font-size: 13px;
      margin: 10px 0 30px;
    }
    p {
      color: grey;
      font-size: 15px;
      line-height: 25px;
      margin-bottom: 20px;
    }
    .tags {
      .icon {
        margin-right: 5px;
      }
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>

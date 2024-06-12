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
    cost: {
      type: Number,
    },
    tag: {
      type: String,
    },
  },

  methods: {},

  computed: {
    getPrice() {
      return this.cost === 0 ? "Free" : this.cost;
    },
  },
};
</script>

<template>
  <div class="card">
    <!-- IMAGE -->
    <img :src="this.image" :alt="this.course" />
    <div class="content">
      <h2>{{ course }}</h2>
      <h4>{{ teacher }}</h4>
      <p>{{ description }}</p>
      <span class="price">{{ getPrice }}</span>
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
    h2 {
      color: black;
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
    span {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .price {
      position: absolute;
      right: 20px;
      top: 250px;
      background-color: $primary-color;
      padding: 5px 20px;
      border-radius: 20px;
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

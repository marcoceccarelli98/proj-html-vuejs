<script>
import AboutPath from "../components/AboutPath.vue"
import EventsComponent from "../components/EventsComponent.vue";

export default {
  name: "AppAbout",
  components: {
    AboutPath,
    EventsComponent
  }
}
</script>

<template>
  <h1>About</h1>
  <font-awesome-icon icon="fa-solid fa-user-secret" />
  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
  <div class="bg-primary">
    <div class="container">
      <AboutPath />
    </div>
  </div>
  <div class="container">
    <EventsComponent />
  </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.bg-primary {
  background-color: $primary-color;
}

.container {
  width: 90%;
  margin: auto;
}
</style>

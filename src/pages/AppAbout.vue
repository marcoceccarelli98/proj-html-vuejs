<script>
import PagePath from "../components/PagePath.vue"
import EventsComponent from "../components/EventsComponent.vue";

export default {
  name: "AppAbout",
  components: {
    PagePath,
    EventsComponent
  }
}
</script>

<template>
  <h1>About</h1>
  <font-awesome-icon icon="fa-solid fa-user-secret" />
  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />

  <PagePath />
  <div class="container">
    <EventsComponent />
  </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.container {
  width: 90%;
  margin: auto;
}
</style>

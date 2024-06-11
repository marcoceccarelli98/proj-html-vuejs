<script>
import PagePath from "../components/PagePath.vue"
import EventsComponent from "../components/EventsComponent.vue";
import TutorsComponent from "../components/TutorsComponent.vue";

export default {
  name: "AppAbout",
  components: {
    PagePath,
    EventsComponent,
    TutorsComponent
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
  <hr>
  <TutorsComponent />
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.container {
  width: 90%;
  margin: auto;
}

hr {
  border: none;
  height: 0.5px;
  background-color: lightgray;
}
</style>

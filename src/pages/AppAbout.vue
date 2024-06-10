<script>
import AboutPath from "../components/AboutPath.vue"

export default {
  name: "AppAbout",
  components: {
    AboutPath
  }
}
</script>

<template>
  <h1>About</h1>
  <font-awesome-icon icon="fa-solid fa-user-secret" />
  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
  <AboutPath />
</template>

<style scoped></style>

<script>
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {},

  data() {
    return {
      store,
    };
  },
  methods: {},
  created() { },
};
</script>

<template>
  <main>
    <h1>Home</h1>
  </main>
</template>

<style scoped></style>

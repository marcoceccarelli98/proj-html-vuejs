<script>
import { store } from "./data/store"

import PageHeader from "./components/PageHeader.vue";

export default {
  components: { PageHeader },
  data() {
    return {
      store
    }
  }
};
</script>

<template>
  <PageHeader :menu="store.header" />
  <router-view></router-view>
</template>

<style scoped></style>

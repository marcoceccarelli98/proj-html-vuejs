<script>
import { store } from "./data/store"

import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  components: { PageHeader, PageFooter },
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
  <PageFooter />
</template>

<style scoped></style>

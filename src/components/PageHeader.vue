<script>
export default {
  name: "PageHeader",
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">Chi siamo</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>

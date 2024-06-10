<script>
export default {
    name: "AboutPath"
}
</script>

<template>
    <div class="container">
        <h2>About</h2>
        <p>Home / About</p>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.container {
    background-color: $primary-color;
    color: white;
}

h2 {
    font-size: 40px;
    padding: 50px 0 0 40px;
}

p {
    padding: 20px 0 50px 40px;
}
</style>
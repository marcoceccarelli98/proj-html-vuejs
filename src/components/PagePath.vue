<script>
export default {
    name: "PagePath",
    props: ["title"]
}
</script>

<template>
    <div class="parallax-container">
        <div class="container-90">
            <h2>{{ title }}</h2>
            <p>Home / {{ title }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.parallax-container {
    position: relative;
    height: 250px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-image: url('/pages-title-parallax.jpg');
    background-size: cover;
    background-attachment: fixed;
    /* Effetto parallasse */
    background-position: center;
    color: white;
}

.container-90 {
    height: 100px;
}

h2 {
    font-size: 40px;
    margin-bottom: 20px;
}
</style>
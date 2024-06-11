<script>
import { store } from "../data/store"

import TutorCard from "./TutorCard.vue";
export default {
    name: "TutorsComponent",
    data() {
        return {
            store
        }
    },

    components: {
        TutorCard
    }
}
</script>

<template>
    <div class="bg-container">
        <div class="container">
            <div class="text">
                <h2>Top tutors in every subject.</h2>
                <p>Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin,lorem quis bibendum</p>
            </div>
            <div class="tutors">
                <TutorCard v-for="tutor in store.tutors" :img="tutor.img" :name="tutor.name" :role="tutor.role" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.bg-container {
    background-color: rgb(247, 247, 247);
}

.container {
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
}

h2 {
    color: $primary-color;
    font-size: 40px;
    padding-bottom: 20px;
}

.text p {
    font-size: 20px;
    margin-bottom: 30px;
    color: gray;
}

.text {
    text-align: center;
}

.tutors {
    display: flex;
    flex-wrap: wrap;
}
</style>
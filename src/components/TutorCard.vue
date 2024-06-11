<script>
export default {
    name: "TutorCard",
    props: ["img", "name", "role"]
}
</script>

<template>
    <div class="card">
        <div class="col-30">
            <div class="img-container">
                <img :src="img" alt="">
            </div>
        </div>
        <div class="col-70">
            <h4>{{ name }}</h4>
            <p>{{ role }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 3 - 30px);
    margin: 15px;
    height: 130px;
    display: flex;
    background-color: white;
    transition: transform 0.5s ease;
}

.card:hover {
    box-shadow: 3px 3px 10px rgb(218, 217, 217);
    transform: translateY(-3px);
}

.col-30 {
    width: 30%;
    align-items: center;
}

.col-70 {
    width: 70%;
    flex-direction: column;
    padding-left: 30px;
}

.col-30,
.col-70 {
    display: flex;
    justify-content: center;
}

.img-container {
    width: 80px;
    height: 80px;

}

img {
    width: 100%;
    border-radius: 50%;
}

p {
    color: gray;
}
</style>
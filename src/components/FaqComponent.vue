<script>
export default {
    name: "FaqComponent",
    data() {
        return {
            currentActive: 0,
            faqs: ["Can I just enroll in a single course?", "What is the refund policy?", "What background knowledge is necessary?", "Do I need to take the courses in a specific order?"]
        }
    },

    methods: {
        selectActive(index) {
            this.currentActive = index;
        },
    }
}
</script>

<template>
    <div class="container-90">
        <div class="row">
            <div class="col-50">
                <img src="/about-us-img.png" alt="">
            </div>
            <div class="col-50">
                <h3>FAQs</h3>
                <ul>
                    <li v-for="(faq, index) in faqs" @click="selectActive(index)">
                        <div>
                            <font-awesome-icon class="angle-right" :icon="['fas', 'angle-right']"
                                :class="{ display: currentActive == index }" />
                            <h4> {{ faq }}</h4>
                            <p :class="{ display: currentActive == index }">Lorem ipsum proin gravida velit auctor aliquet.
                                Aenean sollicitu din, lorem auci elit
                                consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.row {
    padding: 30px 0;
}

img {
    width: 100%;
}

h3 {
    margin-bottom: 20px;
}

h4 {
    margin-bottom: 30px;
}

p {
    display: none;
}

p.display {
    display: block;
}

li {
    padding: 30px 40px;
    border: 1px solid rgb(235, 235, 235);
}

li div {
    position: relative;
}

.angle-right {
    color: $primary-color;
    position: absolute;
    top: 4px;
    left: -20px;
    transition: transform 0.5s ease;
}

.angle-right.display {
    transform: rotate(90deg);
}
</style>
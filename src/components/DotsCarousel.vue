<script>
import { store } from "../data/store"

export default {
    name: "AboutCarousel",
    data() {
        return {
            store,
            currentActive: 0
        };
    },
    methods: {
        selectActive(index) {
            this.currentActive = index;
        },

        next() {
            if (this.currentActive !== 2) {
                this.currentActive++
            } else {
                this.currentActive = 0
            }
        },

        startCarousel() {
            setInterval(() => {
                this.next();
            }, 3000);
        }
    },

    mounted() {
        this.startCarousel();
    }
}
</script>

<template>
    <div class="parallax-container">
        <div class="container" v-for="(testimonial, index) in store.aboutTestimonials"
            :class="{ display: currentActive == index }">
            <div class="img-container">
                <img :src="testimonial.img" alt="">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quia distinctio optio quae? Sed veniam iusto
                earum obcaecati eos incidunt ea esse blanditiis tempore, nulla sequi veritatis at aut eum!</p>
            <h3>{{ testimonial.name }}</h3>
            <h4>{{ testimonial.role }}</h4>
            <div class="dots">
                <div v-for="(dotIndex) in 3" :key="dotIndex" :class="{ active: currentActive === dotIndex - 1 }"
                    @click="selectActive(dotIndex - 1)"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.parallax-container {
    position: relative;
    height: 500px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-image: url('/h3-parallax-img-1.png');
    background-size: cover;
    background-attachment: fixed;
    /* Effetto parallasse */
    background-position: center;
    color: white;
}

.container {
    width: 70%;
    height: 400px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: none;
}

.container.display {
    display: flex;
}

.img-container {
    width: 80px;
    height: 80px;
}

img {
    width: 100%;
}

p,
h4,
h3 {
    margin: 20px;
}

h4 {
    text-transform: uppercase;
}

.dots div {
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background-color: rgb(142, 160, 199);
    border-radius: 50%;
    display: inline-block;
}

.dots div:hover,
.dots div.active {
    background-color: white;
}
</style>
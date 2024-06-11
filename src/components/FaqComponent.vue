<script>
export default {
    name: "FaqComponent"
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-50">
                <img src="/about-us-img.png" alt="">
            </div>
            <div class="col-50">
                <h3>FAQs</h3>
                <ul>
                    <li>
                        <div>
                            <font-awesome-icon :icon="['fas', 'caret-down']" />
                            <h4>Can I just enroll in a single course?</h4>
                            <p>Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit
                                consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>What is the refund policy?</h4>
                            <p>Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit
                                consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>What background knowledge is necessary?</h4>
                            <p>Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit
                                consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Do I need to take the courses in a specific order?</h4>
                            <p>Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit
                                consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 90%;
    margin: auto;
}

.row {
    padding: 30px 0;
    display: flex;
}

.col-50 {
    width: 50%;
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

li {
    padding: 30px;
    border: 1px solid rgb(235, 235, 235);
}
</style>
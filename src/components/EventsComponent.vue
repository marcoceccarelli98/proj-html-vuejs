<script>
export default {
    name: "EventsComponent"
}
</script>

<template>
    <div class="container-90">
        <div class="row">
            <div class="col-50 left-col">
                <h2>Empowering children to reach their potential.</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit neani commodo ligula eget dolor. Aenean
                    massa.Cum
                    sociis Theme natoque penatibus et magnis dis.</p>
                <div class="numbers">
                    <div class="stories">
                        <p class="number">168</p>
                        <p>User stories</p>
                    </div>
                    <div class="events">
                        <p class="number">347</p>
                        <p>Scheduled Events</p>
                    </div>
                </div>
            </div>
            <div class="col-50 img">
                <img src="/about-video-button.jpg" alt="">
                <div class="video">
                    <div class="play-container">
                        <font-awesome-icon class="play-icon" :icon="['fas', 'play']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.row {
    padding: 50px 0;
}

.left-col {
    padding-right: 50px;
}

h2 {
    font-size: 40px;
    padding-bottom: 20px;
}

p {
    font-size: 20px;
    line-height: 22px;
    color: gray;
}

.numbers {
    display: flex;
    margin: 60px 0;
}

.numbers p {
    color: $primary-color;
    font-weight: 700;
}

.stories {
    margin-right: 180px;
}

.number {
    font-size: 50px;
    margin-bottom: 20px;
}

img {
    width: 100%;
}

.img {
    position: relative;
}

.video {
    height: 80px;
    width: 80px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.play-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
}
</style>
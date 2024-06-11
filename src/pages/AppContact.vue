<script>
import PagePath from '../components/PagePath.vue';

export default {
    name: "AppContact",
    components: { PagePath },
    data() {
        return {
            title: "Contacts"
        }
    }
}
</script>

<template>
    <PagePath :title="title" />
</template>

<style scoped></style>

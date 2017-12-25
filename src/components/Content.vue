<template>
    <div>
        <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from './Header.vue';
    import AppFooter from './Footer.vue';

    export default {
        name: '',
        components: {
            AppHeader: AppHeader,
            AppFooter: AppFooter
        }
    };
</script>

<style>

</style>

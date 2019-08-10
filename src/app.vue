<template>
    <div id="app">hello world
        <Home></Home>
        <About></About>
    </div>
</template>
<style lang="scss">
    #app{
        background:#f90;
    }
</style>
<script>
import Home from "./components/home/index.vue";
import About from "./components/about/index.vue";
export default {
    name: "App",
    components : {
        Home,
        About
    }
}
</script>
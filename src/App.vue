<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在home和search下是显示的，在登陆注册下是隐藏的   -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>

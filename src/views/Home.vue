<template>
  <div>
    <!-- 三级联动全局组件 -->
    <TypeNav></TypeNav>
    <ListContainee></ListContainee>
    <Recommend></Recommend>
    <RankList></RankList>
    <LikeListVue></LikeListVue>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainee from "@/components/ListContainer.vue";
import Recommend from "@/components/Recommend.vue";
import RankList from "@/components/RankList.vue";
import LikeListVue from "@/components/LikeList.vue";
import Floor from "@/components/Floor.vue";
import Brand from "@/components/Brand.vue";
export default {
  name: "Home",
  components: {
    ListContainee,
    Recommend,
    RankList,
    LikeListVue,
    Floor,
    Brand,
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h1>我是搜索</h1>
    <h1>{{ $route.params.keyword }}</h1>
    <h1>{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
</style>
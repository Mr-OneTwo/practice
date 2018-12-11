<template>
  <div class="home">
    <TopHeader />
    <navList />
    <cont />
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from "@/components/TopHeader.vue";
import navList from "@/components/navList.vue";
import cont from "@/components/cont.vue";

export default {
  name: "home",
  components: {
    TopHeader,
    navList,
    cont
  }
};
</script>

<style>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #f2edf3;
  min-width: 1000px;
}
</style>

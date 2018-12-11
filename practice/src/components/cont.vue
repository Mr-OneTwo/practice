<template>
  <div class="cont">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: "cont"
};
</script>

<style scoped lang="scss">
.cont {
  position: absolute;
  top: 80px;
  left: 270px;
  right: 10px;
  bottom: 10px;
}
</style>

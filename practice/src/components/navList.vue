<template>
  <div class="navList">
    <router-link class="li" to="/one">第一页</router-link>
    <router-link class="li" to="/two">第二页</router-link>
  </div>
</template>

<script>
export default {
  name: "navList"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navList {
  width: 260px;
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
  background: #fff;
}
.li {
  display: block;
  line-height: 50px;
  padding: 0 14px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
  text-decoration: none;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 14px;
  box-sizing: border-box;
}
.li:hover {
  background: #f5f5f5;
}
</style>

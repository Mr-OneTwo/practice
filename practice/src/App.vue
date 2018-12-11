<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  // 公共样式
  * {
  margin: 0;
  padding: 0;
  }
  ol,ul,li {
    list-style: none;
    margin-bottom: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-size: 14px;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .clearfix:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
  }
</style>

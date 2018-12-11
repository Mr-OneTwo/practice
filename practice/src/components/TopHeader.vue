<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/logo.png" class="logo_img">
    </div>
    <div class="search">
      <img src="../assets/search.png" class="search_img">
      <input type="text" placeholder="search projects" class="search_input">
    </div>
    <div class="inform">
      <ul>
        <li @click="toggle(1)">
          <img src="../assets/people.png" class="people">
          <span class="name">落某某</span><b class="tobottom">ˇ</b>
          <dir class="bomb" v-show="show===1">
            <ul>
              <li class="list log">活动日志</li>
              <li class="list switch">切换账户</li>
            </ul>
          </dir>
        </li>
        <li @click="toggle(2)">
          <img src="../assets/message.png" class="message">
          <dir class="bomb mess_fa" v-show="show===2">
            <ul>
              <p class="mess">信息</p>
              <li class="list img_peo">
                <h2 class="mess_name">猪小妹</h2>
                <p class="mess_txt">你好，我想买一张20181105版本</p>
              </li>
              <li class="list img_peo">
                <h2 class="mess_name">猪小妹</h2>
                <p class="mess_txt">你好，我想买一张20181105版本</p>
              </li>
              <li class="list img_peo">
                <h2 class="mess_name">猪小妹</h2>
                <p class="mess_txt">你好，我想买一张20181105版本</p>
              </li>
              <p class="mess"><b>4</b>条新消息</p>
            </ul>
          </dir>
        </li>
        <li @click="toggle(3)">
          <img src="../assets/notice.png" class="message">
          <dir class="bomb system_remb" v-show="show===3">
            <ul>
              <p class="mess">系统提示</p>
              <li class="list img_peo">
                <h2 class="mess_name">新消息</h2>
                <p class="mess_txt">您好，您的订阅已到期</p>
              </li>
              <li class="list img_peo">
                <h2 class="mess_name">新消息</h2>
                <p class="mess_txt">您好，您的订阅已到期</p>
              </li>
              <li class="list img_peo">
                <h2 class="mess_name">新消息</h2>
                <p class="mess_txt">您好，您的订阅已到期</p>
              </li>
              <p class="mess"><b>4</b>条新消息</p>
            </ul>
          </dir>
        </li>
        <li><img src="../assets/out.png" class="message"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      show: ""
    };
  },
  methods: {
    toggle: function(index) {
      if (this.show === index) {
        this.show = 0;
      } else {
        this.show = index;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: #fff;
  box-shadow: #f2edf3 2px 2px 6px;
}
.logo {
  width: 260px;
  height: 100%;
  text-align: center;
  float: left;
}
.logo_img {
  width: 165px;
  margin-top: 18px;
}
.search {
  float: left;
  width: 250px;
  text-align: center;
}
.search_img {
  width: 20px;
  height: auto;
  margin-right: 15px;
}
.search_input {
  width: 185px;
  height: 70px;
  border: 0;
  outline: none;
}
.inform {
  width: 435px;
  height: 100%;
  float: right;
}
.inform > ul > li {
  float: left;
  height: 70px;
  position: relative;
  margin-left: 30px;
  padding: 0 15px;
  cursor: pointer;
}
.people {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-top: 15px;
  margin-right: 15px;
}
.name {
  color: #333;
  position: relative;
  top: 12px;
}
.tobottom {
  color: #9c9fa6;
  position: relative;
  top: 16px;
  margin: 0 5px;
}
.message {
  width: 20px;
  height: auto;
  margin-top: 25px;
}
.bomb {
  position: absolute;
  top: 75px;
  min-width: 120px;
  left: -30%;
}
.bomb .list {
  padding: 15px 15px 15px 40px;
  border-bottom: 1px solid #ebedf2;
}
.bomb > ul {
  background: #fff;
  box-shadow: #dbd6dc 2px 3px 6px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
}
.bomb .log {
  background: url(../assets/log.png) no-repeat 10px center;
  background-size: 20px;
}
.bomb .switch {
  background: url(../assets/switch.png) no-repeat 10px center;
  background-size: 20px;
}
.mess {
  line-height: 44px;
  width: 100%;
  text-align: left;
  padding-left: 10px;
  border-bottom: 1px solid #ebedf2;
  box-sizing: border-box;
}
.mess b {
  color: #0084ff;
  margin-right: 5px;
}
.bomb .img_peo {
  background: url(../assets/another_people.png) no-repeat 10px center;
  background-size: 40px;
}
.mess_fa {
  width: 260px;
  left: -110px;
  max-height: 321px;
}
.mess_fa .list,
.system_remb .list {
  padding-left: 60px;
}
.mess_fa .mess_name,
.system_remb .mess_name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 30px;
}
.mess_fa .mess_txt,
.system_remb .mess_txt {
  font-size: 14px;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.system_remb {
  width: 260px;
  left: -190px;
  max-height: 321px;
}
.system_remb .list {
  background: url(../assets/system_mess.png) no-repeat 10px center;
  background-size: 40px;
}
</style>

<template>
  <div class="common_nav_content">
    <div class="top">
      头部内容
    </div>
    <div class="middle">
      <div class="left_nav"></div>
      <div class="right_content">
        <div class="nav_tags">
          <span><router-link to=""></router-link></span>
          <span><router-link to=""></router-link></span>
          <span><router-link to=""></router-link></span>
        </div>
        <div class="middle_content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonNav'
} 
</script>

<style lang="less" scoped>
.common_nav_content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 60px;
    background-color: aqua;
  }
  .middle {
    width: 100%;
    flex: 1;
    background-color: blueviolet;
    display: flex;
    .left_nav {
      width: 100px;
      height: 100%;
      background-color: aquamarine;
    }
    .right_content {
      flex: 1;
      height: 100%;
      background-color: coral;
      display: flex;
      flex-direction: column;
      .nav_tags {
        width: 100%;
        height: 25px;
        background-color: #ffffff;
      }
      .middle_content {
        width: 100%;
        flex: 1;
        background-color: burlywood;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}
</style>

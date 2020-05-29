<template>
  <div class="home">
    <div class="navs">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
          >
          <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">GIS地图</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">监测中心</span>
            </el-menu-item>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>实时监测</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">实时水量数据</el-menu-item>
                <el-menu-item index="3-2">实时排口液位</el-menu-item>
                <el-menu-item index="3-3">水平衡分析(30天)</el-menu-item>
                <el-menu-item index="3-4">实时水质数据</el-menu-item>
                <el-menu-item index="3-5">污染物排放量</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="contents">home接收到的 rid是 {{this.$route.query.rid}}</div>
  </div>
</template>

<script>
import Navs from "com/Navs";
export default {
  name: "Home",
  components: {
    Navs
  },
  mounted() {
    var b = new Date();
    console.log(b);
  },
  beforeUpdate() {
    var c = new Date();
    console.log(c);
  }
};
</script>
<style>
.home {
  height: 90%;
  height: -moz-calc(100% - 60px);
  height: -webkit-calc(100% - 60px);
  height: calc(100% - 60px);
  position: relative;
}
.navs {
  width: 145px;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: pink;
}
.contents {
  width: 90%;
  width: -moz-calc(100% - 145px);
  width: -webkit-calc(100% - 145px);
  width: calc(100% - 145px);
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: skyblue;
}
</style>
<template>
    <div class="navs">
       <el-row class="tac">
        <el-col :span="24">
          <el-menu
            router
            class="el-menu-vertical-demo"
            :default-active="$route.path"
          >
          <el-menu-item index="/gis">
              <i class="el-icon-menu"></i>
              <span slot="title">GIS地图</span>
            </el-menu-item>
            <el-menu-item index="/momicenter">
              <i class="el-icon-menu"></i>
              <span slot="title">监测中心</span>
            </el-menu-item>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>实时监测</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/shiData">实时水量数据</el-menu-item>
                <el-menu-item index="/shiDatapai">实时排口液位</el-menu-item>
                <el-menu-item index="">水平衡分析(30天)</el-menu-item>
                <el-menu-item index="">实时水质数据</el-menu-item>
                <el-menu-item index="">污染物排放量</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
            <el-submenu index="">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>统计分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="">水量统计</el-menu-item>
                <el-menu-item index="">水质统计</el-menu-item>
                <el-menu-item index="">实时历史曲线</el-menu-item>
                <el-menu-item index="">排口液位</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name:"Navs",
        data(){
            return {
            }
        }
    }
</script>
<style>
   
</style>
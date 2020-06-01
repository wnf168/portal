<template>
  <el-container style="height:100%;">
    <el-header>
    <Head></Head>
    </el-header>
    <el-container>
        <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import Head from "com/Head";
export default {
  name: "gis",
  components: {
    Head
  }
};
</script>
<style>
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }
  
 
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>>
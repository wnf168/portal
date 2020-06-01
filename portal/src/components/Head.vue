<template>
  <div class="newmaphead">
    <img :src="logos" class="fl logo" />
    <div class="treeValue">
      <div id="treeValue" @click.stop="showhideEnterprise()">点击查看企业实时信息</div>
      <div class="enterpriseData enterpriseDatascroll" v-show="isEnterprise">
        <ul id="tree" class="ztree"></ul>
      </div>
    </div>
    <div class="fr">
      <ul>
        <li class="username">
          <img :src="photo" />
          <span id="username"></span>
          <div class="rightliner"></div>
        </li>
        <li class="loginout">
          <a href="#" @click="loginouthander">
            <img :src="loginout" />
            <span>退出</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/assets/zThree/css/zTreeStyle.css"
import "@/assets/zThree/js/jquery-migrate-1.2.1.js"
import "@/assets/zThree/js/jquery.ztree.all-3.5.min.js"
import "@/assets/zThree/js/jquery.ztree.exhide-3.5.min.js"
import {MtrSearchZTree} from "@/assets/zThree/js/MtrSearchZTree.js"
import data from "utils/threedata"
export default {
  name: "Head",
  data() {
    return {
      isEnterprise: false, //企业窗口是否显示隐藏
      logos: require("assets/img/logo2.png"),
      photo: require("assets/img/photo.png"),
      loginout: require("assets/img/loginout.png")
    };
  },
  methods: {
    showhideEnterprise() {
      //企业窗口是否显示隐藏事件
      this.isEnterprise = !this.isEnterprise;
    },
    loginouthander() {
      this.$router.push("/login");
    },
    zTreeclick(event,treeId,treeNode){
				if(treeNode.R_ID){
					// console.log(treeNode.R_ID,treeNode.RIGHTS,treeNode.name)
          // this.goindex(treeNode.R_ID,treeNode.RIGHTS,treeNode.name)
          let query = {};
          query.rid = treeNode.R_ID;
          query.name = treeNode.name;
          this.$router.push({
              name:'Home',
              // query
          })
				}
			},
    priseData(){
      var setting = {
					callback:{
						onClick:this.zTreeclick,
						onRightClick:this.zTreerightclick,
						view: {
							fontCss: this.getFont,
							nameIsHTML: true
						}
					}
        };
        $.fn.zTree.init($("#tree"), setting, this.zNodes=data.result.zNodes);
        new MtrSearchZTree();
    }
  },
  mounted(){
    this.priseData();
  }
};
</script>
<style  scoped>
ul li {
  list-style: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.fr ul {
  font-size: 14px;
  margin-right: 30px;
  color: #fff;
}
.fr ul li {
  position: relative;
  float: left;
}
.width50 {
  width: 50%;
  float: left;
  font-size: 14px;
  color: #141414;
}
.width50 p {
  margin-bottom: 10px;
}
.width50 .p1 span {
  margin-left: 55px;
}
.width50 .p2 {
  height: 80px;
}
.width50 .p2 span {
  float: left;
  height: 80px;
}
.rightliner {
  position: absolute;
  right: 0;
  top: 20px;
  width: 1px;
  height: 20px;
  background-color: #000000;
  box-shadow: 0px 1px 0px 0px #ffffff;
  opacity: 0.3;
}
.fr ul .username img {
  vertical-align: middle;
  border-radius: 50%;
}
.fr ul .username span {
  margin-left: 10px;
  margin-right: 20px;
}
.fr ul .loginout {
  cursor: pointer;
}
.fr ul .loginout a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.fr ul .loginout img {
  vertical-align: middle;
  margin-left: 20px;
  /* display: none; */
}
.fr ul .loginout span {
  margin-left: 10px;
  color: #fff;
}
.newmaphead {
  height: 60px;
  line-height: 60px;
  background: #3e8ef7;
}
.newmaphead .logo {
  margin-top: 7px;
}
.mapcenter {
  height: 90%;
  height: -moz-calc(100% - 100px);
  height: -webkit-calc(100% - 100px);
  height: calc(100% - 100px);
  position: relative;
}
.mapfooter {
  text-align: center;
  color: #646464;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fafafa;
  box-shadow: inset 0px 1px 0px 0px #e4e6e5;
}
#mapvue {
  width: 100%;
  height: 100%;
}
.tdht-nav {
  width: 20%;
  height: 40px;
  position: absolute;
  z-index: 2;
}
.tdht-nav li {
  float: left;
  width: 128px;
  height: 38px;
  line-height: 38px;
  color: #646464;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  background-color: #f1f4f5;
}
.tdht-nav li.active {
  background-color: #529af7;
  color: #fff;
}
.tdht-content {
  width: 100%;
  height: 90%;
  height: -moz-calc(100% - 0px);
  height: -webkit-calc(100% - 0px);
  height: calc(100% - 0px);
}
.tdht-content .content-div {
  display: none;
}
.tdht-content .active {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}
#newdatabox.active {
  position: relative;
  left: 0px;
  top: 40px;
  height: 90%;
  height: -moz-calc(100% - 40px);
  height: -webkit-calc(100% - 40px);
  height: calc(100% - 40px);
}
.lowliner {
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 2;
  background: #fafafa;
  color: #646464;
  width: 410px;
  height: 100px;
}
.lowliner dl {
  float: left;
  margin-top: 20px;
  margin-left: 30px;
  text-align: center;
}
.lowliner dd {
}
.lowliner dt {
  margin-top: 4px;
}
.treeValue {
  width: 240px;
  height: 36px;
  line-height: 36px;
  position: relative;
  display: inline-block;
  background: #3b87ea;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin-left: 30px;
  margin-top: 12px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  font-family: "微软雅黑";
  position: relative;
}
#treeValue {
  /*background: url(../../../static/images/icondown.png) no-repeat 192px 15px;*/
}
.enterpriseData {
  width: 500px;
  height: 250px;
  border-radius: 4px;
  position: absolute;
  top: 48px;
  left: 0;
  background: #fff;
  box-shadow: -5px 5px 10px -4px #cccccc, 5px 5px 10px -4px #cccccc;
  z-index: 3;
  padding-top: 0px;
  color: #323232;
  overflow-y: scroll;
}
[v-cloak] {
  display: none;
}
.enterpriseData .header-info {
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
}
.enterpriseData .header-info span {
  border-radius: 3px;
  padding: 1px 4px;
  margin-left: 4px;
}
.enterpriseTab {
  height: 40px;
  line-height: 40px;
  margin-top: 6px;
}
.enterpriseTab ul {
  height: 40px;
  border-bottom: 1px solid #ddd;
}
.enterpriseTab ul li {
  width: 110px;
  float: left;
  height: 40px;
  text-align: center;
  position: relative;
  background-color: #fbfaf8;
  border-radius: 3px 3px 0px 0px;
  border: solid 1px #dddddd;
  border-bottom: none;
}
.enterpriseTab ul li.active {
  color: #0071bc;
}
.enterpriseTab ul li.active::before {
  content: "";
  width: 110px;
  height: 3px;
  background-color: #3e8ef7;
  position: absolute;
  left: 0px;
  top: 0px;
}
.enterpriseTab ul li.active::after {
  content: "";
  width: 110px;
  height: 2px;
  background-color: #fbfaf8;
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.enterpriseList {
  height: 180px;
  background: rgba(219, 225, 232, 0.3);
  margin-top: 1px;
}
.enterpriseList ul {
  height: 160px;
  overflow-y: scroll;
  padding: 10px;
}
.enterpriseList ul li {
  float: left;
  margin-right: 8px;
  margin-bottom: 10px;
  padding: 0px 10px;
  width: 86px;
  text-align: center;
}
.enterpriseList ul li a {
  color: #323232;
  text-decoration: none;
}
.piebox {
  height: 180px;
  width: 500px;
  background: rgba(255, 255, 255, 0.8);
  border: solid 1px rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  bottom: 40px;
  z-index: 2;
}
.piebox .width33 {
  width: 33.3333%;
  height: 100%;
  float: left;
  position: relative;
}
.pieboxfont {
  position: absolute;
  left: 8px;
  top: 120px;
  height: 40px;
  font-size: 13px;
  color: #323232;
}
.piefont1 .areastyle {
  width: 25px;
  height: 14px;
  background-color: #006464;
  display: inline-block;
  border-radius: 3px;
  margin-right: 5px;
}
.piefont1 .areabg2 {
  background-color: #e73cff;
}
.piefont1 .areabg3 {
  background-color: #ffbe29;
}
.piefont1 .areabg4 {
  background-color: #c33531;
}
.newdataheader {
  height: 40px;
  line-height: 40px;
}
.newdataheader h3 {
  color: #323232;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  padding-left: 20px;
}
.newdataheader h3::before {
  content: "";
  width: 6px;
  height: 16px;
  background: #388ad4;
  position: absolute;
  left: 6px;
  top: 12px;
}
#newData tr {
  height: 40px;
  line-height: 40px;
}
#newData tr td {
  font-size: 11px;
  color: #323232;
  text-align: center;
}
#newData tr:nth-of-type(2n) {
  background: #e9edf6;
}
#theader tr {
  height: 60px;
  line-height: 60px;
}
#div0 table tr {
  height: 60px;
}
</style>
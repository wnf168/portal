<template>
  <div class="topContent" id="zutaivue" style="height:890px;">
    <div class="secondCount" style="flex: 2">
      <div class="lineHeader" style="margin-bottom:14px;">
        <img width="15px" class="module-img" src="static/zutai2/3gang.png" />
        <span class="module">监控系统</span>
        <p
          :style="{'float':'right','color':gypsline==0?'red':'green'}"
          v-cloak
        >{{gypsline==0?'当前设备:离线状态':''}}</p>
        <span style="float:right;margin-right:30px;">{{strResult}}</span>
      </div>
      <div class="main">
        <span class="tcolorstyle t11">工业进水</span>
        <span class="tcolorstyle t12">工业进水流量计</span>
        <span class="tcolorstyle tcams">视频</span>
        <img src="static/zutai2/gArrow.png" class="g1" />
        <img src="static/zutai2/cam.png" class="cam1" />
        <img src="static/zutai2/cams.png" class="cams" id="cams" />
        <img src="static/zutai2/box1.png" class="rbox1" />
        <img src="static/zutai2/box1.png" class="rbox2" />
        <img src="static/zutai2/box1.png" class="rbox3" />
        <div class="boxT1 boxTstyle">
          <p v-for="item in industrySupplyDatas">
            <label>{{item.param_name_cn}}</label>：
            <span>{{item.param_value}}</span>
            {{item.unit}}
          </p>
        </div>
        <img src="static/zutai2/wuwang.png" class="wuwang" />
        <img src="static/zutai2/ti.png" class="ti" />
        <img src="static/zutai2/zhong.png" class="zhong1" />
        <img src="static/zutai2/zhong.png" class="zhong2" />
        <img src="static/zutai2/no1.png" class="no1" />
        <img src="static/zutai2/no2.png" class="no2" />
        <img src="static/zutai2/bigbox.png" class="bigbox" />
        <img src="static/zutai2/ba.png" class="ba" />
        <div class="boxT4 boxTstyle" v-show="middlePoolDatas2.length>0">
          <p v-for="item in middlePoolDatas2">
            <label>{{item.param_name_cn}}</label>：
            <span>{{item.param_value}}</span>
            {{item.unit}}
          </p>
        </div>

        <div class="boxT5 boxTstyle" v-show="middlePoolDatas.length>0">
          <p v-for="item in middlePoolDatas">
            <label>{{item.param_name_cn}}</label>：
            <span>{{item.param_value}}</span>
            {{item.unit}}
          </p>
        </div>
        <div class="top conduit_w">
          <canvas id="top" :class="{'topstyle':true,'nowater':gystate}"></canvas>
        </div>
        <div class="right1 conduit_h">
          <canvas id="right1" :class="{'rotate90':true,'rightstyle':true,'nowater':gystate}"></canvas>
        </div>
        <div class="right2 conduit_h">
          <canvas id="right2" :class="{'rotate90':true,'rightstyle':true,'nowater':gystate}"></canvas>
        </div>
        <div class="right3 conduit_h">
          <canvas id="right3" :class="{'rotate90':true,'rightstyle':true,'nowater':gystate}"></canvas>
        </div>

        <div class="ver1 conduit_h verstyle">
          <canvas id="ver1" :class="{'rotate90':true,'verstyle2':true,'nowater':gystate}"></canvas>
        </div>
        <div class="ver2 conduit_h verstyle">
          <canvas id="ver2" :class="{'rotate90':true,'verstyle2':true,'nowater':gystate}"></canvas>
        </div>
        <div class="ver3 conduit_h verstyle">
          <canvas id="ver3" :class="{'rotate90':true,'verstyle2':true,'nowater':gystate}"></canvas>
        </div>
        <div class="cro1 conduit_w r">
          <canvas id="cro1" class="rotate180" :class="{'rotate180':true,'nowater':gystate}"></canvas>
        </div>
        <div class="ver4 conduit_h verstyle">
          <canvas id="ver4" :class="{'rotate90':true,'verstyle2':true,'nowater':gystate}"></canvas>
        </div>
        <div class="cro2 conduit_w r">
          <canvas id="cro2" :class="{'nowater':gystate}"></canvas>
        </div>
        <div class="cro3 conduit_w r">
          <canvas id="cro3" v-show="!glstate" :class="{'nowater':gystate,'rotate180':true}"></canvas>
        </div>
        <div class="ver5 conduit_h verstyle">
          <canvas id="ver5" :class="{'rotate90':true,'verstyle2':true,'nowater':gystate}"></canvas>
        </div>

        <div class="ver6 conduit_h verstyle">
          <canvas id="ver6" :class="{'rotate90':true,'verstyle2':true,'nowater':glstate}"></canvas>
        </div>
        <div class="cro4 conduit_w r">
          <canvas id="cro4" :class="{'nowater':glstate,'rotate180':true}"></canvas>
        </div>
        <div class="ver7 conduit_h verstyle">
          <canvas id="ver7" :class="{'rotate90':true,'verstyle2':true,'nowater':glstate}"></canvas>
        </div>
        <div class="cro5 conduit_w r">
          <canvas v-show="!glstate" id="cro5" :class="{'nowater':glstate,'rotate180':true}"></canvas>
        </div>
        <div class="ver8 conduit_h verstyle">
          <canvas id="ver8" :class="{'rotate270':true,'verstyle2':true,'nowater':glstate}"></canvas>
        </div>
        <div class="ver9 conduit_h verstyle">
          <canvas id="ver9" :class="{'rotate90':true,'verstyle2':true,'nowater':glstate}"></canvas>
        </div>
        <div class="boxT6 boxTstyle">
          <p v-for="item in gyp1">
            <label>{{item.param_name_cn}}</label>：
            <span>{{item.param_value}}</span>
            {{item.unit}}
          </p>
        </div>
        <div class="boxT7 boxTstyle">
          <p v-for="item in gyp2">
            <label>{{item.param_name_cn}}</label>：
            <span>{{item.param_value}}</span>
            {{item.unit}}
          </p>
        </div>
        <div class="cro6 conduit_w r">
          <canvas id="cro6" :class="{'nowater':glstate,'rotate180':true}"></canvas>
        </div>
        <div class="boxT8 boxTstyle" v-show="rainDrainageDatas.length>0">
          <p v-for="item in rainDrainageDatas">
            <label>{{item.param_name_cn}}</label>：
            <span>{{item.param_value}}</span>
            {{item.unit}}
          </p>
        </div>
        <span class="tcolorstyle t31">
          工业污水
          <br />排放口
        </span>
        <img src="static/zutai2/bArrow.png" class="b31" />
        <img src="static/zutai2/fan.png" class="fan" />
        <span class="tcolorstyle t32">反控截污阀</span>
        <img src="static/zutai2/cam.png" class="cam3" />
        <img src="static/zutai2/cai.png" class="cai" />
        <span class="tcolorstyle t33">采水泵</span>
        <span class="tcolorstyle t34">工业排水流量计</span>
        <span class="tcolorstyle t35">巴士流量槽</span>
        <span class="tcolorstyle t36">生产区进水</span>
        <span class="tcolorstyle t37">污水处理站</span>
        <span class="tcolorstyle t38">水平衡智慧监测仓</span>
        <span class="tcolorstyle t39">污泥脱水机</span>
        <span class="tcolorstyle t40">中间池2</span>
        <span class="tcolorstyle t41">中间池1</span>
        <span class="tcolorstyle t43">雨水排放口</span>
        <div class="tcolorstyle t42">厂区雨水收集</div>
        <img src="static/zutai2/bArrow.png" class="b3" />
        <img src="static/zutai2/buArrow.png" class="buArrow" />
        <img src="static/zutai2/blArrow.png" class="blArrow" />
        <img src="static/zutai2/rbb.png" class="rbb1" />
        <img src="static/zutai2/rbb.png" class="rbb2" />
        <img src="static/zutai2/rbb.png" class="rbb3" />
        <div class="lifearea">
          <span class="tcolorstyle t21">生活进水</span>
          <img src="static/zutai2/gArrow.png" class="g2" />
          <span class="tcolorstyle t22">
            生活污水
            <br />排放口
          </span>
          <span class="tcolorstyle t23">生活办公区</span>
          <img src="static/zutai2/bArrow.png" class="b2" />
          <img src="static/zutai2/cam.png" class="cam2" />
          <img src="static/zutai2/house.png" class="house" />
          <div class="boxT2 boxTstyle" v-show="livingSupplyDatas.length>0">
            <p v-for="item in livingSupplyDatas">
              <label>{{item.param_name_cn}}</label>：
              <span>{{item.param_value}}</span>
              {{item.unit}}
            </p>
          </div>
          <div class="boxT3 boxTstyle" v-show="livingDrainageDatas.length>0">
            <p v-for="item in livingDrainageDatas">
              <label>{{item.param_name_cn}}</label>：
              <span>{{item.param_value}}</span>
              {{item.unit}}
            </p>
          </div>
          <div class="top2 conduit_w"></div>
          <div class="right21 conduit_h"></div>
          <div class="bottom conduit_w r"></div>
        </div>
      </div>
    </div>
    <div class="bgWidth15"></div>
    <div id="sec_third_div" class="secondCount thirdCount permissions_div">
      <!-- 排污许可排放限值 -->
      <div id="map_com_conf">
        <div class="lineHeader">
          <img width="15px" class="module-img" src="static/zutai2/3gang.png" />
          <span class="module">排污许可排放限值</span>
        </div>
        <div id="tab_title" style="color:#28A2DB"></div>
        <table
          id="reportTable_com"
          cellspacing="0"
          style="margin-left: 20px;margin-top:15px;border-color:#dfe6ec; width: 90%;height:32px;line-height:32px;color:#646464;text-align: center;font-size: 14px;"
        >
          <thead>
            <tr>
              <td>污染物排放名称</td>
              <td>排放限值</td>
              <td>日废水排放量限值</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Createline from  '../../static/zutai2/js/zk_liudong.js'
// import "@/assets/js/zk_liudong.js"
export default {
  name: "Momicenter",
  data(){
      return {
          waterdata:{
            time:100,//运动速度
            mx:0,//起点位置
            my:6,
            ly:6,
            canvas_h:10,
            vx:4,
            vy:0,
            line_w:4,
            fx:"w",
            width:20, //线长
            jiange:16, //两个间隔距离
            active:"0"
        },
          industryDrainageDatas:[],//工业排水
            industrySupplyDatas:[],//工业给水
            rainDrainageDatas:[],//雨水
            middlePoolDatas:[],//中间池1
            middlePoolDatas2:[],//中间池2
            livingSupplyDatas:[],//生活排水
            livingDrainageDatas:[],//生活给水,
            gyjsls:null,//工业进水流速
            gyjsline:1,//工业进水设备是否在线 0离线 1在线
            gypsls:null,//工业排水流速
            gypsline:1,//工业排水设备是否在线 0离线 1在线
            minupdata:60,//设置时间
            gystate:false,//true是没有水流动 false有水流动
            glstate:false,
            strResult:'',
            gyp1:[],//
            gyp2:[],
      }
  },
  mounted() {
    // console.log(this.$store.state.rid)
    this.liushui();
    // console.log(new Createline({}))
  },
  methods:{
      liushui(){
        this.liuFn(950,"#33ac44","top");
        this.liuFn(90,"#33ac44","right1");
        this.liuFn(90,"#33ac44","right2");
        this.liuFn(90,"#33ac44","right3");
        this.liuFn(90,"#eb8f19","ver1");
        this.liuFn(90,"#eb8f19","ver2");
        this.liuFn(90,"#eb8f19","ver3");
        this.liuFn(250,"#eb8f19","cro1");
        this.liuFn(20,"#eb8f19","ver4");
        this.liuFn(160,"#eb8f19","cro2");
        this.liuFn(95,"#eb8f19","ver5");
        this.liuFn(40,"#eb8f19","cro3");
        this.liuFn(30,"#183264","ver6");
        this.liuFn(50,"#183264","cro4");
        this.liuFn(90,"#183264","ver7");
        this.liuFn(755,"#183264","cro5");
        this.liuFn(320,"#183264","ver8");
        this.liuFn(320,"#096d38","ver9");
      },
      liuFn(width,color,ele){
        this.waterdata.canvas_w =width;
        this.waterdata.color=color;
        var res = new Createline(this.waterdata);
        res.begin(ele,this.waterdata);
      }
  },
  computed: {
    ...mapState({
      rid: state => state.rid
    })
  },
  beforeUpdate() {
    //rid更新变化时加载
    console.log(new Date());
  }
};
</script>
<style scoped>
@import "../../static/zutai2/css/index.css";
@import "../../static/zutai2/css/init.css";
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
  overflow-x: hidden;
}
p {
  margin-left: 5px;
  font-size: 14px;
}
.topContent {
  display: flex;
  flex-flow: row;
}
table,
table td,
table th {
  border-collapse: collapse;
  border: 1px solid #dfe6ec;
}
table thead tr:nth-child(1) td,
table thead tr:nth-child(1) th {
  background: #eef1f6;
  font-weight: 700;
}
.secondCount,
.thirdCount {
  position: relative;
  flex: 1;
}
.secondCount {
  background: #fff;
  overflow: hidden;
  padding-bottom: 5px;
}
.thirdCount {
  position: relative;
}
.video_page {
  position: relative;
  width: 93%;
  height: 84%;
  left: 25px;
  padding-top: 5px;
}
.video_class {
  height: 90px;
  position: relative;
  width: 100%;
}
.video_class_v2 {
  height: 130px;
}
.sjFont .bf33 {
  width: 33%;
  display: inline-block;
  float: left;
  text-align: center;
}
.bgWidth15 {
  width: 15px;
  background: #f1f4f5;
}
.bgWidth100 {
  width: 100%;
  height: 15px;
  background: #f1f4f5;
}
.lineHeader {
  margin: 0 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
}
.lineHeader img {
  vertical-align: text-top;
}
#map_com_video {
  position: relative;
}
.tcams {
  position: absolute;
  left: 548px;
  top: 160px;
}
.cams {
  position: absolute;
  left: 540px;
  top: 114px;
  z-index: 2;
  cursor: pointer;
}
.tabledata1 {
  position: absolute;
  top: 78px;
  left: 160px;
  width: 300px;
}

#myDiagramDiv2 {
  position: absolute !important;
  top: 200px;
  right: 18px;
}
#myDiagramDiv3 {
  position: absolute !important;
  top: 155px;
  left: 0;
}
#myDiagramDiv4 {
  position: absolute !important;
  top: 479px;
  right: 0;
}
#myDiagramDiv5 {
  position: absolute !important;
  top: 536px;
  left: 0;
}
.tabledata2 {
  top: 190px;
  width: 400px;
}
.tabledata5 {
  top: 310px;
  width: 290px;
}
.tabledata2,
.tabledata4,
.tabledata5 {
  position: absolute;
  left: 10px;
}
.tabledata4 {
  top: 450px;
  width: 300px;
}
.tabledata3 {
  top: 647px;
  left: 0px;
  width: 365px;
}
.fontposition,
.tabledata3 {
  position: absolute;
}
.fontposition span {
  color: #0071bc;
  font-size: 14px;
}
.lifewather {
  top: 137px;
  left: 10px;
}
.lifewatherout {
  top: 263px;
  left: 10px;
}
.indwather {
  top: 27px;
  left: 10px;
}
.induwather {
  top: 27px;
  left: 342px;
}
.yelv {
  top: 418px;
  right: 177px;
}
.caiwater {
  position: absolute;
  top: 630px;
  left: 423px;
  z-index: 2;
}
.boxlv,
.yelv {
  position: absolute;
}
.boxlv {
  top: 347px;
  right: 321px;
}
.lifewatherwork {
  top: 263px;
  left: 338px;
}
.watherca {
  top: 324px;
  left: 348px;
}
.watherarea {
  top: 132px;
  left: 648px;
}
.watherfont1 {
  top: 394px;
  right: 230px;
}
.watherfont2 {
  top: 314px;
  right: 110px;
}
.watherfont3 {
  top: 406px;
  right: 130px;
}
.watherfont4 {
  top: 707px;
  right: 214px;
}
.watherfont5 {
  top: 648px;
  right: 292px;
}
.watherfont6 {
  top: 778px;
  right: 398px;
}
.watherfont7 {
  top: 402px;
  right: 442px;
}
.watherfont8 {
  top: 400px;
  left: 75pt;
}
.lifewatherout1 {
  top: 510px;
  left: 10px;
}
.lifewatherout2 {
  top: 777px;
  left: 10px;
}
.lifewatherout3 {
  top: 535px;
  left: 340px;
}
.lifewatherout4 {
  top: 738px;
  left: 494px;
  z-index: 2;
}
[v-cloak] {
  display: none;
}
video::-webkit-media-controls-mute-button {
  display: none !important;
}
</style>
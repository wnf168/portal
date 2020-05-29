<template>
    <div id="treelist" class="treelist">
						<div id='mtree-demo' class='mtree-demo enterpriseData enterpriseDatascroll'>
							<ul id="tree" class="ztree"></ul>
						</div>
    </div>
</template>

<script>
// import "@/assets/zThree/css/zTreeStyle.css"
import "@/assets/zThree/js/jquery-migrate-1.2.1.js"
import "@/assets/zThree/js/jquery.ztree.all-3.5.min.js"
import "@/assets/zThree/js/jquery.ztree.exhide-3.5.min.js"
import {MtrSearchZTree} from "@/assets/zThree/js/MtrSearchZTree.js"
import http from "axios"
  export default {
  name: 'Index',
  data(){
    return {
    "result": {
        "zNodes": [{
          "childrenSize": 10,
          "children": [{
            "childrenSize": 10,
            "children": [{
              "childrenSize": 10,
              "children": [{
                "childrenSize": 3,
                "children": [{
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "龙华区人民医院",
                  "group_type": 3,
                  "R_ID": 75503010001,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550901"
                }, {
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "军龙医院",
                  "group_type": 3,
                  "R_ID": 75503010003,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550901"
                }, {
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "深圳领威科技",
                  "group_type": 3,
                  "R_ID": 75503010009,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550901"
                }],
                "name": "龙华街道(3)"
              }, {
                "childrenSize": 4,
                "children": [{
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "怡宁医院",
                  "group_type": 3,
                  "R_ID": 75503010004,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550902"
                }, {
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "致君制药",
                  "group_type": 3,
                  "R_ID": 75503010005,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550902"
                }, {
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "长安标致雪铁龙",
                  "group_type": 3,
                  "R_ID": 75503010006,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550902"
                }, {
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "深圳烟草工业",
                  "group_type": 3,
                  "R_ID": 75503010008,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550902"
                }],
                "name": "观澜街道(4)"
              }, {
                "childrenSize": 2,
                "children": [{
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "龙华区中心医院",
                  "group_type": 3,
                  "R_ID": 75503010002,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550903"
                }, {
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "乐厨食品",
                  "group_type": 3,
                  "R_ID": 75503010007,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550903"
                }],
                "name": "福城街道(2)"
              }, {
                "childrenSize": 1,
                "children": [{
                  "R_BUILD": 0,
                  "RIGHTS": "34996011596560019534004393299411782226721232501211380481996877175626359469098398577247599586919317504",
                  "name": "国盛实业",
                  "group_type": 3,
                  "R_ID": 75503010010,
                  "font": "{'color':'crimson'}",
                  "PARENT_ID": "7550904"
                }],
                "name": "大浪街道(1)"
              }],
              "name": "龙华(10)"
            }],
            "name": "深圳(10)",
            "open": true
          }],
          "name": "广东(10)",
          "open": true
        }]
      }
    }
  },
  methods:{
    zTreeclick(event,treeId,treeNode){
				if(treeNode.R_ID){
					console.log(treeNode.R_ID,treeNode.RIGHTS,treeNode.name)
					// this.goindex(treeNode.R_ID,treeNode.RIGHTS,treeNode.name)
				}
			},
    priseData(){
				// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
				var setting = {
					callback:{
						onClick:this.zTreeclick
					}
        };
        var zNodes = [
          {name:"test1", open:true, children:[
              {name:"test1_1"}, {name:"test1_2"}]},
          {name:"test2", open:true, children:[
              {name:"test2_1"}, {name:"test2_2"}]}
          ];					
        $.fn.zTree.init($("#tree"), setting, this.result.zNodes);
       new MtrSearchZTree();
			},
  },
  mounted(){
   // this.priseData();
  }
}
</script>

<style  scoped>
.example{
			float:left;
			width:50%;
		}
		.enterpriseData{
			width:350px;
			overflow-y: scroll;
		}
		.enterpriseList ul li{
			width:143px;
		}
		.enterpriseDatascroll{
			overflow-y: scroll;
		}
		.listdata{
			margin: 0px 20px;
			text-align: center;
			display: inline-block;
			cursor: pointer;
		}
		.enterpriseDatascroll::-webkit-scrollbar {
			/*滚动条整体样式*/
			width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
			height: 1px;
		}
		.enterpriseDatascroll::-webkit-scrollbar-thumb {
			/*滚动条里面小方块*/
			border-radius: 10px;
			box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
			background   : #3E8EF7;
		}
		.enterpriseDatascroll::-webkit-scrollbar-track {
			/*滚动条里面轨道*/
			box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
			border-radius: 10px;
			background   : #ededed;
		}
		.enterFactory{
			color:green;
		}
		.research{
			color:orange;
		}
		.roadwork{
			color:crimson;
		}
		.datainput{
			padding-left: 10px;
		}
		.searchtree{
			width: 200px;
			height: 30px;
			line-height: 30px;
			padding-left: 12px;
			border-radius: 4px;
			border: 1px solid #ddd;
			margin-left: 12px;
		}
		.amap-controls{
			position: absolute;
			left: 0px;
			top: 0px;
			width: 64px;
			height: 64px;
			z-index: 155;
		}
</style>
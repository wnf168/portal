<template>
    <div id="container" class="mapcenter">
        
    </div>
</template>

<script>
import {getMapData} from "api/map"
import pointdata from "utils/mapdata"
var map;
    export default {
        name:"Map",
        data(){
            return {
                status0:require("assets/img/status0.png"),
                status1:require("assets/img/status1.png"),
                status2:require("assets/img/status2.png"),
                status3:require("assets/img/status3.png"),
                bigimg:require("assets/577img/75501010026.jpg"),
            }
        },
        methods:{
            getMap(){
                getMapData().then(back_data=>{
                    var getdata  = back_data.result;
                    var mapdata = [];
                    for(var i=0;i<getdata.length;i++){
						for(var j=0;j<pointdata.result.length;j++){
							if(getdata[i].rId==pointdata.result[j].rId){
								mapdata.push({
									rId:getdata[i].rId,
									name:getdata[i].name,
									build:getdata[i].build,
									state:getdata[i].state,
									lat:pointdata.result[j].lat,
									lon:pointdata.result[j].lon
								})
							}
						}
                    }
                    this.pointdata = mapdata;
					map = new AMap.Map('container',{
						viewMode:'3D',
						showBuildingBlock:false,
						resizeEnable: true,
						// center:[113.848,22.587],
						pitch:55,
						zoom:12
                    });
                    AMap.plugin('AMap.MapType',function(){//异步加载插件
						map.addControl(new AMap.MapType());
                    });
                    var markers = [];
					// markers2= [];
					var pic = '';//1：有企业报告；2：预警；3：报警 0:离线；
                    var pic2 = '';
                    for(let i=0;i<mapdata.length;i++) {
						if (mapdata[i].build == 1) {
							pic2 = this.status1;
						} else if (mapdata[i].build == 2) {
							pic2 = this.status2;
						} else if (mapdata[i].build == 3) {
							pic2 = this.status3;
						} else if (mapdata[i].build == 0) {
							pic2 = this.status0;
						}
	
						pic = this.bigimg;
						markers.push({
							icon:new AMap.Icon({
								image: pic2,
								size: new AMap.Size(80, 80),  //图标大小
								imageSize: new AMap.Size(26,26)
							}),
							rid:mapdata[i].rId,
							name:mapdata[i].name,
							position:[mapdata[i].lat,mapdata[i].lon]
						})
	
						map.setFitView();
                    }
                    map.setFitView();
					markers.forEach(function(marker) {
						var markerEvent = new AMap.Marker({
							map: map,
							icon: marker.icon,
							// label:{
							//     content:marker.name,
							//     offset: new AMap.Pixel(0, 15),
							// },
							position: [marker.position[0], marker.position[1]],
							offset: new AMap.Pixel(-13, -30)
						});
						markerEvent.setTitle(marker.name);
						markerEvent.on("click",showInfoM);
						markerEvent.rid = marker.rid;
						markerEvent.name = marker.name;
                    });
                    function showInfoM(e){
						var RIGHTS = "3618506239542595514521683271835353382818233252925964287856796737728531136512";
						var sContent="<div style='  text-align: center;color:#0071bc;'>"+e.target.name+"<br /><a onclick='changeComs("+e.target.rid+",&quot;"+RIGHTS+"&quot;,&quot;"+e.target.name+"&quot;)' class=\"example\"   style='color:#0071bc;font-size:14px;cursor: pointer'  ><img  src=\"static/img/"+e.target.rid+".jpg\"height=\"250px\" width=\"400px\" /></a></div>"
						var infoWindow = new AMap.InfoWindow({
							position: new AMap.LngLat(e.lnglat.lng,e.lnglat.lat),
							content: sContent
						});
						infoWindow.open(map);
					}
                    
                })
            },
            changeComs(R_ID,RIGHTS,ROLE_NAME){
                console.log(R_ID,RIGHTS,ROLE_NAME)
            }
        },
        mounted(){
            this.getMap();
            let that = this;
            window.changeComs =  that.changeComs;
        }
    }
</script>
<style>
.mapcenter {
    height: 90%;
    height: -moz-calc(100% - 60px);
    height: -webkit-calc(100% - 60px);
    height: calc(100% - 60px);
    position: relative;
}
</style>
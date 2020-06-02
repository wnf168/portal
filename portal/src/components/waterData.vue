<template>
  <div class="waterbox">
    <div class="fltime">
      起始时间：{{times.firstconnectdate | showTime}}&nbsp;&nbsp;&nbsp;&nbsp;
      截止时间：{{times.str_time | showTime}}&nbsp;&nbsp;&nbsp;&nbsp;
      计量时间(日):{{times.day}}天
    </div>
    <div class="content-div">
      <div class="col-lg-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">{{waterTitle}}</h3>
          </div>
          <div class="panel-body" style="padding-top:5px;padding-bottom:40px;">
            <div style="margin:0;padding:0;height: 100%">
              <div
                style="margin:0;padding:0;height:70px;padding-top: 20px;"
                v-for="item in waterData"
                :key="item.id"
              >
                <div class="t_div">{{item.fatoryname}}</div>
                <div class="water_div" style="top:10px;position:relative;left:30px;">
                  <div class="font_div" v-for="items in item.childData" :key="items.id">
                    <div class="font_div2">{{items.name}}</div>
                    <div class="font_div3">{{items.num}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { timeOnline } from "api/waterData";
export default {
  name: "waterData",
  data() {
    return {
      times: []
    };
  },
  props:['waterTitle','waterData'],
  methods: {
    timeOnline() {
      console.log(this.rid);
      timeOnline({ rid: this.rid }).then(data => {
        this.times = data.data[0];
      });
    }
  },
  mounted() {
    this.timeOnline();
  },
  computed: {
    ...mapState({
      rid: state => state.rid
    })
  }
};
</script>
<style>
.waterbox {
  background: #fff;
  height: 100%;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.42857143;
}
.fltime,
.content-div {
  padding: 20px;
}
.panel {
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 16px;
}
.panel-body {
  padding: 15px;
}
.water_div {
  width: 95%;
  height: 50px;
  top: 10px;
}
.t_div {
  font-family: 微软雅黑;
  border-left: 3px solid #28a2db;
  height: 20px;
  padding-left: 15px;
}
.font_div {
  float: left;
  width: 20%;
  height: auto;
  border-left: 3px solid #28a2db;
}
.font_div2 {
  margin-left: 10px;
  font-family: 微软雅黑;
  margin-top: 5px;
}
.font_div3 {
  margin-left: 10px;
  color: #28a2db;
  margin-top: 5px;
}
.tdht-content .col-lg-12 {
  padding-left: 0px;
}
.panel-primary > .panel-heading {
  color: #222222;
  background-color: #eef1f6;
  border-color: #dfe6ec;
}
.panel-primary {
  border-color: #dfe6ec;
}
.panel-heading .panel-title {
  border-left: 3px solid #28a2db;
  padding-left: 15px;
}
</style>

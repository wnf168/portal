<template>
  <div class="waterbox">
    <div class="str_time">
      <div class="fltime">
        起始时间：
        <span id="startTimes"></span>&nbsp;&nbsp;&nbsp;&nbsp;
        截止时间：
        <span id="endTimes"></span>&nbsp;&nbsp;&nbsp;&nbsp;
        计量时间(日):
        <span id="resultTime"></span>天
      </div>
    </div>
    {{rid}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import {timeOnline} from 'api/waterData'
export default {
  name: "waterData",
  methods:{
      timeOnline(){
          console.log(this.rid)
          timeOnline({rid:this.rid}).then(data=>{
              console.log(data)
          })
      }
  },
  mounted(){
      this.timeOnline();
  },
  computed: {
    ...mapState({
      rid: state => state.rid
    })
  },
};
</script>
<style>
 .waterbox{
     background: #fff;
     height:100%;
 }
</style>
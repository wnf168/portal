<template>
  <div>
    <waterData :waterTitle="waterTitle" :waterData="waterData"></waterData>
  </div>
</template>

<script>
import waterData from "com/waterData";
export default {
  name: "shiDatapai",
  components: {
    waterData
  },
  data() {
    return {
      waterTitle: "实时排口液位",
      waterData: [
        {
          fatoryname: "雨水排放口",
          childData:[
              {
                  name:"电导率(μS/cm)",
                  num:10
              },
              {
                  name:"液位(cm)",
                  num:133
              }
          ]
        },
        {
          fatoryname: "污水排放口",
           childData:[
              {
                  name:"电导率(μS/cm)",
                  num:100
              },
              {
                  name:"液位(cm)",
                  num:1336
              }
          ]
        }
      ]
    };
  }
};
</script>
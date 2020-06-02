<template>
  <div style="height:100%;">
    <waterData :waterTitle="waterTitle" :waterData="waterData"></waterData>
  </div>
</template>

<script>
import waterData from "com/waterData";
export default {
  name: "shiData",
  components: {
    waterData
  },
  data() {
    return {
      waterTitle: "实时水量数据",
      waterData: [
        {
          fatoryname: "工业排水",
          childData:[
              {
                  name:"瞬时流量(m³/h)",
                  num:12
              },
              {
                  name:"总流量(m³)",
                  num:11
              },
              {
                  name:"流速(m/s)",
                  num:111
              }
          ]
        },
        {
          fatoryname: "工业给水",
          childData:[
              {
                  name:"瞬时流量(m³/h)",
                  num:122
              },
              {
                  name:"总流量(m³)",
                  num:132
              },
              {
                  name:"流速(m/s)",
                  num:112
              }
          ]
        },
        {
          fatoryname: "生活给水",
          childData:[
              {
                  name:"瞬时流量(m³/h)",
                  num:123
              },
              {
                  name:"总流量(m³)",
                  num:133
              },
              {
                  name:"流速(m/s)",
                  num:113
              }
          ]
        }
      ]
    };
  }
};
</script>
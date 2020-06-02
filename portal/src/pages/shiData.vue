<template>
  <div>
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
                  num:13
              },
              {
                  name:"流速(m/s)",
                  num:11
              }
          ]
        },
        {
          fatoryname: "工业给水",
          childData:[
              {
                  name:"瞬时流量(m³/h)",
                  num:12
              },
              {
                  name:"总流量(m³)",
                  num:13
              },
              {
                  name:"流速(m/s)",
                  num:11
              }
          ]
        },
        {
          fatoryname: "生活给水",
          childData:[
              {
                  name:"瞬时流量(m³/h)",
                  num:12
              },
              {
                  name:"总流量(m³)",
                  num:13
              },
              {
                  name:"流速(m/s)",
                  num:11
              }
          ]
        }
      ]
    };
  }
};
</script>
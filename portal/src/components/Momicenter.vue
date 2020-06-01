<template>
    <div>
        Momicenter
        {{rid}}
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'Momicenter',
        mounted(){
            // console.log(this.$store.state.rid)
        },
        computed:{
            ...mapState({  
                rid:state=>state.rid 
            })
        },
          beforeUpdate() {//rid更新变化时加载
              console.log(new Date())
          }
    }
</script>
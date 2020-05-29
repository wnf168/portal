<template>
    <div class="gis">
        <Head></Head>
        <keep-alive>
            <router-view></router-view>   
        </keep-alive>    
    </div>
</template>

<script>
    import Head from 'com/Head'
    export default {
        name:"gis",
        components:{
            Head
        }
    }
</script>
<style>
.gis{
    height:100%;
}
</style>>
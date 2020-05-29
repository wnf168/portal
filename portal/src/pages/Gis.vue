<template>
    <div class="gis">
        <Head></Head>
        <Map></Map> 
    </div>
</template>

<script>
    import Head from 'com/Head'
    import Map from 'com/Map'
    export default {
        name:"gis",
        components:{
            Head,
            Map
        }
    }
</script>
<style>
.gis{
    height:100%;
}
</style>>
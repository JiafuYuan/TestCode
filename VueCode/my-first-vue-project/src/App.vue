<template>
  <div id="app">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
// var demo=new vue({
//   el:'#app',
//   // data:{
//     title:"yuanjiafu"
//   // }
// })
export default{
data(){
    return {
      title:"this is a todo list2"
      }
},
ready(){},
watch:{
            // 通过这种语法来watch就行，文档里有。。。看需求，还可以直接watch data，使用deep:true来深度观察
            // message:function(val,oldVal){
            //    if(val!=="hello world!")
            //     {
            //       this.status=1;
            //     } 
            //     else
            //      {
            //       this.status=0;
            //     } 
            // }
        },
methods:{

        }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import Vue from 'vue'

// options
let vm = new Vue({
  el:'#app',
  data(){
    return {
      title:'学生列表',
      classNum:1,
      total:2,
      teacher:['张三','李四'],
      info:{
        a:{
          b:1
        }
      },
      students:[
        {
          id:1,
          name:'小红'
        },
        {
          id:2,
          name:'小明'
        }
      ]
    }
  }
})

console.log(vm.students)
console.log(vm.info.a)


setTimeout(()=>{
  vm.title = '111'
},3000)
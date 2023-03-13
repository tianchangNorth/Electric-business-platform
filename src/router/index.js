import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/views/Home';
import Login from '@/views/Login';
import Search from '@/views/Search';
import Register from '@/views/Register';

//先把VueRoutre原型对象上的push方法保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push与replace方法
VueRouter.prototype.push = function(loaction,resolve,reject){
    if (resolve && reject) {
        originPush.call(this, loaction, resolve, reject);
    }else{
        originPush.call(this,loaction,()=>{},()=>{});
    }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
//配置路由  
export default new VueRouter({
    //配置路由
    routes:[
        {path:'/home',component:Home,meta:{show:true}},
        {path:'/login',component:Login,meta:{show:false}},    
        {path:'/search/:keyword',component:Search,meta:{show:true},name:'search'},
        {path:'/register',component:Register,meta:{show:false}},
        //重定向
        {path:'/',redirect:'/home'}
    ]
})
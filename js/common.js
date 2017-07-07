/**
 * Created by Administrator on 2017/5/14.
 */
function $(id){return document.getElementById(id)}


//封装获取内容滚动出部分的距离高、宽
function getScroll(){
    return {
        top:document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0,
        left:document.body.scrollLeft||document.documentElement.scrollLeft||window.pageXOffset||0
    }
}
window.onload=function(){
    var topBar=$("topBar");
    var supNav=topBar.children[0].children[2];
    var supNav_last=supNav.children[0].children[3];
    var lastas=supNav_last.children[0];
    var num=0;
    setInterval(function(){
        if(num==lastas.children.length-1){
            num=0;
            lastas.style.top="0px";
        }
        num++;
        animate(lastas,{top:-51*num},3,10);
    },4000)
}

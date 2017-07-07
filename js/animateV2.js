/**
 * Created by Administrator on 2017/5/12.    封装带有元素对象、属性的对象包装、时间、速度、回调函数
 */

function animate(element,obj,time,speed,callback){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        var flag=true;
        for(var attr in obj){
            if(attr=="opacity"){
                var current=parseFloat(getStyle(element,attr));
                //1.0 放大100倍
                current*=100;
                var target=obj[attr]*100;
                current=Math.floor(current);
                target=Math.floor(target);
                var step=(target-current)/speed;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){
                var target=obj[attr];
                var current=target;
                element.style[attr]=current;
            }else{
                var target=obj[attr];
                //1.0 获取当前的样式
                var current=parseFloat(getStyle(element,attr));
                //2.0 步长
                var step=(target-current)/speed;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[attr]=current+"px";
            }

            if(current!=target){
                flag=false;
            }
        }
        if(flag==true){
            clearInterval(element.timer);
            if(callback){
                callback()
            }
        }
    },time*10)
}

function getStyle(element,attr){
    if(element.currentStyle){
        return element.currentStyle[attr];
    }else{
        return window.getComputedStyle(element,null)[attr];
    }
}
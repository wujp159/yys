/**
 * Created by Administrator on 2017/5/12.    ��װ����Ԫ�ض������ԵĶ����װ��ʱ�䡢�ٶȡ��ص�����
 */

function animate(element,obj,time,speed,callback){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        var flag=true;
        for(var attr in obj){
            if(attr=="opacity"){
                var current=parseFloat(getStyle(element,attr));
                //1.0 �Ŵ�100��
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
                //1.0 ��ȡ��ǰ����ʽ
                var current=parseFloat(getStyle(element,attr));
                //2.0 ����
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
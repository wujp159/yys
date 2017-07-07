/**
 * Created by Administrator on 2017/5/19.
 */
function getScroll(){
    return {
        top:window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left:window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    };
}

function $(id){return document.getElementById(id)}
window.onload=function(){
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var wrap=document.getElementById("wrap");
    var wraplis=wrap.children[0].children;
    var header=$("header");
    var logo=header.children[0];
    var logoH=logo.children[0];
    var gw=header.children[1];
    var fan=header.children[2].children[0];
    var person=header.children[2].children[1];
    var jyzz=header.children[2].children[2];
    var ewm=header.children[2].children[3];
    var smewm=ewm.children[0];
    var smewm=smewm.children[1];
    var main=$("main");
    var snow=$("snow");
    var qb=main.children[0].children[0];
    var list=main.children[0].children[1];
    var ullis=list.children;
    var gameTs=$("gameTs");
    var yxts=gameTs.children[0];
    console.log(yxts);
    //console.log(ullis);

    /*顶部通栏的小轮播*/
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


    /*头部区域效果  开始*/
    ewm.style.opacity=0;
    fan.style.top=-800+"px";
    logo.style.left=-100+"px";
    jyzz.style.top=1200+"px";
    jyzz.style.opacity=0;
    animate(fan,{top:50,opacity:1},3,10);
        animate(jyzz,{top:600,opacity:1},3,10,function(){
        animate(person,{opacity:1},3,30,function(){
            animate(logoH,{left:40,opacity:1},3,20)
            animate(logoH,{left:40,opacity:1},3,20)
            animate(gw,{opacity:1},3,10)
            animate(ewm,{opacity:1},3,10,huaBan())
        })
    });

    var topCurrent=5;
    var a=0;
    var timer1=setInterval(function(){
        if(topCurrent==5){
            a++;
        }else if(topCurrent==110){
            a--;
        }
        topCurrent+=a;
        smewm.style.top=topCurrent+"px";
    },30)
    /*让扫秒二维码区域那里的那条线动起来*/


   /* main 区域的动画效果  开始*/
    var flag1=true;
    var flag2=true;
    window.onscroll=function(){
        var y= getScroll().top;
        console.log(y);
        if(y>=400&&flag1){
            flag1=false;
            qb.style.top=200+"px";
            animate(qb,{top:0,opacity:1},3,20)
        for(var i=0;i<ullis.length;i++){
            var divchi=ullis[i].children[0];
            divchi.style.top=200+"px";
        }

        var current=0;
        var timers=setInterval(function(){
            animate(ullis[current].children[0],{top:0,opacity:1},3,10);
            current++;
            if(current>ullis.length-1){
                current=0;
                clearInterval(timers);
            }
        },500)

        }


        if(y>=1500&&flag2){
            flag2=false;
            yxts.style.top=200+"px";
            animate(yxts,{top:-50,opacity:1},3,10);
        }


    }



    /*出现边框特效*/
    for(var i=0;i<ullis.length;i++){
        ullis[i].onmouseover=ulismouseHandle;
        ullis[i].onmouseout=ulismouseoutHandle;
    }


    function ulismouseHandle(){
        var is=this.getElementsByTagName("i");
        is[0].style.width=0;
        is[1].style.height=0;
        is[2].style.width=0;
        is[3].style.height=0;
        animate(is[0],{width:182},1,3,function(){
            animate(is[1],{height:272},1,3,function(){
                animate(is[2],{width:183},1,3,function(){
                    animate(is[3],{height:272},1,3);
                })
            })
        })
    }

    function ulismouseoutHandle(){
        var is=this.getElementsByTagName("i");
        animate(is[3],{height:0},1,3,function(){
            animate(is[2],{width:0},1,3,function(){
                animate(is[1],{height:0},1,3,function(){
                    animate(is[0],{width:0},1,3,function(){
                        is[0].style.width=0;
                        is[1].style.height=0;
                        is[2].style.width=0;
                        is[3].style.height=0;

                    });
                })
            })
        })
    }

   /* main 区域的动画效果  结束*/

    /*头部区域效果  结束*/
    /*3D旋转模块*/
    var currentIndex=0
       prev.onclick=function(){
        currentIndex--;
        var b=currentIndex*90+'deg';
        console.log(b);
        for(var i=0;i<wraplis.length;i++){
            wraplis[i].style.transform=" translateZ(-180px) rotateX("+b+")";
        }
    }
    next.onclick=function(){
        currentIndex++;
        var b=currentIndex*90+'deg';
        console.log(b);
        for(var i=0;i<wraplis.length;i++){
            wraplis[i].style.transform=" translateZ(-180px) rotateX("+b+")";
        }
    }




    /*花瓣掉落的案例  开始*/
    function huaBan(){
        var screenWidth= document.body.offsetWidth-104;
        var screenHeight=screen.height;
        console.log(screenWidth);
        console.log(screenHeight);
        var snow=document.getElementById("snow");
        snow.style.zIndex=999;
        for(var i=0;i<15;i++){
            var img=document.createElement("img");
            /*img.src="../images/fly1_7a53ec5.png";*/
            img.style.position="absolute";
            snow.appendChild(img);
            /*随机生成一个比较小的数*/
            var x= Math.random()*30+40;
            var y= Math.random()*30+40;
            var l=Math.random()*screenWidth;
            var t=Math.random()*screenHeight;
            img.style.width=x+"px";
            img.style.height=y+"px";
            img.style.left=l+"px";
            img.style.top=t+"px";
        }
        /*
         * 开启定时器
         * */
        var imgs=snow.getElementsByTagName("img");
        var arr=[];
        var newArr=[];
        for(var i=0;i<imgs.length;i++){
            //var current=imgs[i].offsetTop;
            //将获取到的offsetTop都保存到数组里面

            if(i%2==0){
                imgs[i].src="./images/fly1_7a53ec5.png";
            }else{
                imgs[i].src="./images/fly2_7ee73df.png";
            }

            arr.push(imgs[i].offsetTop);
            //将获取到的offstLeft都保存到数组里面
            newArr.push(imgs[i].offsetLeft);
        }
        setInterval(function(){
            for(var j=0;j<arr.length;j++){
                if(j%2==0){
                    arr[j]+=3;
                }
                if(j%3==0){
                    arr[j]+=4;
                }
                else{
                    arr[j]+=2;
                }
                if(arr[j]>screenHeight){
                    arr[j]=-20;
                }
                imgs[j].style.top=arr[j]+"px";
            }

            for(var k=0;k<newArr.length;k++){
                if(newArr[k]>screenWidth){
                    newArr[k]=-20;
                }
                if(k%2==0){
                    newArr[k]+=2;
                }
                if(k%3==0){
                    newArr[k]-=2;
                }
                imgs[k].style.left=newArr[k]+"px";
            }
        },30)
        console.log(arr);
    }
    /*花瓣掉落的案例  结束*/
}
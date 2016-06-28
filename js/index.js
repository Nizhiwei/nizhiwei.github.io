/**
 * Created by Ni-pc on 2015/8/6.
 */
function getStyle(obj,name){
    var style=null;
    if(window.getComputedStyle) {
        style = window.getComputedStyle(obj, null);
    }else{
        style = obj.currentStyle;
    }
    return style[name];
}
function startMove(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bStop=true;
        for(var name in json){
            var cur=0;
            if(name=='opacity'){
                cur=Math.round(parseFloat( getStyle(obj,name))*100);
            }else{
                cur=parseInt( getStyle(obj,name))
            }
            var speed=(json[name]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur!=json[name])
                bStop=false;
            if(name=='opacity'){
                obj.style.fliter='alpha(opacoty:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }else{
                obj.style[name]=cur+speed+'px';
            }}
        if(bStop){
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();}
    },30)}
window.onload=function() {
    canv=document.getElementById("snake");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
snakex=snakey=10;
gs=tc=20;
fruitx=fruity=15;
speedx=speedy=0;
trail=[];
tail = 5;
function game() {
    snakex+=speedx;
    snakey+=speedy;
    if(snakex<0) {
        snakex= tc-1;
    }
    if(snakex>tc-1) {
        snakex= 0;
    }
    if(snakey<0) {
        snakey= tc-1;
    }
    if(snakey>tc-1) {
        snakey= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    ctx.fillStyle="blue";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==snakex && trail[i].y==snakey) {
            tail = 5;
        }
    }
    trail.push({x:snakex,y:snakey});
    while(trail.length>tail) {
    trail.shift();
    }
    if(fruitx==snakex && fruity==snakey) {
        tail++;
        fruitx=Math.floor(Math.random()*tc);
        fruity=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(fruitx*gs,fruity*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            speedx=-1;speedy=0;
            break;
        case 38:
            speedx=0;speedy=-1;
            break;
        case 39:
            speedx=1;speedy=0;
            break;
        case 40:
            speedx=0;speedy=1;
            break;
    }
}

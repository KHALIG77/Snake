let CanvasContext;
let Canvas;
window.onload = function(){
    Canvas = document.getElementById("GameCanvas");
    CanvasContext = Canvas.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(Game,1000/10)
}


let GameSize = 20; // canvasi 20 lik hisselere bolmek ucun
let xv = yv = 0;//snake neqeder gedecek 
let px = py = 10; //snakin hal-hazirdaki yeri
let ax = ay =18; //applein yeri
let trail = []; //snakein uzunluguna gore gedeceyi yol
let tail = 5;

function Game(){
    px+=xv;
    py+=yv; 
    
    if(px<0)// sol terefe deyerse eger
    {
        px = GameSize-1;

    } 
    if(px>GameSize-1){ //sag terefe deyerse
        px = 0;
    }
    if(py<0)//asagi terefe deyerse
    {
        py = GameSize-1;
    }
    if(py>GameSize-1) //yuxari terefe deyerse
    {
        py = 0;
    }
    CanvasContext.fillStyle = "black";
    CanvasContext.fillRect(0,0,Canvas.width,Canvas.height);
    CanvasContext.fillStyle = "lime"
    

    for(let i = 0;i<trail.length;i++){
        CanvasContext.fillRect(trail[i].x * GameSize,trail[i].y * GameSize,18,18)
        if(trail[i].x===px&&trail[i].y===py) //snake ozu ozune deyse basdan basdasin
        {
            tail = 5;
        }

    }
    trail.push({x:px,y:py})
    while(trail.length>tail){
        trail.shift()
    }
    CanvasContext.fillStyle = "red";
    CanvasContext.fillRect(ax * GameSize,ay * GameSize,18,18)
    

    if(ax === px&& ay === py){
        tail ++;
     ax = Math.floor(Math.random() * GameSize);
     ay = Math.floor(Math.random() * GameSize);

    }

}

function keyPush(e){
    console.log(e)
switch(e.key){

    case "ArrowUp":
    xv=0;
    yv=-1;
    break;

    case "ArrowLeft":

    xv = -1;
    yv= 0 ;
    break;

    case "ArrowDown": 
    xv=0;
    yv=+1;
     break;

     case "ArrowRight":
        xv = +1;
        yv = 0;
        break;
}



}

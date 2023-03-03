canvas=document.getElementById("pizarron");
contexto=canvas.getContext("2d");


var posicionX, posicionY;

color="black";
ancho=2;

var anchopagina=screen.width;

nuevo_ancopagina=screen.width=70;
nuevo_altopagina=screen.height=300;

if(anchopagina<992){
    document.getElementById("pizarron").width=nuevo_anchopagina;
    document.getElementById("pizarron").height=nuevo_altopagina;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    posicionX=e.touches[0].clientX-canvas.offsetLeft;
    posicionY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){

    console.log("el touch se esta moviendo");
    posicionX_actual=e.touches[0].clientX-canvas.offsetLeft;
    posicionY_actual=e.touches[0].clientY-canvas.offsetTop;

        contexto.beginPath();
        contexto.strokeStyle=color;
        contexto.lineWidth=ancho;

        console.log("Posición X y pocisión Y");
        console.log("X= "+posicionX+"Y= "+posicionY);
        contexto.moveTo(posicionX,posicionY);

        console.log("Posición actual X y pocisión actual Y");
        console.log("X= "+posicionX_actual+"Y= "+posicionY_actual);
        contexto.lineTo(posicionX_actual,posicionY_actual);
        contexto.stroke();
    
    posicionX=posicionX_actual;
    posicionY=posicionY_actual;
}

function borrar(){
    contexto.strokeStyle="white";
    contexto.lineWidth=1000;
    contexto.moveTo(0,0);
    contexto.lineTo(canvas.width,canvas.height);
    contexto.stroke();
}
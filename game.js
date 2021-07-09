let canvas = document.getElementById('zone');
let context = canvas.getContext('2d');

let largeur=hauteur=20;
let x= Math.trunc(canvas.width/2);
let y= Math.trunc(canvas.height/2);

let depX=depY=0; /// Variable pour le déplacement au clavier ///

/////////////////////////////
///// Paramètres du jeu /////
/////////////////////////////

window.onload=function(){
let intervalID = setInterval(game,10); /// Game executé toutes les  10ms ///

    document.addEventListener("keydow",keyboard);
}
function game(){
    x+=depX;
    y+=depY;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle ="#f1c40f";
    context.fillRect(x, y, largeur, hauteur);
}

function keyboard(event){
    switch(event.keyCode) {
        case 37:
        // touche gauche
        depX=-1;
        depY=0;
        break;
        case 38:
        // touche haut
        depX=0;
        depY=-1;
        break;
        case 39:
        // touche droite
        depX=1;
        depY=0;
        break;
        case 40:
        // touche bas
        depX=0;
        depY=1;
        break;
        case 32:
        // touche espace
        depX=0;
        depY=0;
        break;
        }
}



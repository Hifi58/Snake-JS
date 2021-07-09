function loadGame(){

    //////////////////////
    // variables static //
    //////////////////////

    let DIM_X = 100;
    let DIM_Y = 100;

    let DIR_NONE = 100;

    ////////////////////////////
    // Code ASCII des flèches //
    ////////////////////////////

    let Key_UP = 38;     
    let Key_RIGHT = 39;
    let Key_BOTTOM = 40;
    let Key_LEFT = 37;

    /////////////////////////
    // Variable d'atributs //
    /////////////////////////

    let player = {};

    function checkForEnding(){
    // Optional : Check if :
    // - player head is crashed on his own body,
    // - isMoveOk return false
    };

    function listenToEvent(e){};

    function isMoveOk(player,oneDirection){};

    function onTick(){};

    function checkForFruit(){};

    function updatePlayerPosition(){};

    ////////////////////////////////
    // Fonction de plateau de jeu //
    ////////////////////////////////

    function createBoard(){
        let board = document.getElementById('board');
        board.innerHTML=" ";

        let div;
        for(let i=0; i<1; i++){
            div = document.createElement("div");
            div.setAttribute("class", "case");
            board.appendChild(div);         
        };

        let fruit;
        for(let i=0; i<90; i++){
            fruit = document.createElement("div");
            fruit.setAttribute("class", "fruit");
            board.appendChild(fruit);
        };
    };

    
    function initGame(){
        console.log("Chargement du jeu");
        createBoard();
        updatePlayerPosition();
        // Ici: associer la fonction listenToEvent à un événement
        //      "touche (flèche) enfoncée"
        // Ici: déclencher une fonction onTick à intervalles 
        //      réguliers (ex: 0.1 seconde)
    };

    initGame();
}; // Fin de loadGame

// Ici: associer la fonction loadGame à 
//      la fin du chargement de la page HTML
document.addEventListener("DOMContentLoaded", loadGame);
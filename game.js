////////////////////////////
///// Variable de zone /////
////////////////////////////

let canvas = document.getElementById("zone");
let context = canvas.getContext("2d");

///////////////////////////////
///// Variable de serpent /////
///////////////////////////////

let largeur = (hauteur = 20);

/// Variables permettant de placer le serpent de manière aléatoire en début de partie ///
let x = Math.trunc((Math.random() * canvas.width) / largeur) * largeur;
let y = Math.trunc((Math.random() * canvas.height) / hauteur) * hauteur;

let depX = (depY = 0); /// Variable pour le déplacement au clavier ///

///////////////////////////////
///// Variables de pommes /////
///////////////////////////////

let PommeX = Math.trunc((Math.random() * canvas.width) / largeur) * largeur;
let PommeY = Math.trunc((Math.random() * canvas.height) / hauteur) * hauteur;
let PommeRadius = 10;
let score = 0;
let vie = 3;

/////////////////////////////
///// Paramètres du jeu /////
/////////////////////////////

let trace = [];
let tailleTrace = (tailleInitTrace = 5);
let sautTrace = 1; /// Pour augmenter la taille de la queue toute les 100 boucles ///
let tailleMaxTrace = 100; // Cette valeur sera changé plus tard, elle sert à donner une taille maximal autorisé pour la queue

let hist;
let compteBoucle = 0;
let sautBoucle = 10;

window.onload = function () {
  let intervalID = setInterval(game, 100); /// fonction game executé toutes les 100ms ///

  document.addEventListener("keydown", keyboard);
};
 
function game() {
  /// Paramètre du serpent ///

  x += depX * largeur; /// Ajout de "*largeur" et "*hauteur" pour éviter que le serpent se déplace au pixel prêt et rendre plus facile le contact avec les pommes ///
  y += depY * hauteur;

  // On augmente tailleTrace toutes les secondes (soit 100 boucles)
  if (tailleTrace <= tailleMaxTrace && (depX != 0 || depY != 0)) {
    if (compteBoucle++ % 100 == 1) {
      sautBoucle--;
      if (sautBoucle < 0) {
        tailleTrace += sautTrace;
      }
    }
  }

  // On insére la valeur de x et y dans le tableau
  trace.push({ x: x, y: y });

  // tant que le tableau (soit la trace) depasse la taille maximum
  while (trace.length > tailleTrace) {
    // alors on enlève un élément
    trace.shift();
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#f1c40f";
  for (let i = 0; i < trace.length; i++) {
    context.fillRect(trace[i].x, trace[i].y, largeur - 3, hauteur - 3);
  }

  if (x == PommeX && y == PommeY) {
    score += 10 + 2 * ((tailleTrace - tailleInitTrace) / sautTrace); //colision
    if (tailleTrace > tailleInitTrace) {
      tailleTrace -= sautTrace;
    }
    // On réinitialise le compte à rebours pour relancer
    sautBoucle = 10;
    // Apparition de la pomme à une autre position
    PommeX = Math.trunc((Math.random() * canvas.width) / largeur) * largeur;
    PommeY = Math.trunc((Math.random() * canvas.height) / hauteur) * hauteur;
  }

  /// Paramètre de la pomme ///

  context.beginPath();
  context.arc(PommeX, PommeY, PommeRadius, 0, Math.PI * 2);
  context.fillStyle = "#e74c3c";
  context.fill();
  context.closePath();

  /// Affichage du score ///
 
  context.font = "16px Arial";
  context.fillStyle = "#fff";
  context.fillText("Score: " + score, 5, 20);
  console.log(score);
  
  /// Affichage des vies ///

  context.font = '16px Arial';
  context.fillStyle = '#fff';
  context.fillText('Vies restante: ' + vie, canvas.width - 130, 20);
}

///////////////////////////////////////////////
/// Fonction pour le déplacement au clavier ///
///////////////////////////////////////////////

function keyboard(evt) {
  switch (evt.keyCode) {
    case 37:
      // touche gauche
      if (hist == 39) {
        break;
      }
      depX = -1;
      depY = 0;
      hist = evt.keyCode;
      break;
    case 38:
      // touche haut
      if (hist == 40) {
        break;
      }
      depX = 0;
      depY = -1;
      hist = evt.keyCode;
      break;
    case 39:
      // touche droite
      if (hist == 37) {
        break;
      }
      depX = 1;
      depY = 0;
      hist = evt.keyCode;
      break;
    case 40:
      // touche bas
      if (hist == 38) {
        break;
      }
      depX = 0;
      depY = 1;
      hist = evt.keyCode;
      break;
    case 32:
      // touche espace pour l'arrêt
      depX = 0;
      depY = 0;
      break;
  }
}

// Charge le fichier data.json
fetch("data.json")

  // Transforme la réponse brute en JSON exploitable en JS
  .then(response => response.json())

  // "projets" contient le tableau récupéré depuis data.json
  .then(projets => {

    // Appelle la fonction qui génère les cartes HTML
    genererCartesProjet(projets)

  })


// Fonction qui reçoit le tableau de projets
function genererCartesProjet(tableauProjets){

    // Parcourt chaque objet du tableau
    tableauProjets.forEach(projet => {

        // Ajoute une carte projet dans le conteneur HTML sur l'index
        document.querySelector("#container-projet-cards").innerHTML += 
        `
        <!-- lien vers la page détail du projet -->
        <!-- on passe l'id dans l'URL -->
        <a href="pageProjet.html?id=${projet.id}" class="w30 flex column">

            <!-- titre du projet -->
            <h2>${projet.titre}</h2>

            <!-- description -->
            <p>${projet.desc}</p>

            <!-- date -->
            <p>${projet.date}</p>

        </a>
        `
        
    });
}










//on appelle la variable entête pour definir le header
let entete = document.querySelector("header")

//on appelle la variable image pour definir le fond image en haut de la page
let image = document.getElementById("carte")


//on fait en sorte que lorsque on scroll a la fin du fond image le header change de couleur et quand il revient au fond image il reprend sa couleur d'origine
window.addEventListener("scroll",function(){

    //si le header sort du fond image alors mettre fond en bleu
    if(window.scrollY > image.clientHeight){
        entete.classList.add("bg-rouge")
    }
    //sinon enlever le fond rouge
    else{
        entete.classList.remove("bg-rouge")
    }
})
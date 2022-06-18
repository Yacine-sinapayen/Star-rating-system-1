// Note initiales des télévisons
const ratings = {
  sony: 3,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  philips: 4.1,
};

// Nombre total d'étoiles qu'une television peut avoir
const starsTotal = 5;

// Lancer la fonction getRatings quand le DOM est chargé
document.addEventListener("DOMContentLoaded", getRatings);

// Je récupère les éléments des formulaire "Select product" et "Note entre 1-5"
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// J'initilise ma let product qui correspondra à la clés <=> télévision sélectionée dans
// le premier formulaire
let product;

// Cette fonction me renvoie la télévision sélectionée dans ma let product.
productSelect.addEventListener("change", (e) => {
  // Me renvoie la télévision sélectionée
  product = e.target.value;
  // Permet de modifier la note récupérée dans le formulaire
  ratingControl.disabled = false;
  // La valeur de mon second formulaire = à la note de la télévion sélectionée. rating = l'objet, product = clés de l'objet
  ratingControl.value = ratings[product];
});

// Cette fonction me permet de modifier la note récupérée dans le second
// formulaire "ratingControl". Puis de maj mon tableau en faisant appel à la fontion getRating().
ratingControl.addEventListener("keypress", (e) => {
  const rating = e.target.value;

  //   Make sur 5 or under
  if (rating > 5) {
    alert("Veuillez saisir une note 1 et 5");
    return;
  }

  //  J'attribue à la clés de mon objet une nouvelle note
  ratings[product] = rating;

  // Puis je met à jour le tableau
  getRatings();
});

// Récupération des notes
function getRatings() {
  // Je boucle sur l'objet ratings
  for (let rating in ratings) {
    // console.log(ratings); me renvoie les clés de l'objet ratings
    // console.log(ratings[rating]); me renvoie les valeurs de l'objet ratings

    // Récupération du pourcentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    // console.log(starPercentage);

    // Arrondir à la dizaine la plus proche.
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    console.log(starPercentageRounded)

    // Définir la largeur des étoiles intérieures en pourcentage. Pour cela, récupérer les class de chaque téléviseur et cibler les "stars-inner" (intérieur des étoiles)  pour les remplir avec ma const "starPercentageRounded".
    // En params je récuprère la class de chaque téléviseur grâce à ma let
    // rating = les clés de l'objet ratings.
    // Enfin j'indique à quelle % je veux que la largeur de mon élement "star-inner" soit remplis.
    // "star-inner" est une class dans laquelle j'ai inséré des étoile directement via mon css et sa largeur est définie
    // par le % de starPercentageRounded. Le % restant est rempli par "star-outer"
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;

    //  Ajouter une nouvelle note écrite
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}

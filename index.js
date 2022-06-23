// Note initiales des télévisons
const ratings = {
  sony: 3,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  philips: 4.1,
};

// Nombre total d'étoiles
const starsTotal = 5;

// Lancer la fonction getRatings quand le DOM est chargé
document.addEventListener("DOMContentLoaded", getRatings);

// Je récupère les éléments des formulaire "Select product" et "Note entre 1-5"
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// J'initilise ma let product qui correspondra à la clés <=> télévision sélectionée dans
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
    alert("Please enter a score between 1 and 5");
    return;
  }

  //  J'attribue à la clés de mon objet une nouvelle note
  ratings[product] = rating;

  // Puis je met à jour le tableau
  getRatings();
});

// Récupération des notes
function getRatings() {
  for (let rating in ratings) {

    // Récupération du pourcentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Arrondir à la dizaine la plus proche.
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // console.log(starPercentageRounded)

    // Définir la largeur des étoiles intérieures en pourcentage.
    // ici rating correspond aux noms des téléviseurs
      document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;
      console.log(rating)

    //  Ajouter une nouvelle note écrite
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}

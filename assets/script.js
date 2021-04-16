// references: elementi da richiamare nel DOM
var calcPrice = document.getElementById("button"); // Button che permette il calcolo del prezzo totale, che sarà il targent per l'evento;
var nameBurger = document.getElementById("name"); // Elemento che permette l'aggiunta del nome del burger
var coupon = document.getElementById("coupon"); // Elemento che permetta l'inserimento dei coupon
var totalPrice = document.getElementById("price"); // Prezzo totale dell'hamburger
var all_ingredients = document.getElementsByClassName("ingredient-checkbox"); //Un array di oggetti, contenente tutti i valori degli input dei condimenti

//default: valori iniziali
var initialPrice = 50; //prezzo iniziale per l'hamburger
var coupons = ["sconto2021", "sconto-bool"]; // coupon sconto
var discount = 0.3;

//Eventi

//Evento calcolo prezzo totale

calcPrice.addEventListener("click", function () {
  //Controllo che il nome dell'hamburger e tolgo gli spazi vuoti
  var nameBurgerOk = nameBurger.value.trim();
  //Controllo che il nome non sia semplicemente uno spazio vuoto
  if (nameBurgerOk.length === 0) {
    alert("ATTENZIONE: non ha inserito un nome");
  } else {
    //ciclo for per vedere quali aggiunte sono state selezionate
    var priceAdded = 0;
    for (var i = 0; i < all_ingredients.length; i++) {
      var ingredient = all_ingredients[i];
      if (ingredient.checked === true) {
        priceAdded += parseInt(ingredient.value);
        //Somma degli ingredienti aggiunti
      }
    }
    var yourPriceTot = initialPrice + priceAdded; //prezzo non scontato totale

    //Verifico se sono stati inseriti dei codici sconto
    if (coupons.includes(coupon) === true) {
      yourPriceTot -= yourPriceTot * discount;
    }

    //Prezzo finale inserito in HTML
    yourPrice(yourPriceTot, totalPrice);
  }
});

//Funzioni

function yourPrice(value, target) {
  target.innerHTML = value.toFixed(2);
}

//Funzione calcolo prezzo totale

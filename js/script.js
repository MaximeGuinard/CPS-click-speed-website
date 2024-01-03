// Sélectionnez le bouton qui ouvre la popup
const btnOpenPopup = document.querySelector('#btnOpenPopup');

// Sélectionnez la popup et le bouton de fermeture
const popup = document.querySelector('.popup');
const btnClosePopup = popup.querySelector('.btnClosePopup');

// Ajoutez un écouteur d'événement au bouton d'ouverture de la popup
btnOpenPopup.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Ajoutez un écouteur d'événement au bouton de fermeture de la popup
btnClosePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});

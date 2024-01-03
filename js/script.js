// S�lectionnez le bouton qui ouvre la popup
const btnOpenPopup = document.querySelector('#btnOpenPopup');

// S�lectionnez la popup et le bouton de fermeture
const popup = document.querySelector('.popup');
const btnClosePopup = popup.querySelector('.btnClosePopup');

// Ajoutez un �couteur d'�v�nement au bouton d'ouverture de la popup
btnOpenPopup.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Ajoutez un �couteur d'�v�nement au bouton de fermeture de la popup
btnClosePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});

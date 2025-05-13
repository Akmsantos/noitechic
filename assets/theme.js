document.addEventListener('DOMContentLoaded', function() {
  console.log('Theme script loaded');

  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log('Button clicked');
    });
  });
});
// Conteúdo não encontrado

// Seleciona todos os botões de avaliação pela classe
const starButtons = document.querySelectorAll('.starButton');
// Cria um objeto para armazenar a avaliação de cada botão
const ratings = {};

// Adiciona um ouvinte de evento a cada botão
starButtons.forEach((button) => {
  // Define a avaliação inicial para cada botão
  ratings[button.id] = 5;

  button.addEventListener('click', () => {
    // Simplesmente aumenta a avaliação em 1 (ciclo de 1 a 5)
    ratings[button.id] = (ratings[button.id] % 5) + 1;
    updateRating(button);
  });

  // Inicializa a avaliação
  updateRating(button);
});

function updateRating(button) {
  // Atualiza o texto do botão com base na avaliação atual
  button.textContent = `Avaliação: ${'⭐'.repeat(ratings[button.id])}`;
}
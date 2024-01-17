function moverIcone(elemento) {
    // Altera o estilo do ícone quando o mouse passa sobre o item da lista
    const icone = elemento.querySelector('.icon');
    icone.style.transform = 'rotate(90deg)';
}

function restaurarIcone(elemento) {
    // Restaura o estilo do ícone quando o mouse sai do item da lista
    const icone = elemento.querySelector('.icon');
    icone.style.transform = 'rotate(0deg)';

}


const botao = document.querySelector('.botao');

function mostrar() {
    const body = document.querySelector('body');
    body.classList.toggle('desativado');
}

botao.addEventListener('click', mostrar);

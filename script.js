// Seleciona todos os botões de "Leia mais"
const botoesLeiaMais = document.querySelectorAll('.btn-leia-mais');

// Adiciona um evento de clique para cada um deles
botoesLeiaMais.forEach((botao) => {
    botao.addEventListener('click', () => {
        alert('Em breve: Esta funcionalidade abrirá o artigo informativo completo em uma nova página!');
    });
});
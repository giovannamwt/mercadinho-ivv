
function alterarQuantidade(button, incremento) {
    var quantidadeElement = button.parentElement.querySelector('.quantidade');
    var quantidade = parseInt(quantidadeElement.textContent);
    quantidade += incremento;
    if (quantidade < 0) quantidade = 0;
    quantidadeElement.textContent = quantidade;
}


function doarProduto(button) {
    var quantidadeElement = button.parentElement.querySelector('.quantidade');
    var quantidade = parseInt(quantidadeElement.textContent);
    if (quantidade > 0) {
        
        alert("Doando " + quantidade + " unidades deste produto.");
    } else {
        alert("Selecione pelo menos uma unidade para doar.");
    }
}

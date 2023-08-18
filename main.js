const form = document.getElementById('form-valida');

function validar(valorOne, valorTwo) {
return valorTwo > valorOne;
}

form.addEventListener('submit', function(e) {
    const valorOne = Number(document.getElementById('valor-one').value);
    const valorTwo = Number(document.getElementById('valor-two').value);
    let formValida
    e.preventDefault();

    const mensagemSucesso = `Você enviou os valores: ${valorOne} e ${valorTwo} com sucesso`;
    const mensagemErro = `O valor do segundo depósito deve ser maior que o primeiro!`;

    formValida = validar(valorOne, valorTwo)

    if (formValida) {
        const containerMensagemSucesso = document.querySelector('.success-mesage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorOne =' ';
        valorTwo =' ';

    } else {
        const containerMensagemErro = document.querySelector('.success-mesage');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        
    }
   
})
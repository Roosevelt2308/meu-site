document.addEventListener('DOMContentLoaded', function() {
    const endereco = JSON.parse(localStorage.getItem('endereco'));
    if (endereco) {
        document.getElementById('logradouro').textContent = endereco.logradouro;
        document.getElementById('bairro').textContent = endereco.bairro;
        document.getElementById('localidade').textContent = endereco.localidade;
        document.getElementById('uf').textContent = endereco.uf;
    } else {
        alert('Nenhum dado de endereço encontrado!');
    }
});

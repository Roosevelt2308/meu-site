document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cep = document.getElementById('cep').value;
    const loading = document.getElementById('loading');

    loading.style.display = 'block';

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado!');
                loading.style.display = 'none';
                return;
            }
    
            localStorage.setItem('endereco', JSON.stringify(data));
            window.location.href = 'result.html';
        })
        .catch(error => {
            alert('Erro ao consultar o CEP!');
            loading.style.display = 'none';
        });
});

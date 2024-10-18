let numeroSecreto;
        let tentativas = 5;
        let numeroInserido = '';
        let menorChute = 0;
        let maiorChute = 101; 
    
        function gerarNumeroSecreto() {
            numeroSecreto = Math.floor(Math.random() * 101);
            console.log(numeroSecreto);
            document.getElementById('numero_secreto').innerText = '?';
            numeroInserido = '';
            menorChute = 0;
            maiorChute = 101;
        }
    
        function chutarNumero() {
            const chute = parseInt(numeroInserido);
            console.log(chute);
    
            if (isNaN(chute) || chute <= menorChute || chute >= maiorChute) {
                return;
            }
    
            tentativas--;
            document.getElementById('numero_tentativas').innerText = tentativas;
    
            if (chute === numeroSecreto) {
                document.getElementById('numero_secreto').innerText = numeroSecreto;
                document.getElementById('mensagem').innerText = "Parabéns Você Ganhou!!!"; 
                return;
            }
    
            if (tentativas === 0) {
                document.getElementById('numero_secreto').innerText = numeroSecreto;
                document.getElementById('mensagem').innerText = "Que Pena Você Perdeu!!!"; 
                return;
            }
    
            if (chute < numeroSecreto) {
                document.getElementById('numero_menor').innerText = chute; 
                menorChute = chute; 
            } else {
                document.getElementById('numero_maior').innerText = chute; 
                maiorChute = chute; 
            }
    
            document.getElementById('numero_secreto').innerText = '?'; 
            numeroInserido = ''; 
        }
        
        function limparJogo() {
            numeroInserido = ''; 
            document.getElementById('numero_secreto').innerText = '?'; 
        }
        
        function reiniciarJogo() {
            location.reload()
        }
    
        document.querySelectorAll('.numero').forEach(function(element) {
            element.onclick = function() {
                numeroInserido += this.innerText; 
                document.getElementById('numero_secreto').innerText = numeroInserido;
            };
        });
    
        document.getElementById('reiniciar').onclick = reiniciarJogo;
        document.getElementById('chutar').onclick = chutarNumero;
        document.getElementById('limpar').onclick = limparJogo;
    
        window.onload = gerarNumeroSecreto;
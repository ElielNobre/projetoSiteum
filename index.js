function cadastrar(){
            
    var nome = window.document.getElementById('cnome');
    var datnasc = window.document.getElementById('ndata');
    var name = String(nome.value);
    var ano = Number(datnasc.value);
    var jnome = window.document.getElementById('a');
    var jnasc = window.document.getElementById('b');
    var jboasvindas = window.document.getElementById('d');
        
    
    if (ano >=2002){
        jnome.innerHTML = `Nome: ${name}`; 
        jnasc.innerHTML = `O ano de nascimento é: ${ano}`;
        jboasvindas.innerHTML = `Você é menor de idade não pode se cadastrar`;
    }else if(ano <=1945){
        jnome.innerHTML = `Nome: ${name}`; 
        jnasc.innerHTML = `O ano de nascimento é: ${ano}`;
        jboasvindas.innerHTML = `Você é velho Demais`;
    }else{
        jnome.innerHTML = `Nome: ${name}`; 
        jnasc.innerHTML = `O ano de nascimento é: ${ano}`;
        jboasvindas.innerHTML = `Cadastrado com sucesso`;}
    }
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo/estilo.css">
    <title>Projetos da Faculdade</title>
</head>

<body>
    <div class="menu">
        <nav id="menu">
            <h3>Menu</h3>
            <ul>
                <li><a href="paginas/OpUm.html">Jogos</a></li>
                <li><a href="paginas/OpDois.html">Seminario IV</a></li>
                <li><a href="paginas/OpTres.html">Seminario V</a></li>
            </ul>
        </nav>
    </div>
    <div class="principal">
        <div class="conteudo">Conteúdo

            <form id="padraotesla">
                <p>Insira um Número</p>
                <input type="Insira um número">
            </form>
            <!--O padrao é: 1 , 2, 4, 8, 7, 5
            energia livre 3, 6, 9
            1 X 2 = 4
            4 X 2 = 8
            8 X 2 = 16
            1 + 6 = 7
            7 X 2 = 14
            1 + 4 = 5 -->
            <p>Cadastro</p>
            <form id="cadastro" method="GET" action="projeto.php" >
                <p>
                    <label for="cnome">Nome:</label><input type="text" name="tnome" id="cnome" size="30" maxlenght="30"/>
                </p>
                <p>
                   <label for="ndata"> Data de nascimento:</label><input type="date" name="datanascimento" id="ndata"/>
                </p>
               <fieldset id="sexos">
                <p>
                     Sexo:<br/>
                    <label for="masculino"> Masculino:</label><input type="radio" name="tsexo" id="masculino"   checked><br/>
                    <label for="feminino"> Feminino:</label> <input type="radio" name="tsexo" id="feminino">
                </p>
                </fieldset>
                <input type="submit" value="Cadastrar">
            </form>



        </div>
        <div class="lateral">Lateral</div>
        <!-- <div class="contatos">Contatos</div>-->
    </div>
    <div class="recomendados">Recomendados</div>
    <div class="rodape">
        <h3>RodaPe</h3>
    </div>
</body>

</html>
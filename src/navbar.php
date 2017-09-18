<div class="navbar">
    <a href="/">
        <img src="/res/logo.svg" alt="Encontro de Criadores - Logo" class="logo">
    </a> 
    <div class="menu">
        <a href="/programacao">Programação</a>
        <a href="/movimento" class="hidden-mobile">Movimento</a>
        <!--<a href="/sobre">Curadoria</a>-->
        <a id="cadastro">Mande sua ideia</a>
    </div>
    <div class="hamburger"></div>
    
    <div class="modal">
        <div class="overlay">
            <div class="begin">
                <img src="/res/load.gif"></img>
                <p>Enviando suas informações</p>
            </div>
            <div class="success" hidden>
                <p>FEITO! :D</p>
                <p>Vamos avaliar sua ideia e retornaremos um email para você assim que possível, obrigado!</p>
                
                <button type="button" class="fechar">Fechô, valeu!</button>
            </div>
        </div>
        
        <form id="edcData" method="POST" action="/src/mail.php" enctype="multipart/form-data">
            
            <p>Não estamos aqui pra dizer o que é bom ou ruim (quem somos nós), apenas queremos alinhar ideias que estejam buscando coisas semelhantes e que se enquadrem a linhas conceituais que buscamos seguir;
<strong>Envie sua ideia/ marca/ produto criativo que entraremos em contato, valeu!</strong></p>
            
            <label for="nome">Seu nome</label>
            <input type="text" name="nome" id="nome" required>
            
            <label for="negocio">Nome da sua ideia/ marca/ produto</label>
            <input type="text" name="negocio" id="negocio" required>
            
            <label for="email">Seu Email</label>
            <input type="email" name="email" id="email" required>
            
            <label for="categoria">Sua categoria</label>
            <select name="categoria" id="categoria" required>
                <option value="arte">Arte</option>
                <option value="gastronomia">Gastronomia</option>
                <option value="moda">Moda</option>
                <option value="fotografia">Fotografia</option>
                <option value="oficina">Oficina</option>
                <option value="musica">Música</option>
            </select>
            
            <label for="file">Nos envie uma foto do seu trampo</label>
            <input type="file" name="anexo" id="file" required>
      
            <button type="button" class="fechar">Cancelar</button>
            <button id="send">Enviar</button>
        </form>
        
    </div>
</div>
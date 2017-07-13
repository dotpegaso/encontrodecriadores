<div class="navbar">
    <a href="/">
        <img src="/res/logo.svg" alt="Encontro de Criadores - Logo" class="logo">
    </a> 
    <div class="menu">
        <a href="/programacao">Programação</a>
        <!--<a href="/atividades">Atividades</a>-->
        <a href="#cadastro">Cadastre sua ideia</a>
    </div>
    
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
        <p class="desc"><em>Simples e rápido:</em> preencha os campos abaixo e aguarde nosso retorno!</p>
        
        <form id="edcData" method="POST" action="/src/mail.php">
            <label for="nome">Seu nome</label>
            <input type="text" name="nome" id="nome" required>
            
            <label for="negocio">Nome do seu negócio</label>
            <input type="text" name="negocio" id="negocio" required>
            
            <label for="email">Seu Email</label>
            <input type="email" name="email" id="email" required>
            
            <label for="categoria">Escolha sua categoria</label>
            <select name="categoria" id="categoria" required>
                <option value="arte">Arte</option>
                <option value="gastronomia">Gastronomia</option>
                <option value="moda">Moda</option>
                <option value="fotografia">Fotografia</option>
                <option value="oficina">Oficina</option>
                <option value="musica">Música</option>
            </select>
            
            <label for="file">Nos envie uma foto do seu trampo</label>
            <input type="file" name="file" id="file" required>
      
            <button type="button" class="fechar">Cancelar</button>
            <button id="send">Enviar</button>
        </form>
        
    </div>
</div>
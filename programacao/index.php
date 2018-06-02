<!DOCTYPE html>
<html>

<?php include("../src/head.php") ?>

<body>

    <?php include( "../src/navbar.php") ?>
    <?php require_once('../src/fetch_colab.php'); ?>
    
    <section id="intro" class="programacao">
        <h1>Programação <br><em><?php echo $colab ?></em></h1>
    </section>

    <div class="calendar">
        <p>Próximo evento colab</p>
        <a href="<?php echo $link?>" target="_blank" class="date link"><?php echo $evento ?></a>
    </div>
    
    <section id="container">
        
        <div class="box" value="09">
            <p class="date">JUN 09</p>

            <div class="content">
                <p class="hour">14:00</p>
                <br>
                <p class="who">ABERTURA</p>
            </div>

           <div class="content">
                <p class="hour">14:30</p>
                <br>
                <p class="who">Experiências que fazem a diferença (como os labs e coletivos podem nos ajudar a construir juntos?)</p>
          </div>

           <div class="content">
                <p class="hour">16:00</p>
                <br>
                <p class="who pink">Xico Sá - TUDO CERTO E NADA RESOLVIDO (quebrando a cabeça, fazendo a diferença! )</p>
           </div>
           
           <div class="content">
                <p class="hour">17:30</p>
                <br>
                <p class="who ">Amor de internet faz verão? </p>
           </div>
           
           <div class="content">
                <p class="hour">19:00</p>
                <br>
                <p class="who pink">João Romualdo e banda</p>
           </div>
           
           <div class="content">
                <p class="hour">21:00</p>
                <br>
                <p class="who">Vibehouse</p>
           </div>
           
           <div class="content">
                <p class="hour">00:00</p>
                <br>
                <p class="who">Encerramento</p>
           </div>
        </div>
        
        <div class="box" value="10">
            <p class="date">JUN 10</p>

            <div class="content">
                <p class="hour">14:00</p>
                <br>
                <p class="who">ABERTURA</p>
            </div>

           <div class="content">
                <p class="hour">14:30</p>
                <br>
                <p class="who pink">JOÃO ROMUALDO + Comida, diversão e arte! (sua alimentação diz muito sobre quem você é)</p>
          </div>

           <div class="content">
                <p class="hour">16:00</p>
                <br>
                <p class="who">A eficiência e felicidade no trabalho na era pós-digital</p>
           </div>
           
           <div class="content">
                <p class="hour">17:30</p>
                <br>
                <p class="who pink">Escrever para construir e desconstruir estereótipos</p>
           </div>
           
           <div class="content">
                <p class="hour">18:30</p>
                <br>
                <p class="who">Lucas Degásperi</p>
           </div>
           
           <div class="content">
                <p class="hour">22:00</p>
                <br>
                <p class="who">Encerramento</p>
           </div>
           
           <div class="content">
                <p class="hour">21:00</p>
                <br>
                <p class="who pink">cristopher clark</p>
           </div>
           
           <div class="content">
                <p class="hour">00:00</p>
                <br>
                <p class="who">Encerramento</p>
           </div>
        </div>
        
        <!--<div class="box" value="12">-->
        <!--    <p class="date">NOV 12</p>-->

        <!--    <div class="content">-->
        <!--        <p class="hour">14:00</p>-->
        <!--        <br>-->
        <!--        <p class="who">ABERTURA</p>-->
        <!--    </div>-->

        <!--   <div class="content">-->
        <!--        <p class="hour">14:30</p>-->
        <!--        <br>-->
        <!--        <p class="who">PANCS DO QUINTAL (Plantas Alimentícias Não Convencionais)</p>-->
        <!--  </div>-->

        <!--   <div class="content">-->
        <!--        <p class="hour">16:00</p>-->
        <!--        <br>-->
        <!--        <p class="who pink">Esquenta Curta Santos (bate papo)</p>-->
        <!--   </div>-->
           
        <!--   <div class="content">-->
        <!--        <p class="hour">16:30</p>-->
        <!--        <br>-->
        <!--        <p class="who">Banda QUERÔ</p>-->
        <!--   </div>-->
           
        <!--   <div class="content">-->
        <!--        <p class="hour">18:30</p>-->
        <!--        <br>-->
        <!--        <p class="who pink">Banda ZIMBRA</p>-->
        <!--   </div>-->
           
        <!--   <div class="content">-->
        <!--        <p class="hour">22:00</p>-->
        <!--        <br>-->
        <!--        <p class="who">Encerramento</p>-->
        <!--   </div>-->
        <!--</div>-->
    
    </section>
    
    <?php include( "../src/newsletter.php") ?>

    <?php include( "../src/sponsor.php") ?>

    <?php include( "../src/footer.php") ?>

    <footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../scripts/clipboard.min.js"></script>
        <script src="../scripts/main.js"></script>
        <script src="../scripts/navbar.js"></script>
    </footer>
    
</body>

</html>
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
        
        <div class="box" value="10">
            <p class="date">NOV 10</p>

            <div class="content">
                <p class="hour">18h00</p>
                <br>
                <p class="who">ABERTURA</p>
            </div>

           <div class="content">
                <p class="hour">19h00</p>
                <br>
                <p class="who">Literatura e Criatividade no Século XXI (bate papo)</p>
          </div>

           <div class="content">
                <p class="hour">19h30</p>
                <br>
                <p class="who">Conrado Pouza (MPB)</p>
           </div>
           
           <div class="content">
                <p class="hour">22h00</p>
                <br>
                <p class="who pink">Banda TREVO</p>
           </div>
           
           <div class="content">
                <p class="hour">00h00</p>
                <br>
                <p class="who pink">Encerramento</p>
           </div>
        </div>
        
        <div class="box" value="11">
            <p class="date">NOV 11</p>

            <div class="content">
                <p class="hour">14h00</p>
                <br>
                <p class="who">ABERTURA</p>
            </div>

           <div class="content">
                <p class="hour">16h00</p>
                <br>
                <p class="who pink">Banda TREZALT</p>
          </div>

           <div class="content">
                <p class="hour">16h30</p>
                <br>
                <p class="who">Arte Urbana (bate papo + intervenção)</p>
           </div>
           
           <div class="content">
                <p class="hour">18h30</p>
                <br>
                <p class="who pink">Banda TRIÁCIDA</p>
           </div>
           
           <div class="content">
                <p class="hour">20h00</p>
                <br>
                <p class="who">Festa Riscado</p>
           </div>
           
           <div class="content">
                <p class="hour">22h00</p>
                <br>
                <p class="who">Encerramento</p>
           </div>
        </div>
        
        <div class="box" value="12">
            <p class="date">NOV 12</p>

            <div class="content">
                <p class="hour">14h00</p>
                <br>
                <p class="who">ABERTURA</p>
            </div>

           <div class="content">
                <p class="hour">14h30</p>
                <br>
                <p class="who">PANCS DO QUINTAL (Plantas Alimentícias Não Convencionais)</p>
          </div>

           <div class="content">
                <p class="hour">16h00</p>
                <br>
                <p class="who">Esquenta Curta Santos (bate papo)</p>
           </div>
           
           <div class="content">
                <p class="hour">16h30</p>
                <br>
                <p class="who">Banda QUERÔ</p>
           </div>
           
           <div class="content">
                <p class="hour">18h30</p>
                <br>
                <p class="who pink">Banda ZIMBRA</p>
           </div>
           
           <div class="content">
                <p class="hour">22:00</p>
                <br>
                <p class="who">Encerramento</p>
           </div>
        </div>
    
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
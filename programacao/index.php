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
    
    <!--<section id="container">-->
        
    <!--    <div class="box" value="<?php echo $data_um ?>">-->
    <!--        <p class="date"><?php echo $data_um ?></p>-->

    <!--        <div class="content">-->
    <!--            <p class="hour">19:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Rosa Marya & Banda Jazzileira</p>-->
    <!--        </div>-->

    <!--       <div class="content">-->
    <!--            <p class="hour">20:30</p>-->
    <!--            <br>-->
    <!--            <p class="who"> Saravá – 80 anos de Baden Powell – Quizumba Latina & Lucia Spivak (Argentina)</p>-->
    <!--      </div>-->

    <!--       <div class="content">-->
    <!--            <p class="hour">22:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Ari Kumar Blues Band (USA)</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">23:00</p>-->
    <!--            <br>-->
    <!--            <p class="who pink">Liniker e os Caramelows</p>-->
    <!--       </div>-->
    <!--    </div>-->
        
    <!--    <div class="box" value="<?php echo $data_dois ?>">-->
    <!--        <p class="date"><?php echo $data_dois ?></p>-->

    <!--        <div class="content">-->
    <!--            <p class="hour">13:00</p>-->
    <!--            <br>-->
    <!--            <p class="who"> DJs Santos Jazz + Encontro de Criadores + Foods (full time)</p>-->
    <!--        </div>-->

    <!--       <div class="content">-->
    <!--            <p class="hour">15:00</p>-->
    <!--            <br>-->
    <!--            <p class="who"> Escola Simonian in Concert</p>-->
    <!--      </div>-->

    <!--       <div class="content">-->
    <!--            <p class="hour">17:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Carla Mariani & Banda – Tributo às Divas do Jazz & Blues</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">18:30</p>-->
    <!--            <br>-->
    <!--            <p class="who pink">Thiago Espírito Santo & Silvia Goes convidam Alba Santos (Espanha)</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">20:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Igor Willcox 4tet</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">21:30</p>-->
    <!--            <br>-->
    <!--            <p class="who">Blubell & Banda</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">23:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Ellén Oléria & Banda</p>-->
    <!--       </div>-->
    <!--    </div>-->
        
    <!--    <div class="box" value="<?php echo $data_tres ?>">-->
    <!--        <p class="date"><?php echo $data_tres ?></p>-->

    <!--        <div class="content">-->
    <!--            <p class="hour">13:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">DJs Santos Jazz + Encontro de Criadores + Foods (full time)</p>-->
    <!--        </div>-->

    <!--       <div class="content">-->
    <!--            <p class="hour">14:30</p>-->
    <!--            <br>-->
    <!--            <p class="who">Orquestra de Sopros da Banda Marcial de Cubatão – Clássicos do Jazz</p>-->
    <!--      </div>-->

    <!--       <div class="content">-->
    <!--            <p class="hour">16:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Dolores in Blues</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">17:00</p>-->
    <!--            <br>-->
    <!--            <p class="who pink">Jes Condado & Banda (Argentina)</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">18:30</p>-->
    <!--            <br>-->
    <!--            <p class="who">Roberto Sion & Anaí Rosa</p>-->
    <!--       </div>-->
           
    <!--       <div class="content">-->
    <!--            <p class="hour">20:00</p>-->
    <!--            <br>-->
    <!--            <p class="who">Tradicional Jazz Band</p>-->
    <!--       </div>-->
    <!--    </div>-->
    
    <!--</section>-->
    
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
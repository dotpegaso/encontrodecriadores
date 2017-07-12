<!DOCTYPE html>
<html>

<?php include("../src/head.php") ?>

<body>

    <?php include( "../src/navbar.php") ?>

    <section id="intro">
        <h1>Confira a nossa<br><em>programação</em></h1>
    </section>

    <div class="calendar">
        <p>Próximo evento</p>
        <p class="date link">Setembro</p>
    </div>

    <section id="container">
        <div class="box">
            <p class="date">21 Setembro</p>

            <div class="content">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
            </div>

            <div class="content workshop">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <form>
                    <input type="email" name="" placeholder="Reserve sua vaga, digite seu email" required/>
                    <input type="hidden" name="nmworkshop" value="">
                    <button>QUERO!</button>
                </form>
            </div>

            <div class="content">
                <!--<div class="break">-->
                <!--    <p class="hour">19:00</p>-->
                <!--    <p class="who">Coffee Break</p>-->
                <!--</div>-->
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
         
            </div>

            <div class="content">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
            </div>

            <div class="content workshop">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <form>
                    <input type="email" name="" placeholder="Reserve sua vaga, digite seu email" required/>
                    <input type="hidden" name="nmworkshop" value="">
                    <button>QUERO!</button>
                </form>
            </div>


        </div>
        <div class="box">
            <p class="date">21 Setembro</p>

            <div class="content">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
            </div>

            <div class="content">
                <!--<div class="break">-->
                <!--    <p class="hour">19:00</p>-->
                <!--    <p class="who">Coffee Break</p>-->
                <!--</div>-->
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
         
            </div>

            <div class="content workshop">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <form>
                    <input type="email" name="" placeholder="Reserve sua vaga, digite seu email" required/>
                    <input type="hidden" name="nmworkshop" value="">
                    <button>QUERO!</button>
                </form>
            </div>

            <div class="content workshop">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                <form>
                    <input type="email" name="" placeholder="Reserve sua vaga, digite seu email" required/>
                    <input type="hidden" name="nmworkshop" value="">
                    <button>QUERO!</button>
                </form>
            </div>

            <div class="content">
                <!--<div class="break">-->
                <!--    <p class="hour">19:00</p>-->
                <!--    <p class="who">Coffee Break</p>-->
                <!--</div>-->
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
         
            </div>

            <div class="content">
                <p class="hour">19:00</p>
                <p class="who">Heitor Ramos</p>
                <br>
                <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
            </div>


        </div>

    </section>
    
    <?php include( "../src/newsletter.php") ?>

    <?php include( "../src/sponsor.php") ?>

    <?php include( "../src/footer.php") ?>

    <footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../node_modules/clipboard/dist/clipboard.min.js"></script>
        <script src="../scripts/main.js"></script>
        <script src="../scripts/navbar.js"></script>
    </footer>
    
</body>

</html>
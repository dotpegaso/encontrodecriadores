<!DOCTYPE html>
<html>

<?php include("../src/head.php") ?>

<body>

    <?php include( "../src/navbar.php") ?>
    <?php require_once('../src/fetch_colab.php'); ?>
    
    <img src="../res/info.png" alt="" id="movimento">
    
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
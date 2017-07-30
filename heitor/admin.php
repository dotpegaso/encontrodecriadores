<!DOCTYPE html>
<html>

<?php include("../src/head.php") ?>
<link rel="stylesheet" href="/styles/admin.css" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="../scripts/admin.js"></script>

<body>
    
    <?php require_once('../src/fetch_admin.php') ?>
    
    <form>
    <h1>Nome do próximo evento:</h1>
    <input type="text" name="nm_prox_evento" value="<?php echo $nm_prox_evento ?>" required>
    
    <h1>Link do próximo evento:</h1>
    <input type="text" name="link_prox_evento" value="<?php echo $link_prox_evento ?>" required>
    
    <h1>Link do último vídeo:</h1>
    <input type="text" name="video" value="<?php echo $video ?>" required>
    
    <button>Salvar</button>
    </form>
    
</body>
</html>
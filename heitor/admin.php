<!DOCTYPE html>
<html>

<?php include("../src/head.php") ?>
<link rel="stylesheet" href="/styles/admin.css" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="../scripts/admin.js"></script>

<body>
    
    <?php require_once('../src/fetch_admin.php') ?>
    
    <form>
    <div class="flex">
        <div class="esq">
            <h1>Nome do próximo evento:</h1>
            <input type="text" name="nm_prox_evento" value="<?php echo $nm_prox_evento ?>" required>
            
            <h1>Link do próximo evento:</h1>
            <input type="text" name="link_prox_evento" value="<?php echo $link_prox_evento ?>" required>
            
            <h1>Link do banner desktop:</h1>
            <input type="text" name="banner" value="<?php echo $banner ?>" required>
            
            <h1>Link do banner mobile:</h1>
            <input type="text" name="banner_mobile" value="<?php echo $banner_mobile ?>" required>
            
            <h1>Link do último vídeo:</h1>
            <input type="text" name="video" value="<?php echo $video ?>" required>
            
            <h1>Título na página de programação:</h1>
            <input type="text" name="nm_colab" value="<?php echo $colab ?>" required>
            
            <h1>Datas da programação (máx 3 dias):</h1>
            <div class="flex">
                <input type="text" name="data_um" value="<?php echo $data_um ?>" required>
                <input type="text" name="data_dois" value="<?php echo $data_dois ?>" required>
                <input type="text" name="data_tres" value="<?php echo $data_tres ?>" required>
            </div>
        </div>
        <div class="dir">
        </div>
    </div>
    <button>Salvar</button>
    </form>
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link href="styles/default.css" rel="stylesheet">
    <script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="js/home.js" type="text/javascript"></script>
</head>
<body>
    <!--Header-->
    <?php include 'menu.php';?>
    <!-- Add Config file -->
    <?php require_once('config.php');?>
    <div class="container">
        <div id="divresult">
            <?php
                try{    
                $db = new PDO("mysql:dbname=".DBNAME.";host=".DBHOST, DBUSER, DBPASS);  
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                if(isset($_GET["p"]))
                {
                    $category=$db->quote($_GET["p"]);
                    $query = $db->prepare("SELECT * FROM PRODUCT WHERE Category = $category");
                }
                elseif (isset($_GET["latest"]))
                {
                    $query = $db->prepare("SELECT * FROM PRODUCT WHERE Latest_Flag = 'Y'");
                }
                $query->execute();
                $rows=$query->fetchAll();                
                foreach ($rows as $row) { ?>
                     <div class="col-sm-4 col-lg-4 col-md-4" id="bootstrap">
                        <div class="thumbnail">
                            <img src="http://placehold.it/320x150" alt="">
                            <div class="caption">
                                <a href="#"><?php echo $row['Name']; ?></a>
                            </div>
                            <div id="price">
                                <span>List Price: $<?php echo $row['List_Price']; ?></span>
                                <span>List Price: $<?php echo $row['Sale_Price']; ?></span>                                
                            </div>
                        </div>
                    </div>
                <?php }
            }catch(PDOException $ex){
                echo $ex->getMessage(); 
            }
            ?>        
        </div>
    </div>
     <div class="clear"></div>
    <!--Footer-->
    <?php include 'footer.php';?>
</body>
</html>
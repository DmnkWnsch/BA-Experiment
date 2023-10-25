<?php

$output = "none";

if (isset($_POST['data'])) {
    $output = "data";
}

?>

<html>
<body>

<?php echo $output . '<br><br>'; ?>

<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit" name="data">
</form>

</body>
</html>
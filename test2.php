<?php

require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');

$util = new Util();

$givenUID = (isset($_GET['uid']) ? $_GET['uid'] : 0);

echo $givenUID . '<br>';

$res = $util->checkUID($givenUID);

var_dump($res);

?>
<?php
require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');
$util = new Util();
session_start();

if (!isset($_SESSION['uid'])) {
    echo "Es ist ein Fehler aufgetreten. Bitte starte das Expirment erneut.";
    die();
}

# As we have 4 webpages to show, redirect to the ending page when we get here and have 4 pages visited
if ($_SESSION['current_site'] >= 4) {
    header("Location: thanks.php");
    die();
}

if ($_SESSION['saved'] == false) {
    $_SESSION['current_banner'] = $_SESSION['current_banner'] + 1;
    $_SESSION['current_site'] = $_SESSION['current_site'] + 1;
    $_SESSION['saved'] = true;
    $util->updateUID($_SESSION['uid'], $_SESSION['current_banner'], $_SESSION['current_site']);
}

var_dump($_SESSION);

?>

<a href="show.php">WEITER<a>
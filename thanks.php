<?php
session_start();

if (!isset($_SESSION['uid'])) {
    echo "Es ist ein Fehler aufgetreten. Bitte starte das Expirment erneut.";
    die();
}

$uid = $_SESSION['uid'];

# TODO Link zur Weiterleitung zu LimeSurvey --> uid an Limesurvey weitergeben um beide Seiten miteinander in Verbindung bringen zu können
# Example: https://bildungsportal.sachsen.de/umfragen/limesurvey/index.php/238957?user_id=c4ad7a66-d847-4abc-a67a-d582854dea0e

?>

Danke für deine Teilnahme.
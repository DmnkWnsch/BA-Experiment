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

$newSite = $_SESSION['current_site'];
//$newSite = 2;
$shownSite = $newSite - 1;
$progress = (100 / 4) * ($shownSite);

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BA-Experiment</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container-md mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-xl-10 col-xxl-9">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center mb-3">
                Experiment zur Positionierung des Impressums
              </h3>
              <div class="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar text-light w-<?= $progress ?>"><?= $progress ?>%</div>
              </div>
              <p class="card-text px-1">
                Die Bearbeitung von <b>Seite <?= $shownSite ?></b> ist damit abgeschlossen.<br>
                Weiter geht es mit einem Klick auf den Button.
              </p>

              <div class="row mt-4">
                <div class="d-grid col-6 mx-auto">
                  <a
                    href="show.php"
                    class="btn btn-success btn-fluid"
                    >Weiter zu Seite <?= $newSite ?></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
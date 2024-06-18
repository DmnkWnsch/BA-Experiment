<?php
require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');
$util = new Util();
session_start();

if (!isset($_SESSION['uid'])) {
  include (__DIR__ . "/html/template/error.php");
  die();
}

# As we have 4 webpages to show, redirect to the ending page when we get here and have 4 pages visited
if ($_SESSION['current_site'] < 4) {
    header("Location: break");
    die();
}

$uid = $_SESSION['uid'];
//$uid = "c4ad7a66-d847-4abc-a67a-d582854dea0e";
$util->setUIDFinished($uid);

$poll_link = "https://bildungsportal.sachsen.de/umfragen/limesurvey/index.php/238957?user_id=$uid"

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
    <noscript><meta http-equiv="refresh" content="0;url=jserror" /></noscript>
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
              <div class="alert alert-success border-0" role="alert">
                Du hast den <b>ersten Teil</b> des Experiments abgeschlossen!
              </div>
              <p class="card-text px-1">
                Um die Bearbeitung forzusetzen und mit dem zweiten Teil zu beginnen, drücken Sie
                bitte den Button.
              </p>

              <div class="row mt-4">
                <div class="d-grid col-6 mx-auto">
                  <a
                    href="<?= $poll_link ?>"
                    class="btn btn-primary"
                    >Weiter zur Umfrage</a
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
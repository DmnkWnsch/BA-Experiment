<?php
require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');
$util = new Util();
session_start();

if (!isset($_SESSION['uid'])) {
  include (__DIR__ . "/html/template/error.php");
  die();
}

$uni_websites = array(
    1 => "TUC/TUC.htm",
    2 => "HHL/HHL.htm",
    3 => "HFBK_D/HFBK_D.htm",
    4 => "BA_DRESDEN/BA_Dresden.htm"
);

function getUniWebsite($id) {
    global $uni_websites;
    return "/uni_websites/" . $uni_websites[$id];
}

$uid = $_SESSION['uid'];
$order = $_SESSION['order'];
$current_banner = $_SESSION['current_banner'];
$current_site = $_SESSION['current_site'];

$id = $order[$current_banner];
$data_banner_id = $id;

$showModal = true;
include ("saveClick.php");

$lastDone = isset($_SESSION['lastDone']) ? $_SESSION['lastDone'] : -1;

if ($showModal) {
  if ($lastDone == $data_banner_id) {
    $showModal = false;
  }
}

if ($showModal) {
  $util->saveBannerAction($uid, $id, 'open', time());
}

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
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", () => {
        const myModal = new bootstrap.Modal("#experimentModal");
        myModal.show();
        console.log("banner");
      });

      window.onload = () => {
        removeLoadingScreen();
      }

      function removeLoadingScreen() {
        let loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.visibility = "hidden";
        loadingScreen.style.opacity = 0;
      }

      //setTimeout(removeLoadingScreen, 5000);
    </script>
    <style>
      .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999999;
        transition: visibility 0s 350ms, opacity 350ms linear;
      }
    </style>
  </head>
  <body>
        <?php
            if ($showModal) {
              include(__DIR__ . "/html/template/loading.php");
              include(__DIR__ . "/html/template/$id.php");
            }
        ?>
    <iframe
      src="<?php echo htmlspecialchars(getUniWebsite($current_site)); ?>"
      style="
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        z-index: -1;
      "
    ></iframe>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

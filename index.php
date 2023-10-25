<?php 
require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');

if (!isset($_GET['uid'])) {
    exit;
}

$uid = $_GET['uid'];

if (strlen($uid) != 10) {
    exit;
}

# If we're here, uid is set and length is 10

$redirect_url = "banners.php";

session_start();

if (isset($_SESSION['uid'])) {
    # User entered the website already, go where he left of
    # happens if the tab gets closed

    # redirecting to the page where the cookie banners are shown
    header("Location: " . $redirect_url);
    die();
}

$util = new Util();
$uid_check = $util->checkUID($uid);

# creating an random order so every user sees a different one
$random_order = range(1, 13);
shuffle($random_order);

# the current index of the order for a given user
$currentId = 0;

if (sizeof($uid_check) > 0) {
    # UID already found in DB -> user closed browser while on website
    # restoring data and returning to last banner

    $db_current = $uid_check['current'];
    $db_order = $uid_check['order'];

    # setting the values so the old state will be saved in the session instead of a new one
    $random_order = explode(",", $db_order);
    $currentId = $db_current;
} else {
    # Inserting a new uid with the random order into the database
    $util->saveUID($uid, implode(",", $random_order), $currentId);
}

# setting all the needed information in the session
# should be available as long as the user doesnt close the browser
# if he closes the browser, he could technically reenter -> double db entries + new order currently
$_SESSION['uid'] = $uid;
$_SESSION['current'] = $currentId;
$_SESSION['order'] = $random_order;

# redirecting to the page where the cookie banners are shown
header("Location: " . $redirect_url);
die();

?>
<?php 
require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');
$util = new Util();

session_start();
$redirect_url = "show.php";

# generate a uuid to identify the user
$uid = $util->generateUUID();

if (isset($_SESSION['uid'])) {
    # User entered the website already, go where he left of
    # happens if the tab gets closed
    $uid = $_SESSION['uid'];
}

$uid_check = $util->checkUID($uid);

# creating an random order so every user sees a different one
$random_order = range(1, 4);
shuffle($random_order);

# the current index of the order for a given user
$currentId = 0;
$current_site = 1;
$finished = 0;

if (sizeof($uid_check) > 0) {
    # UID already found in DB -> user closed browser while on website
    # restoring data and returning to last banner

    $db_current = $uid_check['current_banner'];
    $db_order = $uid_check['order'];
    $db_site = $uid_check['current_site'];
    $db_finished = $uid_check['finished'];

    # setting the values so the old state will be saved in the session instead of a new one
    $random_order = explode(",", $db_order);
    $currentId = $db_current;
    $current_site = $db_site;
    $finished = $db_finished;

    # if user has already started, redirect to break site instead of next site
    $redirect_url = "break.php";
} else {
    # Inserting a new uid with the random order into the database
    $util->saveUID($uid, implode(",", $random_order), $currentId, $current_site);
}

# setting all the needed information in the session
# should be available as long as the user doesnt close the browser
# if he closes the browser, he could technically reenter -> double db entries + new order currently
$_SESSION['uid'] = $uid;

if ($finished == 1) {
    header("Location: thanks.php");
    die();
}

$_SESSION['current_site'] = $current_site;
$_SESSION['current_banner'] = $currentId;
$_SESSION['order'] = $random_order;
$_SESSION['saved'] = true;

# redirecting to the page where the cookie banners are shown
header("Location: " . $redirect_url);
die();

?>
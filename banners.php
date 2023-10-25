<?php
require ($_SERVER["DOCUMENT_ROOT"] . '/util/util.php');
$util = new Util();

session_start();

# Getting all the information stored in the session of the users browser
$uid = $_SESSION['uid'];
$order = $_SESSION['order'];
$current = $_SESSION['current'];

# Loads the template body for every page
$template_file = "./html/template.html";
$template_contents = file_get_contents($template_file);

# includes the file that takes care of saving the clicks to the database
include("saveClick.php");

# Show end-screen if current number is higher than the amount of banners to show
# amount depens on the size of the array with the order for the specific user
if ($current >= sizeof($order)) {
    echo str_replace("%banner_template%", file_get_contents("./html/endscreen.html"), $template_contents);
    exit;
}

# Loads the specific cookie banner depending on the order array and current value of the user
# Replaces a placeholder in the body template and shows the cookie banner
$id = $order[$current];
#echo "showing $id at " . microtime() . '<br>';
$util->saveBannerAction($uid, $id, 'open', time());
echo str_replace("%banner_template%", file_get_contents("./html/template/$id.html"), $template_contents);

?>
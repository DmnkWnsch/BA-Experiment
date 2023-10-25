<?php

# File for testing purposes only - not needed in production
# Grabs a given cookie banner via id (or the first one if none is given) and displays it
# also adds the body around it, contained in "/html/template.html"

$template_file = "./html/template.html";
$template_contents = file_get_contents($template_file);

$id = (isset($_GET['id']) ? $_GET['id'] : 1);

echo str_replace("%banner_template%", file_get_contents("./html/template/$id.html"), $template_contents);

?>
<?php

$_SESSION['current'] = $current + 1;

# All the buttons/links on a banner that can be clicked
$actionsMap = array(
    1 => array('decline_all', 'accept_all', 'save'),
    2 => array('decline_all', 'accept_all', 'save'),
    3 => array('decline_all', 'accept_all', 'save'),
    4 => array('decline_all', 'accept_all', 'save'),
    5 => array('save', 'decline_all', 'accept_all'),
    6 => array('save', 'accept_all'),
    7 => array('decline_all', 'accept_all'),
    8 => array('decline_all', 'accept_all'),
    9 => array('decline_all', 'accept_all'),
    10 => array('more_options', 'accept'),
    11 => array('more_options', 'accept'),
    12 => array('only_required', 'accept'),
    13 => array('only_required', 'accept')
);

# Default checkboxes which are shown in all banners with checkboxes
$defaultOptions = array('statistics', 'marketing', 'external_media');
# Array of arrays with the corrosponding checkboxes to a given banner id
$checkboxesMap = array(
    1 => $defaultOptions,
    2 => $defaultOptions,
    3 => $defaultOptions,
    4 => $defaultOptions,
    5 => $defaultOptions,
    6 => $defaultOptions
);

# Only let something happen if the method is post
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentTime = time();

    #echo "FOUND FORM CLICK<br>";

    #var_dump($_POST);

    #echo '<br>';

    $options = "";
    $target = "";

    $bannerId = $_POST['id'];
    $availableActions = $actionsMap[$bannerId];

    # iterate through the possible actions for a specific banner and set the "target" to the used action
    foreach ($availableActions as $action) {
        if (isset($_POST[$action])) {
            $target = $action;
        }
    }

    # set "options" to all the selected options in the banner - only works on banners with checkboxes
    if (isset($checkboxesMap[$bannerId])) {
        # Check and save the selected options (checkboxes) in the banner
        $selectedOptions = array();
        $availableOptions = $checkboxesMap[$bannerId];
        foreach ($availableOptions as $option) {
            if (isset($_POST[$option])) {
                array_push($selectedOptions, $option);
            }
        }

        $options = implode(",", $selectedOptions);
    }

    # Saving the click to the database
    $util->saveBannerAction($uid, $bannerId, $target, $currentTime, $options);
}

?>
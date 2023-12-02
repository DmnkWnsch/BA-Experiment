<?php

# All the buttons/links on a banner that can be clicked
$actionsMap = array(
    1 => array('only_required', 'save'),
    2 => array('accept'),
    3 => array('save', 'accept_all'),
    4 => array('decline_all', 'accept_all'),
);

# Default checkboxes which are shown in all banners with checkboxes
$defaultOptions = array('statistics', 'marketing', 'external_media');
# Array of arrays with the corrosponding checkboxes to a given banner id
$checkboxesMap = array(
    1 => $defaultOptions,
    2 => $defaultOptions,
    3 => $defaultOptions
);

# Only let something happen if the method is post
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SESSION['saved'] == true) {
    $currentTime = time();

    $options = "";
    $target = "";

    //$bannerId = $_POST['id'];
    $bannerId = $data_banner_id;
    $availableActions = $actionsMap[$bannerId];

    # iterate through the possible actions for a specific banner and set the "target" to the used action
    foreach ($availableActions as $action) {
        if (isset($_POST[$action])) {
            $target = $action;
            $showModal = false;
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

    if ($target == "") {
        $target = "MANIPULATED";
        $showModal = false;
    }

    # Saving the click to the database
    $_SESSION['saved'] = false;
    $_SESSION['lastDone'] = $bannerId;
    $util->saveBannerAction($uid, $bannerId, $target, $currentTime, $options);
}

?>
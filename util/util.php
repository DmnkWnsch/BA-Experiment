<?php
    header("Content-Type: text/html; charset=utf-8");
    
    error_reporting(E_ALL);

require ($_SERVER["DOCUMENT_ROOT"] . '/util/data.php');

# Utility class for working with the database via given methods

class Util {

    # Gets the stored data about a given uid and returns it in an array
    public function checkUID($uid) {
        $db = new DBUtil();

        $command = "SELECT * FROM `users` WHERE `uid`='$uid';";
        $result = $db->runStatement($command);

        $list = array();

        while ($row = $result->fetch_assoc()) {
            $list['uid'] = $row['uid'];
            $list['order'] = $row['order'];
            $list['current'] = $row['current'];
        }

        return $list;
    }

    # Saves a given uid, order and the current Index to the database
    public function saveUID($uid, $order, $currentId) {
        $db = new DBUtil();

        $command = "INSERT INTO `users` SET `uid`='$uid', `order`='$order', `current`='$currentId';";
        $db->runStatement($command);
    }

    public function saveBannerAction($uid, $bannerId, $action, $timestamp, $options = "") {
        $db = new DBUtil();
        $command = "INSERT INTO `actions` SET `uid`='$uid', `banner`='$bannerId', 
                    `target`='$action', `timestamp`='$timestamp', `options`='$options';";
        $db->runStatement($command);
    }

}

?>
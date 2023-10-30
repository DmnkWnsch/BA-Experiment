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
            $list['current_banner'] = $row['current_banner'];
            $list['current_site'] = $row['current_site'];
            $list['finished'] = $row['finished'];
        }

        return $list;
    }

    # Saves a given uid, order and the current Index to the database
    public function saveUID($uid, $order, $currentId, $current_site) {
        $db = new DBUtil();

        $command = "INSERT INTO `users` SET `uid`='$uid', `order`='$order', `current_banner`='$currentId', `current_site`='$current_site', `finished`='0';";
        $db->runStatement($command);
    }

    public function updateUID($uid, $currentId, $current_site) {
        $db = new DBUtil();

        $command = "UPDATE `users` SET `current_banner`='$currentId', `current_site`='$current_site' WHERE `uid`='$uid';";
        $db->runStatement($command);
    }

    public function setUIDFinished($uid) {
        $db = new DBUtil();

        $command = "UPDATE `users` SET `finished`='1' WHERE `uid`='$uid';";
        $db->runStatement($command);
    }

    public function saveBannerAction($uid, $bannerId, $action, $timestamp, $options = "") {
        $db = new DBUtil();
        $command = "INSERT INTO `actions` SET `uid`='$uid', `banner`='$bannerId', 
                    `target`='$action', `timestamp`='$timestamp', `options`='$options';";
        $db->runStatement($command);
    }

    public function generateUUID($data = null) {
        // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
        $data = $data ?? random_bytes(16);
        assert(strlen($data) == 16);
    
        // Set version to 0100
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        // Set bits 6-7 to 10
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    
        // Output the 36 character UUID.
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

}

?>
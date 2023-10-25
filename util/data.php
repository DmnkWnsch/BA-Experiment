<?php

# Utility class for connection to the database and sending statements to it

class DBUtil {
    
    public function buildConnection() {
        $db_ini = parse_ini_file($_SERVER["DOCUMENT_ROOT"] . '/supersecretfile.ini');
        return new mysqli($db_ini['db_host'], 
                            $db_ini['db_user'], 
                            $db_ini['db_password'],
                            $db_ini['db_target']);
    }

    public function runStatement($command) {
        $db = $this->buildConnection();

        $statement = $db->stmt_init();
        $statement->prepare($command);
        $statement->execute();
        $result = $statement->get_result();

        return $result;
    }

}

?>
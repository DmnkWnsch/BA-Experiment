<?php

# File for testing purposes only - not needed in production
# Resets the current session of the user
# Same effect as closing the browser and opening it again

session_start();

session_unset();
session_destroy();

?>
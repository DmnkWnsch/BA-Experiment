<?php

# File for testing purposes only - not needed in production
# Grabs a given cookie banner via id (or the first one if none is given) and displays it
# also adds the body around it, contained in "/html/template.html

$id = (isset($_GET['id']) ? $_GET['id'] : 1);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", () => {
        const myModal = new bootstrap.Modal("#experimentModal");
        myModal.show();
      });
    </script>
    <style>
        .modal-backdrop {
            background-color: transparent;
        }
    </style>
</head>
<body>
    <?php include(__DIR__ . "/html/template/$id.php"); ?>
<script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
</body>
</html>
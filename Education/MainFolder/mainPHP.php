<?php
    header('Content-Type: application/json');
    
    //      [[[     SQL      ]]]
    function sqlConnect($databaseName){
        if ($_SERVER["HTTP_HOST"] === "localhost") {
            $host = "localhost";
            $user = "root";
            $password = "";
        } else {
            $host = "localhost";
            $user = "u199951248_misterysouls";
            $password = "SAMISFGB15-mistermistery13";
        }

        $conn = mysqli_connect($host, $user, $password, $databaseName);

        return $conn;
    }

    function sqlDisconnect($conn){
        mysqli_close($conn);
    }

    //      [[[     SELECT      ]]]
    function sqlSelect($conn,$statement,$values = []){
        $output = false;
        $totalRows = [];
        $error = false;

        try {
            // Set types of the values
            $types = "";
            foreach ($values as $i => $v){
                if (gettype($v) == "string"){
                    $types = $types . "s";
                }elseif (gettype($v) == "integer"){
                    $types = $types . "i";
                }elseif (gettype($v) == "boolean"){
                    $types = $types . "b";
                }
            }

            // Create prepared statement
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            $stmt = mysqli_prepare($conn,$statement);

            // Change ? signs for values
            if ($types != ""){
                mysqli_stmt_bind_param($stmt,$types,...$values);
            }
            
            // Execute prepared statement
            mysqli_stmt_execute($stmt);

            // Get results of the execution
            $result = mysqli_stmt_get_result($stmt);
            $totalRows = [];
            if ($result -> num_rows > 0){
                while ($row = mysqli_fetch_assoc($result)) {
                    $totalRows[] = $row;
                }
            }

            $output = true;
        }catch (Exception $error){
            $error = $error->getMessage();
            file_put_contents(__DIR__ . "/database_log.txt",$error,FILE_APPEND);
        }
        

        // Return results
        return [
            "output" => $output,
            "totalRows" => $totalRows,
            "error" => $error
        ];
    }

    //      [[[      INSERT      ]]]
    function sqlInsert($conn,$statement,$values = []){
        $output = false;
        $error = false;
        try{
            // Set types of the values
            $types = "";
            foreach ($values as $i => $v){
                if (gettype($v) == "string"){
                    $types = $types . "s";
                }elseif (gettype($v) == "integer"){
                    $types = $types . "i";
                }elseif (gettype($v) == "boolean"){
                    $types = $types . "b";
                }
            }

            // Create prepared statement
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            $stmt = mysqli_prepare($conn,$statement);
            if (!$stmt){
                die("Error en la consulta Insert");
            }

            // Change ? signs for values
            if ($types != ""){
                mysqli_stmt_bind_param($stmt,$types,...$values);
            }

            // Execute prepared statement
            mysqli_stmt_execute($stmt);

            $output = true;
        }catch(Exception $error){
            $error = $error->getMessage();
            file_put_contents(__DIR__ . "/database_log.txt", $error, FILE_APPEND);
        }

        return [
            "output" => $output,
            "error" => $error
        ];
    }

    //      [[[     UPDATE      ]]]
    function sqlUpdate($conn, $statement, $values = []) {
        $output = false;
        $affectedRows = 0;
        $error = false;

        try {
            // Set types of the values
            $types = "";
            foreach ($values as $v) {
                if (gettype($v) == "string") {
                    $types .= "s";
                } elseif (gettype($v) == "integer") {
                    $types .= "i";
                } elseif (gettype($v) == "boolean") {
                    $types .= "b";
                }
            }

            // Create prepared statement
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            $stmt = mysqli_prepare($conn, $statement);
            if (!$stmt) {
                die("Error en la consulta Update");
            }

            // Bind parameters
            if ($types != "") {
                mysqli_stmt_bind_param($stmt, $types, ...$values);
            }

            // Execute prepared statement
            mysqli_stmt_execute($stmt);

            $output = true;
            $affectedRows = mysqli_stmt_affected_rows($stmt);
        } catch (Exception $error) {
            $error = $error->getMessage();
            file_put_contents(__DIR__ . "/database_log.txt", $error, FILE_APPEND);
        }

        return [
            "output" => $output,
            "affectedRows" => $affectedRows,
            "error" => $error
        ];
    }

    //      [[[     DELETE      ]]]
    function sqlDelete($conn, $statement, $values = []) {
        $output = false;
        $affectedRows = 0;
        $error = false;
        try {
            // Set types of the values
            $types = "";
            foreach ($values as $v) {
                if (gettype($v) == "string") {
                    $types .= "s";
                } elseif (gettype($v) == "integer") {
                    $types .= "i";
                } elseif (gettype($v) == "boolean") {
                    $types .= "b";
                }
            }

            // Create prepared statement
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            $stmt = mysqli_prepare($conn, $statement);
            if (!$stmt) {
                die("Error en la consulta Delete");
            }

            // Bind parameters
            if ($types != "") {
                mysqli_stmt_bind_param($stmt, $types, ...$values);
            }

            // Execute prepared statement
            mysqli_stmt_execute($stmt);

            $output = true;
            $affectedRows = mysqli_stmt_affected_rows($stmt);
        } catch (Exception $error) {
            $error = $error->getMessage();
            file_put_contents(__DIR__ . "/database_log.txt", $error, FILE_APPEND);
        }

        return [
            "output" => $output,
            "affectedRows" => $affectedRows,
            "error" => $error
        ];
    }
?>
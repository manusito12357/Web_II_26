<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$serverName = "localhost";
$connectionInfo = [
    "Database"               => "doguito_petshop",
    "UID"                    => "sa",
    "PWD"                    => "123",
    "CharacterSet"           => "UTF-8",
    "TrustServerCertificate" => true
];

$conn = sqlsrv_connect($serverName, $connectionInfo);

if (!$conn) {
    http_response_code(500);
    die(json_encode(["error" => sqlsrv_errors()]));
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case 'GET':
        $id = $_GET['Id'] ?? null;

        if ($id) {
            $stmt = sqlsrv_query($conn, "SELECT * FROM clientes WHERE Id = ?", [$id]);
            $row  = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
            echo json_encode($row ?: ["message" => "No existe"]);
        } else {
            $stmt     = sqlsrv_query($conn, "SELECT * FROM clientes");
            $clientes = [];
            while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
                $clientes[] = $row;
            }
            echo json_encode($clientes);
        }
        break;

    case 'POST':
    $input  = json_decode(file_get_contents('php://input'), true);
    $id     = $input['Id']     ?? '';
    $nombre = $input['nombre'] ?? '';
    $email  = $input['email']  ?? '';
    
    // DEBUG temporal
    error_log("Id: $id, Nombre: $nombre, Email: $email");
    
    $sql  = "INSERT INTO clientes (Id, nombre, email) VALUES (?, ?, ?)";
    $stmt = sqlsrv_query($conn, $sql, [$id, $nombre, $email]);

    if ($stmt) {
        http_response_code(201);
        echo json_encode([
            "message" => "Creado exitosamente",
            "Id"      => $id
        ]);
    } else {
        http_response_code(500);
        $errors = sqlsrv_errors();
        echo json_encode(["error" => $errors]); // ahora muestra el error real
    }
    break;

    case 'PUT':
        $input  = json_decode(file_get_contents('php://input'), true);
        $id     = $input['Id']     ?? null;
        $nombre = $input['nombre'] ?? '';
        $email  = $input['email']  ?? '';

        if ($id) {
            $sql  = "UPDATE clientes SET nombre = ?, email = ? WHERE Id = ?";
            $stmt = sqlsrv_query($conn, $sql, [$nombre, $email, $id]);

            if ($stmt) {
                echo json_encode(["message" => "Actualizado exitosamente"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => sqlsrv_errors()]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Falta el Id"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['Id'] ?? null;

        if ($id) {
            $stmt = sqlsrv_query($conn, "DELETE FROM clientes WHERE Id = ?", [$id]);

            if ($stmt) {
                echo json_encode(["message" => "Eliminado exitosamente", "Id" => $id]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => sqlsrv_errors()]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "Falta el Id"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}

sqlsrv_close($conn);
?>
<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ——— CONEXIÓN SQL SERVER ———
$serverName = "localhost"; // o ".\SQLEXPRESS" si usas Express
$connectionInfo = [
    "Database"               => "doguito_petshopii",
    "UID"                    => "sa",          // tu usuario
    "PWD"                    => "tu_password", // tu contraseña
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
            $stmt = sqlsrv_query($conn, "SELECT * FROM cliente WHERE Id = ?", [$id]);
            $row  = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
            echo json_encode($row ?: ["message" => "No existe"]);
        } else {
            $stmt     = sqlsrv_query($conn, "SELECT * FROM cliente");
            $clientes = [];
            while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
                $clientes[] = $row;
            }
            echo json_encode($clientes);
        }
        break;

    case 'POST':
        $input  = json_decode(file_get_contents('php://input'), true);
        $nombre = $input['nombre'] ?? '';
        $email  = $input['email']  ?? '';

        $sql  = "INSERT INTO cliente (nombre, email) OUTPUT INSERTED.Id VALUES (?, ?)";
        $stmt = sqlsrv_query($conn, $sql, [$nombre, $email]);

        if ($stmt) {
            $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
            http_response_code(201);
            echo json_encode([
                "message" => "Creado exitosamente",
                "Id"      => $row['Id']
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => sqlsrv_errors()]);
        }
        break;

    case 'PUT':
        $input  = json_decode(file_get_contents('php://input'), true);
        $id     = $input['Id']     ?? null;
        $nombre = $input['nombre'] ?? '';
        $email  = $input['email']  ?? '';

        if ($id) {
            $sql  = "UPDATE cliente SET nombre = ?, email = ? WHERE Id = ?";
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
            $stmt = sqlsrv_query($conn, "DELETE FROM cliente WHERE Id = ?", [$id]);

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
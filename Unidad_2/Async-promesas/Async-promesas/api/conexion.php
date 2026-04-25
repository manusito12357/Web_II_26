<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "doguito_petshopii";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    http_response_code(500);
    die(json_encode(["error" => "Conexión fallida"]));
}

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET': 
        $id = $_GET['Id'] ?? null; 
        if($id){
            $stmt = $conn->prepare("SELECT * FROM cliente WHERE Id = ?");
            $stmt->bind_param("i", $id); 
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_assoc() ?: ["message" => "No existe"]);
        } else {
            $result = $conn->query("SELECT * FROM cliente");
            $clientes = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($clientes);
        }
        break;

    case 'POST': 
        $input = json_decode(file_get_contents('php://input'), true);
        $nombre = $input['nombre'] ?? '';
        $email = $input['email'] ?? '';
        
        // IMPORTANTE: Si es autoincrementable, NO pongas el Id en el INSERT
        $stmt = $conn->prepare("INSERT INTO cliente (nombre, email) VALUES (?, ?)");
        $stmt->bind_param("ss", $nombre, $email);
        
        if($stmt->execute()){
            http_response_code(201);
            echo json_encode([
                "message" => "creado exitosamente", 
                "Id" => $conn->insert_id // Esto te devuelve el Id que generó la BD
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al insertar"]);
        }
        break;

    case 'PUT': 
        $input = json_decode(file_get_contents('php://input'), true);
        // Asegúrate que el JSON que envías tenga "Id" (mayúscula)
        $id = $input['Id'] ?? null; 
        $nombre = $input['nombre'] ?? '';
        $email = $input['email'] ?? '';

        if($id) {
            $stmt = $conn->prepare("UPDATE cliente SET nombre = ?, email = ? WHERE Id = ?");
            $stmt->bind_param("ssi", $nombre, $email, $id);
            
            if($stmt->execute()){
                echo json_encode(["message" => "actualizado exitosamente"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "error al actualizar"]);
            }
        } else {
            echo json_encode(["error" => "Falta el Id"]);
        }
        break;

    case 'DELETE': 
        $id = $_GET['Id'] ?? null;
        if($id) {
            $stmt = $conn->prepare("DELETE FROM cliente WHERE Id = ?");
            $stmt->bind_param("i", $id);
            
            if($stmt->execute()){
                echo json_encode(["message" => "Eliminado exitosamente", "Id" => $id]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "error al eliminar"]);
            }
        } else {
            echo json_encode(["error" => "Falta el Id"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}

$conn->close();
?>
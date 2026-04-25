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
            $stmt = $conn->prepare("SELECT * FROM productos WHERE Id = ?");
            $stmt->bind_param("s", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_assoc() ?: ["message" => "No existe"]);
        } else {
            $result = $conn->query("SELECT * FROM productos");
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
        }
        break;

    case 'POST':
        $input       = json_decode(file_get_contents('php://input'), true);
        $nombre      = $input['nombre']      ?? '';
        $precio      = $input['precio']      ?? 0;
        $descripcion = $input['descripcion'] ?? '';

        $stmt = $conn->prepare("INSERT INTO productos (nombre, precio, descripcion) VALUES (?, ?, ?)");
        $stmt->bind_param("sds", $nombre, $precio, $descripcion);

        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(["message" => "Producto creado exitosamente"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al insertar"]);
        }
        break;

    case 'PUT':
        $input       = json_decode(file_get_contents('php://input'), true);
        $id          = $input['Id']          ?? null;
        $nombre      = $input['nombre']      ?? '';
        $precio      = $input['precio']      ?? 0;
        $descripcion = $input['descripcion'] ?? '';

        if($id){
            $stmt = $conn->prepare("UPDATE productos SET nombre=?, precio=?, descripcion=? WHERE Id=?");
            $stmt->bind_param("sdss", $nombre, $precio, $descripcion, $id);
            if($stmt->execute()){
                echo json_encode(["message" => "Producto actualizado exitosamente"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Error al actualizar"]);
            }
        } else {
            echo json_encode(["error" => "Falta el Id"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['Id'] ?? null;
        if($id){
            $stmt = $conn->prepare("DELETE FROM productos WHERE Id = ?");
            $stmt->bind_param("s", $id);
            if($stmt->execute()){
                echo json_encode(["message" => "Producto eliminado", "Id" => $id]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Error al eliminar"]);
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
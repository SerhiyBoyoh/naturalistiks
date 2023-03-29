<?php
 $host = 'localhost';
 $dbname = 'Zamovlenya';
 $username = 'root';
 $password = '';
 
 try {
     $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
     $name = "";
     $phone_number = "";
     $email = "";
 
     $stmt = $pdo->prepare("INSERT INTO Zamovlenya (name, phone_number, email) VALUES (:name, :phone_number, :email)");
     $stmt->bindParam(':name', $name);
     $stmt->bindParam(':phone_number', $phone_number);
     $stmt->bindParam(':email', $email);
 
     $stmt->execute();
     echo "Дані успішно додано до таблиці.";
 } catch(PDOException $e) {
     echo "Помилка підключення до бази даних: " . $e->getMessage();
 }
 
?>
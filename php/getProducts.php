<?php
//为我们的应用提供数据；
//提供商品列表（商品是放在数据的，需要读取文件）
$mysqli = new mysqli("localhost","root","","test1");
if($mysqli ->connect_errno){
	die($mysqli->connect_errno);
}

//防止乱码
$mysqli->query("set names utf8");

$sql = "SELECT * FROM product";
$res = $mysqli->query($sql);

if($res->num_rows){
	$array = $res->fetch_all(MYSQLI_ASSOC);
	echo json_encode($array);  //数组转换成字符串;
}
$mysqli->close();


?>
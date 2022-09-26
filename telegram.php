<?php

$name = $_POST['userName'];
$people = $_POST['numberPeople'];
$datetime = $_POST['dateInput'];
$time = $_POST['timeInput'];
$phone = $_POST['phone'];
$token = "5347622241:AAFaxBK-sDyTptBKh5EHa8tN1qbi4WgzhJs";
$chat_id = "-769112145";
$arr = array(
  'Имя: ' => $name,
  'Кол-во людей:' => $people,
  'Число:' => $datetime,
  'Время' => $time,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>
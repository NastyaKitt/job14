<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверьте, какая форма была отправлена
    if (isset($_POST['name']) && isset($_POST['tel'])) {
        // Получите данные из формы
        $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
        $tel = htmlspecialchars(strip_tags(trim($_POST['tel'])));
        
        // Сформируйте сообщение
        $to = "sobakasbritimiiacami@gmail.com";
        $subject = "Заявка с сайта";
        $message = "Имя: $name\nТелефон: $tel";
        $headers = "From: noreply@yourdomain.com\r\n";
        $headers .= "Reply-To: $to\r\n";
        
        // Отправьте письмо
        if (mail($to, $subject, $message, $headers)) {
            echo "Сообщение успешно отправлено!";
        } else {
            echo "Ошибка при отправке сообщения. Попробуйте снова.";
        }
    }
}
?>

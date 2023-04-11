<?php

require_once('/home/s1093304/public_html/1093304/TCPDF/tcpdf_import.php');

/*---------------- Print PDF Start -----------------*/
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

$鯊魚 = $_POST['鯊魚']*450;
$軟絲 = $_POST['軟絲']*850;
$花蟹 = $_POST['花蟹']*750;
$花蟹小的 = $_POST['花蟹小的']*450;
$花蟹再小一點 = $_POST['花蟹再小一點']*350;
$大沙母 = $_POST['大沙母']*850;
$海瓜子 = $_POST['海瓜子']*180;
$奶油貝 = $_POST['奶油貝']*250;
$生蠔 = $_POST['生蠔']*180;
$木瓜螺 = $_POST['木瓜螺']*350;
$小花龍 = $_POST['小花龍']*1250;
$水姑娘 = $_POST['水姑娘']*1680;
$象蚌 = $_POST['象蚌']*650;
$德順鹿茸 = $_POST['德順鹿茸']*870;
$總和 = 0;
$總和 = $鯊魚+$軟絲+$花蟹+$花蟹小的+$花蟹再小一點+$大沙母
		+$海瓜子+$奶油貝+$生蠔+$木瓜螺+$小花龍+$水姑娘
		+$象蚌+$德順鹿茸;
		
$location=$_POST['location'];
$city=$_POST['city'];
$road=$_POST['road'];
$number=$_POST['number'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$comment=$_POST['comment'];
$day=$_POST['day'];
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->SetFont('cid0jp','', 18); 
$pdf->AddPage();
$name = $_POST['name'];
$html = <<<EOF

<h1  font-weight: bold;color: purple; >總和 :$總和</h1>

 <p>鯊魚: $鯊魚 元</p>

 <p>軟絲: $軟絲 元</p>

 <p>花蟹: $花蟹 元</p>

 <p>花蟹小的: $花蟹小的 元</p>

 <p>花蟹再小一點: $花蟹再小一點 元</p>

 <p>大沙母: $大沙母 元</p> 

 <p>海瓜子: $海瓜子 元</p>

 <p>奶油貝: $奶油貝 元</p>

 <p>生蠔: $生蠔 元</p>

 <p>木瓜螺: $木瓜螺 元</p>
 
 <p>小花龍: $小花龍 元</p>

 <p>水姑娘: $水姑娘 元</p>

 <p>象蚌: $象蚌 元</p>
 
 <p>德順鹿茸: $德順鹿茸 元</p>


<table cellspacing="0" cellpadding="1" border="1"
	width=400 height= 200>
<tr>
	<td>name:</td>
	<td>$name</td>
</tr>
 <tr>
	<td style="color:turquoise;">address:</td>
	<td> $location$city$road$number</td>
	
</tr>
<tr>
	<td>E-mail:</td>
	<td  colspan = "3" >$email</td>
</tr>
<tr>
	<td style="color:turquoise;">phone:</td>
	<td>$phone</td>
</tr>
<tr>
	<td rowspan = "2">comment:</td>
	<td rowspan = "2" colspan = "3" >$comment</td>
</tr>
</table>
EOF;
/*---------------- Print PDF End -------------------*/
$pdf->writeHTML($html);
// ---------------------------------------------------------

$pdfFileName = "order";

// Close and output PDF document
// This method has several options, check the source code documentation for more information.
ob_clean();
$pdf->Output(__DIR__ . '/'.$pdfFileName.'.pdf','FI');

/*---------------- Sent Mail Start -----------------*/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require '/home/s1093304/public_html/1093304/PHPMailer/src/PHPMailer.php';
require '/home/s1093304/public_html/1093304/PHPMailer/src/Exception.php';
require '/home/s1093304/public_html/1093304/PHPMailer/src/SMTP.php';

include('/home/s1093304/public_html/1093304/phpqrcode/qrlib.php');
// outputs image directly into browser, as PNG stream
QRcode::png('http://140.138.152.215/~s1093304/1093304/s1093304_HW2.php', "a.png");

$mail= new PHPMailer(); //建立新物件   
$mail->IsSMTP(); //設定使用SMTP方式寄信   
$mail->SMTPAuth = true; //設定SMTP需要驗證   
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com"; //設定SMTP主機   
$mail->Port = 465; //設定SMTP埠位，預設為25埠  
$mail->CharSet = "big5"; //設定郵件編碼   
 
$mail->Username = "Z36760376@gmail.com"; //設定驗證帳號   
$mail->Password = "100104227820"; //設定驗證密碼   
 
 
$mail->From = "Z36760376@gmail.com"; //設定寄件者信箱   
$mail->FromName = "Tester"; //設定寄件者姓名   
 
$mail->Subject = "shopping list"; //設定郵件標題   
$mail->Body = "你的購物清單如下附件 "; //設定郵件內容 
$mail->IsHTML(true); //設定郵件內容為HTML   
$mail->addAddress("Z36760376@gmail.com", "Haiya");//設定收件者郵件及名稱 
$mail->addAttachment('order.pdf');
$mail->addAttachment('a.png'); 
if(!$mail->Send()) {   
echo "Mailer Error: " . $mail->ErrorInfo;   
} else {   
echo "Message sent!";   
}
/*---------------- Sent Mail End -------------------*/
?>
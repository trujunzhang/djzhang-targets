<?php
session_start();
ob_start();
include("../include/config_header.php");	
ob_start();
/// استعدعاء ملف الأتصال بقاعدة البيانات
include("../include/config.php");
mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_keyinformation_print = "SELECT * FROM `keyinformation` WHERE id = \"1\" ";
$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
$print_value = mysqli_fetch_array($result_keyinformation_print);
$namewebsite = $print_value[namewebsite];
$namewebsiteen = $print_value[namewebsiteen];
$keywords = $print_value[keywords];
$messagesphone = $print_value[messagesphone];
$description = nl2br($print_value[description]);
$Facebook_account = $print_value[Facebook_account];
$Twitter_account = $print_value[Twitter_account];
$username_mobile = $print_value[username];
$password_mobile = $print_value[password];
$emilecommunication = $print_value[emilecommunication];
$commission = $print_value[commission];

$fixed_htaccess = $url_hraj;

?>
<?php
include("../include/functions/ftime.php");
$url_ads = $_SERVER['REQUEST_URI'];
$exp_ads = explode("/",$url_ads);
$ads_id = $exp_ads[1+$number_tags_update];


mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_keyinformation_print = "SELECT * FROM `ads` WHERE id = \"$ads_id\" ";
$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
$print_value = mysqli_fetch_array($result_keyinformation_print);
$ads_title = $print_value[ads_title];
$His_announcement_s = $print_value[His_announcement];
$ads_city = $print_value[ads_city];
$Last_updated_Ad_update = $print_value[Last_updated_Ad];
$time_add_ads = $print_value[Time_added];
$Time_added = timeago($print_value[Time_added]);
$Last_updated_Ad_update_arabic = timeago($Last_updated_Ad_update);
$ads_body = $print_value[ads_body];
$closecomment = $print_value[closecomment];
$image_link = $print_value[image_link];
$close_ads = $print_value[close_ads];
$ads_contact = $print_value[ads_contact];
//////////////////////////////////////
$ads_tags_R = $print_value[ads_tags_R];
$ads_tags_F = $print_value[ads_tags_F];
$ads_tags_FF = $print_value[ads_tags_FF];
$un_model = $print_value[un_model];
$type_ads_other_final = $print_value[type_ads_other_final];
$timer_mazad_come = $print_value[timer_mazad];

///////////////////////// link next ad ////////////////////
$link_next_ad = $ads_id - 1;
mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_keyinformation_print_next_ad = "SELECT * FROM `ads` WHERE id = \"$link_next_ad\" ";
$result_keyinformation_print_next_ad = mysqli_query($mysqli,$query_keyinformation_print_next_ad);
$print_value_next_ad = mysqli_fetch_array($result_keyinformation_print_next_ad);
$if_ad_next_found = mysqli_num_rows($result_keyinformation_print_next_ad);
if($if_ad_next_found > 0){
$if_found_ad = 1;
$new_id_link = $print_value_next_ad[id];
$new_title_link = $print_value_next_ad[ads_title];
}else{
	$if_found_ad = 0;
	}
///////////////////////// link next ad ////////////////////




/// استعدعاء ملف الأتصال بقاعدة البيانات
include("../include/config.php");
mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_login_m_ad = "SELECT * FROM `members` where id = \"$His_announcement_s\" ";
$result_query_m_ad = mysqli_query($mysqli,$query_login_m_ad);
$Data_member_m_ad = mysqli_fetch_array($result_query_m_ad);
$group_num_m_ad = $Data_member_m_ad[groupnumber];
$username_member_2_m_ad =  $Data_member_m_ad[username];
$email_member_2_m_ad =  $Data_member_m_ad[email];
$subscribe_1_member_2_m_ad =  $Data_member_m_ad[subscribe_1];
$id_user_m_ad =  $Data_member_m_ad[id];

include("../include/config.php");
mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_keyinformation_print_city = "SELECT * FROM `cities` WHERE id = \"$ads_city\" ";
$result_keyinformation_print_city = mysqli_query($mysqli,$query_keyinformation_print_city);
$print_value_city = mysqli_fetch_array($result_keyinformation_print_city);
$ads_city_name = $print_value_city[text];



?>
<!DOCTYPE html>
<html lang="ar-sa" dir="rtl"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><?php echo $ads_title; ?></title>
<meta name="description" content="<?php echo $description; ?>">
<meta name="keywords" content="<?php echo $keywords; ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="<?php echo $url_hraj; ?>templates/default/css/bootstrap.rtl.min.css" rel="stylesheet" media="screen">
<link href="<?php echo $url_hraj; ?>templates/default/css/custom3.css?v=1.4" rel="stylesheet" media="screen">
<link href="<?php echo $url_hraj; ?>templates/default/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo $url_hraj; ?>templates/default/css/custom-icon-fonts.css?v=1.1">
<script async src="<?php echo $url_hraj; ?>templates/default/js/analytics.js"></script>
<script src="<?php echo $url_hraj; ?>templates/default/js/respond.min.js"></script>
<script src="<?php echo $url_hraj; ?>templates/default/js/html5shiv.js" type="text/javascript"></script>
<script src="<?php echo $url_hraj; ?>templates/default/js/respond.proxy.js"></script>
<script src="<?php echo $url_hraj; ?>templates/default/js/jquery-1.10.1.min.js"></script>
<script src="<?php echo $url_hraj; ?>templates/default/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="<?php echo $url_hraj; ?>templates/default/js/cars.js"></script>
<script src="<?php echo $url_hraj; ?>templates/default/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo $url_hraj; ?>templates/default/js/v5.js"></script>


</head>
<body>




<?php
include("../header.php"); // استدعاء ملف الهيدر
?>

<div class="row ">
 <div class="col-xs-12  col-sm-9 col-md-9 col-lg-9 ">	
<!--Body content-->

	<?php if($close_ads === "0" || $group_num === "1" || $group_num === "2" 
	|| $id_user_m_ad === $id_member){ ?>
    
    
    	<?php  if( ($close_ads === "1" || $close_ads === "6") and ($group_num === "1" || $group_num === "2") 
		|| (($close_ads === "6" || $close_ads === "1" ) and ($id_user_m_ad === $id_member)) ){ ?>
							
		<div class="alert  alert-warning">
			هذا الإعلان محذوف
			<br>
			الإعلان المحذوف لايظهر إلا لصاحبه فقط
			<br>
		<div class="pull-left">
				   

      </div>
<br>
			</div>
        <?php
		}
		?>
		

		  <div align="center">
		  <h3>
			
		  </h3>
		  </div>
		
		
		<div class="comment ad_div">	
		


		
		<div class=" row ad_high">
			<h3> »  <?php echo $ads_title; ?> </h3>
			<div class=" comment_header">
				 &nbsp; <a href="<?php echo $fixed_htaccess; ?>users/<?php echo $username_member_2_m_ad; ?>" class="username"><?php echo $username_member_2_m_ad; ?></a>      &nbsp; <?php echo $Time_added; ?> <a href="<?php echo $fixed_htaccess; ?>city/<?php echo $ads_city; ?>/<?php echo $ads_city_name; ?>" class="city-head"><?php echo $ads_city_name; ?></a>
				<br>
				رقم الاعلان : <?php echo $ads_id; ?>
                <?php 
				if(($Last_updated_Ad_update === $time_add_ads) || $Last_updated_Ad_update === "0"){}else{
				?>
                                <br>

                آخر تحديث قبل <?php echo $Last_updated_Ad_update_arabic; ?>
                <?php } ?>
								<div class="pull-left">
				   

    <?php 
	if($if_found_ad === 1){
	?>
<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $new_id_link; ?>/<?php echo $new_title_link; ?>" class="nextad"> الإعلان التالي     ←  </a>
<?php 
}
?>
  <br>
      </div>
			</div>
			
				</div>	
	
	<div style="clear:both;"></div>
		<div class="ad_low">


		<div class="ads_body">

			
			
			
			<!--  start -->
			
		
<?php
echo $ads_body;
?>

<br>



	<?php
if(!empty($image_link)){
$IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
$cars=$IMAGES_LINK_ARRAY_P_2;
$arrlength=count($cars);

$thumbnail_link_ch = $IMAGES_LINK_ARRAY_P_2[1];
if(empty($thumbnail_link_ch)){$num_start_img = "0";}else{$num_start_img = "1";}

for($x=$num_start_img;$x<$arrlength;$x++)
  {
  ?>
  <div class="image">
<img src="<?php echo $cars[$x]; ?>" alt="<?php echo $ads_title; ?>" class="carads">
<div class="watermark"></div></div>
  <?php 
  }

}
?>
	


			
			
			<!--  end -->
			
			
			
	</div>
	<br>





	<?php
	
		$ads_tags_R = $print_value[ads_tags_R];
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_R = "SELECT * FROM `section` WHERE id = \"$ads_tags_R\" ";
		$result_keyinformation_print_R = mysqli_query($mysqli,$query_keyinformation_print_R);
		$print_value_R = mysqli_fetch_array($result_keyinformation_print_R);
		$title_name_tag_r = $print_value_R[name];
		

		$ads_tags_F = $print_value[ads_tags_F];
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_F = "SELECT * FROM `section` WHERE id = \"$ads_tags_F\" ";
		$result_keyinformation_print_F = mysqli_query($mysqli,$query_keyinformation_print_F);
		$print_value_F = mysqli_fetch_array($result_keyinformation_print_F);
		$title_tag_F = $print_value_F[name];

		$ads_tags_FF = $print_value[ads_tags_FF];
		$un_model = $print_value[un_model];
		
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_FF = "SELECT * FROM `section` WHERE id = \"$ads_tags_FF\" ";
		$result_keyinformation_print_FF = mysqli_query($mysqli,$query_keyinformation_print_FF);
		$print_value_FF = mysqli_fetch_array($result_keyinformation_print_FF);
		$title_tag_FF = $print_value_FF[name];	
		
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year = $print_value_year[text];

	?>


	    

	القسم »
    
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

        
    <?php if($un_model === "model"){ ?>
    
        <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF; ?>/allcities" 
    title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    
    <?php
	}
	?>
    
    <?php 
	}else{
	?>
    <?php
	if(!empty($title_name_tag_r)){
	?>
    	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
        
    <?php
	}
	?>
    
        <?php
	if(!empty($title_tag_F)){
	?>
    
        <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
        <?php
	}
	?>
    
    
        <?php
	if(!empty($title_tag_FF)){
	?>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
        <?php
	}
	?>
    
    

    
    <?php
	}
	?>
    
    
		<hr>
  
        <div class="contact">
        <?php if($time_add_ads+(60*60*24*60) > time()){ ?>
   <span class="label label-success">وسيلة الإتصال :</span>   <strong>    <?php echo $ads_contact; ?>  <i class="fa fa-phone"></i></strong> 
   <br>  <br> 
   	<?php }else{ ?>
    <div class="alert alert-info">
   هذا الإعلان قديم، لقد تم إزالة معلومات الإتصال بصاحب الإعلان،بإمكانك التواصل مع صاحب الإعلان عن طريق الرد على الإعلان أو عبر الرسائل الخاصة. 
   </div>
    <?php 
    }
	?>
   </div>
      	
  		 <?php 
		if(($id_user_m_ad === $id_member || $group_num === "1" || $group_num === "2") and isset($_SESSION['id_members'])){
		?>
  	  	<a href="<?php echo $fixed_htaccess; ?>edit2.php?ads_id=<?php echo $ads_id; ?>"><i class="fa fa-pencil"></i> تعديل</a>
  		<br>
    
   		<?php
		}
		?>
        
  		 <?php 
		if(($id_user_m_ad === $id_member || $group_num === "1" || $group_num === "2") and isset($_SESSION['id_members'])){
		?>
  <a href="<?php echo $fixed_htaccess; ?>update2.php?ads_id=<?php echo $ads_id; ?>"><i class="fa fa-refresh"></i> تحديث الإعلان</a>
  <br>
  	  		<?php
		}
		?>	
        
        

        
        <?php 
		if($id_user_m_ad === $id_member || $group_num === "1" || $group_num === "2"){
		?>
        <?php if($close_ads === "6" || $close_ads === "1"){ ?>
          <a href="<?php echo $fixed_htaccess; ?>close.php?ads_id=<?php echo $ads_id; ?>">#فتح الإعلان</a>
          <br>
		<?php 
		}else{
		?>

  <a href="<?php echo $fixed_htaccess; ?>close.php?ads_id=<?php echo $ads_id; ?>"><i class="fa fa-trash-o"></i> حذف الإعلان </a>
            	<br>

  	  		<?php
			}
		}
		?>	
  	  		
            
  	<a href="<?php echo $fixed_htaccess; ?>report_ads.php?link=<?php echo $fixed_htaccess; ?>ads/<?php echo $ads_id; ?>/<?php echo $ads_title; ?>"><i class="fa fa-flag"></i> إبلاغ</a>
  	
    
      		 <?php 
		if(isset($_SESSION['id_members'])){
		?>		
          	<br>

  <a href="<?php echo $fixed_htaccess; ?>addfav.php?ads_id=<?php echo $ads_id; ?>"><i class="fa fa-star"></i>  إضافة للمفضلة </a>
 		<?php
		}
		?> 
  

      
      		 <?php 
		if(isset($_SESSION['id_members'])){
		?>		
          <br>
  <a href="<?php echo $fixed_htaccess; ?>sendpm.php?username=<?php echo $username_member_2_m_ad; ?>&title=بخصوص إعلانك رقم <?php echo $ads_id; ?>"><i class="fa fa-envelope"></i> إرسال رسالة خاصة</a>
  
   		<?php
		}
		?> 
  		<div class="pull-left">
				   
    <?php 
	if($if_found_ad === 1 || $group_num === "1" || $group_num === "2"){
	?>
    <a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $new_id_link; ?>/<?php echo $new_title_link; ?>" class="nextad"> ←  </a>
    
<?php 
}
?>
    

  <br>
      </div> <br>


	
	</div>
   </div>
  
           <?php 
		if($id_user_m_ad !== $id_member){
		?>
         <br>
<div class="alert alert-warning">

 نرجو الحذر من التعامل غير المباشر. نرجو إستخدام <a href="<?php echo $fixed_htaccess; ?>checkacc.php">القائمة السوداء</a> قبل أي عملية تحويل 
</div>

  	  		<?php
		}
		?>	
<?php 
if($id_user_m_ad === $id_member || $group_num === "1" || $group_num === "2"){
?>
<br>
	<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">ملاحظات مهمه</h3>
  </div>
  <div class="panel-body">
   <ul>
	أخي المعلن، نرجو منك تذكر النقاط التالية:
	<li>عمولة الموقع هي في ذمتك وليست في ذمة المشتري حتى لو أتفقت مع المشتري أن يدفعها هو.</li>
	<li>لايحق لموقع <?php echo $namewebsite; ?> بمطالبة المشتري بالعمولة لعدم وجود أتفاق بيننا وبينه.</li>
	<li>نرجو منك حذف الإعلان بعد بيع السلعة حفاظا لوقت  زوار الموقع.</li>
    <?php if($closecomment === "0"){$closecomment_arabic_st = "لمنع";}else{$closecomment_arabic_st = "لتفعيل";} ?>
	<li><a href="<?php echo $fixed_htaccess; ?>closecomment.php?ads_id=<?php echo $ads_id; ?>"><?php echo $closecomment_arabic_st; ?> خاصية الردود أضغط هنا</a></li>

	</ul>
  </div>
</div>

<?php 
}
?>

	
		   
  <div class="row" style="position:relative;">
  <div style="position:absolute; bottom:5px;" >
  <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


 <div class="fb-like" data-href="<?php echo $fixed_htaccess; ?>/ads/<?php echo $ads_id; ?>/<?php echo $ads_title; ?>" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>  

</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php echo $fixed_htaccess; ?>ads/<?php echo $ads_id; ?>" data-text="<?php echo $ads_title; ?>" data-via="<?php echo $Twitter_account; ?>" data-lang="ar">تغريد</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>


    
    <!-- ضع هذه العلامة في الرأس أو قبل علامة إغلاق النص مباشرةً. -->
<script src="https://apis.google.com/js/platform.js" async defer>
  {lang: 'ar'}
</script>

<!-- ‫يمكنك وضع هذه العلامة في المكان الذي تريد ظهور زر المشاركة عليه.‬‎ -->
<div class="g-plus" data-action="share" data-annotation="bubble"></div>


	
	</div>
	
		
	
	
		
	
	

		
	
	
	
		<?php
				/// استعدعاء ملف الأتصال بقاعدة البيانات
				include("../include/config.php");
				$view_query_ads = "SELECT * FROM `comments` WHERE id_ads = \"$ads_id\"";
				$unicode_arabic = mysqli_query($mysqli,"SET NAMES 'utf8'");
				$view_execution_ads = mysqli_query($mysqli,$view_query_ads);
				$i = 1;
				while($inf_ads_co = mysqli_fetch_array($view_execution_ads)){
					
				$His_announcement_s_aa = $inf_ads_co[id_His_response]; 
					/// استعدعاء ملف الأتصال بقاعدة البيانات
include("../include/config.php");
mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_login_m_ad02 = "SELECT * FROM `members` where id = \"$His_announcement_s_aa\" ";
$result_query_m_ad02 = mysqli_query($mysqli,$query_login_m_ad02);
$Data_member_m_ad02 = mysqli_fetch_array($result_query_m_ad02);
$group_num_m_ad02 = $Data_member_m_ad02[groupnumber];
$username_member_2_m_ad02 =  $Data_member_m_ad02[username];
$id_user_m_ad02 =  $Data_member_m_ad02[id];
$i_final = $i++;					
					
					
					
				
		?>




		
        
        

				<div class="comment comment_div">
	<div class="row comment_high">
 		<div class="col-xs-12  col-sm-12 col-md-9 col-lg-9 comment_header">
 	›› 
 			رد رقم <a href="#<?php echo $inf_ads_co[id]; ?>" name="<?php echo $inf_ads_co[id]; ?>"><?php echo $i_final; ?></a>
            
            <?php if($group_num === "1" || $group_num === "2"){ ?>
            <span class="label label-success" style="font-size:12px;"> رقم الرد الأصلي :
            <?php echo $inf_ads_co[id]; ?></span>
            <?php } ?>
            
 				<br>›› 
 			&nbsp;  <a href="<?php echo $fixed_htaccess; ?>users/<?php echo $username_member_2_m_ad02; ?>" class="username"><?php echo $username_member_2_m_ad02; ?></a> 
            
<?php if($group_num_m_ad02 === "1"){ ?><span style="background:#<?php echo $color1_group; ?>;" class="label label-success">مدير الموقع</span><?php } ?>

<?php if($group_num_m_ad02 === "6"){ ?><span style="
background:#<?php echo $color3_group; ?>;" class="label label-success">عضو</span><?php } ?>

<?php if($His_announcement_s === $id_user_m_ad02){ ?><span style="
background:#<?php echo $color4_group; ?>;" class="label label-success">المعلن</span><?php } ?>

<?php if($group_num_m_ad02 === "2"){ ?><span class="label label-success">مشرف الموقع</span><?php } ?>

<?php if($group_num_m_ad02 === "5"){ ?><span style="background:#<?php echo $color2_group; ?>;" class="label label-success">عضو محظور</span><?php } ?>

            <br>›› 
 			 &nbsp;  <?php echo timeago($inf_ads_co[Time_added_co]); ?> 
             

	
 		</div>
		
		<div class="col-xs-12  col-sm-12 col-md-3 col-lg-3 ">
			
		
						<div style="clear:both;"></div>


                     	<script>
function Report1(str) {
  if (str=="") {
    document.getElementById(".myDivs").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById(".myDivs").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","<?php echo $fixed_htaccess; ?>Report.php?r=1&q="+str,true);
  xmlhttp.send();
}
</script>



<script>
function Report2(str) {
  if (str=="") {
    document.getElementById(".myDiv").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById(".myDiv").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","<?php echo $fixed_htaccess; ?>Report.php?r=2&q="+str,true);
  xmlhttp.send();
}
</script>



<script>
function Report3(str) {
  if (str=="") {
    document.getElementById(".myDivs").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById(".myDivs").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","<?php echo $fixed_htaccess; ?>Report.php?r=3&q="+str,true);
  xmlhttp.send();
}
</script>   




			<div class="myDivs">
						 <button class="btn btn-primary btn-xs" id="<?php echo $inf_ads_co[id]; ?>" type="button" rel="popover" data-content="إبلاغ عن العضو: <br /> <a href=<?php echo $fixed_htaccess; ?>users/<?php echo $username_member_2_m_ad02; ?> class=username><?php echo $username_member_2_m_ad02; ?></a>  
			<br /> <br />
	
				<button  value=<?php echo $inf_ads_co[id]; ?> rel=&quot;<?php echo $inf_ads_co[id]; ?>&quot; class=&quot;btn btn-primary btn-xs&quot; onclick=Report1(this.value)>بخس السلعة</button><br />
                
				<button value=<?php echo $inf_ads_co[id]; ?> rel=&quot;<?php echo $inf_ads_co[id]; ?>&quot;  class=&quot;btn btn-primary btn-xs&quot; onclick=Report2(this.value)>رد غير لائق</button><br />
                           <?php 
		if($id_user_m_ad === $id_member){
		?>
								<button value=<?php echo $inf_ads_co[id]; ?> rel=&quot;<?php echo $inf_ads_co[id]; ?>&quot;  class=&quot;btn btn-primary btn-xs&quot; onclick=Report3(this.value)>عدم الجدية في الشراء</button> <br/>
                                <?php } ?>
 " data-original-title="" title=""> <i class="fa fa-flag"> </i> إبلاغ </button>
		</div>
			
		
		</div>
			</div>
				
			<div style="clear:both;"></div>

	

<div class="comment_body">

				
				<?php echo $inf_ads_co[text]; ?>
			
			</div>
			
			<div class="adsheader">
				
				
<a href="<?php echo $fixed_htaccess; ?>sendpm.php?username=<?php echo $username_member_2_m_ad02; ?>&title=بخصوص ردك على الإعلان رقم <?php echo $ads_id; ?>"><i class="fa fa-envelope"></i> إرسال رسالة خاصة</a>

			
				
				
				
	  		  		 <hr>
                     
    					<?php 
						if($id_user_m_ad === $id_member || $group_num === "1" || $group_num === "2"){
						?>
                        
                          					<?php 
						if($id_user_m_ad02 !== $id_member || $group_num === "1" || $group_num === "2"){
						?>  
	  		 	  		 <a href="<?php echo $fixed_htaccess; ?>block.php?comment_id=<?php echo $inf_ads_co[id]; ?>&amp;ads_id=<?php echo $ads_id; ?>&block_username=<?php echo $username_member_2_m_ad02; ?>"><i class="fa fa-trash-o"></i>&nbsp; حذف الرد + منع العضو من الرد: <?php echo $username_member_2_m_ad02; ?> </a>
		
        
        	  		  <br>	  		 

	  					<?php
						}
						}
						?>

				
			</div>
				
			</div>
				
	 
		
	
	<?php
	}
	?>
		
	
	
	

		
	

	 
		
	
	
		
	
	
	

						
				 			
			 	
	 
		
	
	
	 
	<script>


		  
	  $("button[rel=popover]")
	  .popover({
	      offset: 10,
	      trigger: 'manual',
	      html: true,
	      placement: 'bottom',
	      template: '<div class="popover" onmouseover="clearTimeout(timeoutObj);$(this).mouseleave(function() {$(this).hide();});"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content reportUser"><p></p></div></div></div>'
	  }).mouseenter(function(e) {
	      $(this).popover('show');
	  }).mouseleave(function(e) {
	      var ref = $(this);
	      timeoutObj = setTimeout(function(){
	          ref.popover('hide');
	      }, 50);
	  });
		  
	</script>
	 
	
	
	
	 	  
	    	 
<script type="text/javascript">
 $(document).ready(function() {
	$('#message').keyup(function() {
			$(this).val( $(this).val().substring(0, 1200) );
    });  

		 $('.comment_alert').hide();
$('textarea').focus(function() {
    $('.comment_alert').show("slow");

	
   
});


});

</script>

<?php
		  include("../include/config.php");
		  	mysqli_query($mysqli,"SET NAMES 'utf8'");
			$query_number_pm_inbox = "SELECT * FROM `blocklistcomments` where id_Banning = \"$id_member\" 
			and id_Taboo = \"$His_announcement_s\" and Never = \"all\" order by id DESC";
			$result_query_number_pm_inbox = mysqli_query($mysqli,$query_number_pm_inbox);
			$num_pm_future_inbox = mysqli_num_rows($result_query_number_pm_inbox);
			if($num_pm_future_inbox > 0){
			?>
            <br>
            <div class="alert alert-info">
	لقد قام المعلن بحظرك من الرد على اعلاناته
	</div>	
            <?php
			}else{	
		  /// حظر العضو من الرد .
		  ?>

    
   	<?php 
	if($closecomment === "0"){
	?>
	 
    
 
           <?php 
		    if(isset($_SESSION['id_members'])){
		   ?>         

 
          
<div class="">
<br>
<br>
<br>

<form action="" method="post" id="postform" name="postform" onsubmit="return validate_form(this);">
  سؤال المعلن 	
		
 
 <div class="well">

<?php
$gmla = array('<span class="black">تذكر قول الله تعالى: ( ولا تَبْخَسُوا النَّاسَ أَشْيَاءهُمْ )</span>','<span class="black">تذكر قول الله تعالى: ( مَا يَلْفِظُ مِن قَوْلٍ إِلا لَدَيْهِ رَقِيبٌ عَتِيدٌ )</span>','نأمل الالتزام بمعاهدة استخدام الموقع التي وافقت وعاهدت على الالتزام بها','<span class="red">الغرض الأساسي من هذه الخاصية هو الإستفسار عن السلعة أو سوم السلعة، لذلك نأمل عدم إستخدامها في غير ماخصصت له مثل التذمر من السعر أو إنتقاص السلعة</span>','<input type="checkbox" name="sure" value="sure">
أتعهد وأقسم بالله ان أكون جاد في حالة السوم وان لا أقوم ببخس السلعة.');
$randomValue = array_rand($gmla);
?>









                    

 <div class=" alert alert-info">
   		 <?php 
		if($id_user_m_ad === $id_member){
		echo  "نأمل الالتزام بمعاهدة استخدام الموقع التي وافقت وعاهدت على الالتزام بها";
		?>
   		<?php
		}else{
		?>
 		<?php echo $gmla[$randomValue]; }?></div>
					

<textarea name="comment_body" rows="8" cols="76" placeholder="أكتب سؤالك للمعلن هنا" 
class="form-control comment_body" id="message"></textarea>

  <br>
<input class="btn  btn-primary" name="post" value="إرســـال" type="submit">
 </div>	
</form>




<?php
if($_POST['post']){
			
			$text = $_POST['comment_body'];
			$text = secure_input($text,"text_input");
			$text =  nl2br($text);
			$Time_added_co = time();
			
			$unicode_arabic = mysqli_query($mysqli,"SET NAMES 'utf8'");
			
			
			$query_add_comments = "	INSERT INTO `comments` 
			(`id`, `id_ads`, `id_His_response`, `text`,`Time_added_co`) 
			VALUES (NULL, \"$ads_id\", \"$id_member\", \"$text\",\"$Time_added_co\");";
			$execution_query_add_comments = mysqli_query($mysqli,$query_add_comments);
			
			
			
			
			
			
			mysqli_query($mysqli,"SET NAMES 'utf8'");
			$query_keyinformation_print_m = "SELECT * FROM `comments` WHERE id_ads = \"$ads_id\" and id_His_response = \"$id_member\"
			and text = \"$text\" and Time_added_co = \"$Time_added_co\" ";
			$result_keyinformation_print_m = mysqli_query($mysqli,$query_keyinformation_print_m);
			$print_value_m = mysqli_fetch_array($result_keyinformation_print_m);
			$id_ads_mem_mtb = $print_value_m[id];
			
			
			
			
			mysqli_query($mysqli,"SET NAMES 'utf8'");
			$query_ads = "SELECT * FROM `fav` WHERE id_ads = \"$ads_id\" ";
			$query_ads_ex = mysqli_query($mysqli,$query_ads);
			$query_ads_ex_num_co = mysqli_num_rows($query_ads_ex);
			while($query_fetch_array = mysqli_fetch_array($query_ads_ex)){
			$id_userss = $query_fetch_array[id_user];
			$time_now_note = time();
			$query_add_bank = "	INSERT INTO `note_hraj` 
			(`id`, `id_note`, `id_mem`, `type`, `un_read`,`time_note`) 
			VALUES (NULL, \"$id_ads_mem_mtb\", \"$id_userss\", \"2\", \"0\",\"$time_now_note\");";
			$execution_query_add_bank = mysqli_query($mysqli,$query_add_bank);
			}
	
	
			
			if($id_member !== $His_announcement_s){
			$time_now_note = time();
			$query_add_bank = "	INSERT INTO `note_hraj` 
			(`id`, `id_note`, `id_mem`, `type`, `un_read`,`time_note`) 
			VALUES (NULL, \"$id_ads_mem_mtb\", \"$His_announcement_s\", \"2\", \"0\",\"$time_now_note\");";
			$execution_query_add_bank = mysqli_query($mysqli,$query_add_bank);
			
			$time_now_update_now = time();
			$query_update_ads = "UPDATE `ads` set Last_updated_Ad = \"$time_now_update_now\"  where id = \"$ads_id\"";
			$execution_query_update_ads = mysqli_query($mysqli,$query_update_ads);
			}
			
			

			
			if(($id_member !== $His_announcement_s) and $subscribe_1_member_2_m_ad === "1"){
			$subject = "رد جديد لك في اعلان رقم  $ads_id"; 
			$message = "
					أخي $username_member_2_m_ad,

يوجد لك رد جديد على الأعلان رقم $ads_id
$fixed_htaccess"."ads/$ads_id
					";
						// الدالة mail 
					mail ( "$email_member_2_m_ad" , "$subject" , "$message");
					}

			
			
			if($execution_query_add_comments){
				?>
					<meta http-equiv="refresh" content="0;URL=<?php echo $fixed_htaccess; ?>ads/<?php echo $ads_id; ?>/<?php echo $ads_title; ?>">
                        
                        <?php
							}else{
						echo "
						<br>
						للأسف توجد مشكلة في الردود تواصل مع إدارة الموقع
						";
					}
					
						
	}
	echo "</div>";
	}
?>






            <?php 
		    if(!isset($_SESSION['id_members'])){
		   ?>    
           <br>
<div class="alert alert-info">
	يجب عليك تسجيل الدخول حتى تتمكن من إضافة رد.
	</div>	
    <?php
			}
	?>
    
    
    <?php
	}else{
		?>
        <br>
		<div class="alert alert-info">
		
	<?php 
	if($closecomment !== "0"){
	?>
	لقد قام المعلن بإلغاء خاصية الردود.
	<br>
	<?php
	}
	?>
	

	
	
			</div>
        <?php
		}
			}
	?>
	 			
		
		<?php 
		}else{
		?>



<div class="alert  alert-info">
		هذا الإعلان محذوف
		<br>
		<div class="pull-left">
				   

      </div> <br>
		</div>
        
        <hr>
        
        


	<?php
	
		$ads_tags_R = $print_value[ads_tags_R];
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_R = "SELECT * FROM `section` WHERE id = \"$ads_tags_R\" ";
		$result_keyinformation_print_R = mysqli_query($mysqli,$query_keyinformation_print_R);
		$print_value_R = mysqli_fetch_array($result_keyinformation_print_R);
		$title_name_tag_r = $print_value_R[name];
		

		$ads_tags_F = $print_value[ads_tags_F];
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_F = "SELECT * FROM `section` WHERE id = \"$ads_tags_F\" ";
		$result_keyinformation_print_F = mysqli_query($mysqli,$query_keyinformation_print_F);
		$print_value_F = mysqli_fetch_array($result_keyinformation_print_F);
		$title_tag_F = $print_value_F[name];

		$ads_tags_FF = $print_value[ads_tags_FF];
		$un_model = $print_value[un_model];
		
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_FF = "SELECT * FROM `section` WHERE id = \"$ads_tags_FF\" ";
		$result_keyinformation_print_FF = mysqli_query($mysqli,$query_keyinformation_print_FF);
		$print_value_FF = mysqli_fetch_array($result_keyinformation_print_FF);
		$title_tag_FF = $print_value_FF[name];	
		
		include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year = $ads_tags_FF;

	?>


	    

	القسم »
    
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

        
    <?php if($un_model === "model"){ ?>
    
        <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF; ?>/allcities" 
    title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    
    <?php
	}
	?>
    
    <?php 
	}else{
	?>
    <?php
	if(!empty($title_name_tag_r)){
	?>
    	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
        
    <?php
	}
	?>
    
        <?php
	if(!empty($title_tag_F)){
	?>
    
        <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
        <?php
	}
	?>
    
    
        <?php
	if(!empty($title_tag_FF)){
	?>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
        <?php
	}
	?>
        
        <?php
	}
	?>

<?php 
}
?>
</div>




		<!-- new update -->
		<div class="col-xs-12  col-sm-3 col-md-3 col-lg-3"><!-- 1 -->
      <div class="side-col"><!-- 2 -->

            <?php
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and His_announcement = \"$His_announcement_s\" 
		ORDER BY RAND() limit 5";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
		$ads_title = $print_value[ads_title];
			?>
            <div class="sidebar page-left-content">
			<br>
إعلانات أخرى لـ: <a href="<?php echo $fixed_htaccess; ?>users/<?php echo $username_member_2_m_ad; ?>" class="username"><?php echo $username_member_2_m_ad; ?></a>
<br><br>
<?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<ul class="list-unstyled">
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>
</ul>
			
		<?php
		}
		?>
		</div>
		<hr>
        <?php
	
		}
		?>
		
        
        
        
        
        
        
		  <?php /////////////////////////-1-//////////////////////// ?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + فرعي الفرعي + المدينة + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF\"
		and ads_city = \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ ?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

        
    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF; ?>/<?php echo $ads_city; ?>" 
    title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year; ?> في  <?php echo $ads_city_name; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?>  في  <?php echo $ads_city_name; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php $ads_tags_FF; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?>  في  <?php echo $ads_city_name; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_tags_FF; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?>  في  <?php echo $ads_city_name; ?></a>
    <?php
	}
	?>
    <?php 
	}else{
	?>
     <?php
	if(!empty($title_tag_FF)){
	?>
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php echo $ads_city; ?>" title="				<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?>  في  <?php echo $ads_city_name; ?></a> 
    <?php
	}else{
	?>
	<?php
	if(!empty($title_tag_F)){
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_city; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?>  في  <?php echo $ads_city_name; ?></a>
   <?php
	}else{
	?>
    <?php
	if(!empty($title_name_tag_r)){
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_city; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?>  في  <?php echo $ads_city_name; ?></a>
    <?php
	}
	}
	}
	?>

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + فرعي الفرعي + المدينة + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF\"
		and ads_city = \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
<div class="text-center">
		
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
		<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[1]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + فرعي الفرعي + المدينة + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF\"
		and ads_city = \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
				<?php /////////////////////////-1-//////////////////////// ?>
                
               
   
                    
          <?php /////////////////////////-2-//////////////////////// ?>
              <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل - 1 + المدينة + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$ads_tags_FF_mode_1 = $ads_tags_FF - 1;
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city = \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ 
				include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF_mode_1\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year_model_1 = $print_value_year[text];
		?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>/<?php echo $ads_city; ?>" 
    title="<?php echo $ads_tags_FF_mode_1; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year_model_1; ?> في  <?php echo $ads_city_name; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?>  في  <?php echo $ads_city_name; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?>  في  <?php echo $ads_city_name; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?>  في  <?php echo $ads_city_name; ?></a>
    <?php
	}
	?>

     

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل - 1  + المدينة + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city = \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		
		

		
		if($result_keyinformation_print_num_rows > 0){
								?>
<div class="text-center">
		
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
		<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[0]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل - 1 + المدينة + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city = \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
                <?php } ?>
				<?php /////////////////////////-2-//////////////////////// ?>

 
                               
          <?php /////////////////////////-3-//////////////////////// ?>
              <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + 1 + المدينة + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$ads_tags_FF_mode_1 = $ads_tags_FF + 1;
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city = \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ 
				include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF_mode_1\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year_model_1 = $print_value_year[text];
		?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>/<?php echo $ads_city; ?>" 
    title="<?php echo $ads_tags_FF_mode_1; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year_model_1; ?> في  <?php echo $ads_city_name; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?>  في  <?php echo $ads_city_name; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?>  في  <?php echo $ads_city_name; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?>  في  <?php echo $ads_city_name; ?></a>
    <?php
	}
	?>

     

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + 1  + المدينة + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city = \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		
		

		
		if($result_keyinformation_print_num_rows > 0){
								?>
<div class="text-center">
		
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
		<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[0]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + 1 + المدينة + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city = \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
                <?php } ?>
				<?php /////////////////////////-3-//////////////////////// ?>
                
                
                
                
      <?php /////////////////////////-4-//////////////////////// ?>
              <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل - 1  + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$ads_tags_FF_mode_1 = $ads_tags_FF - 1;
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ 
				include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF_mode_1\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year_model_1 = $print_value_year[text];
		?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>/<?php echo $ads_city; ?>" 
    title="<?php echo $ads_tags_FF_mode_1; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year_model_1; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    <?php
	}
	?>

     

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل - 1   + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		
		

		
		if($result_keyinformation_print_num_rows > 0){
								?>
<div class="text-center">
		
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
		<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[0]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل - 1  + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" 
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
                <?php } ?>
				<?php /////////////////////////-4-//////////////////////// ?>
                
                
                
                
                 <?php /////////////////////////-5-//////////////////////// ?>
              <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + 1  + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$ads_tags_FF_mode_1 = $ads_tags_FF + 1;
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ 
				include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF_mode_1\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year_model_1 = $print_value_year[text];
		?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>/<?php echo $ads_city; ?>" 
    title="<?php echo $ads_tags_FF_mode_1; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year_model_1; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    <?php
	}
	?>

     

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + 1   + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		
		

		
		if($result_keyinformation_print_num_rows > 0){
								?>
<div class="text-center">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
		
		<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[0]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + 1  + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
                <?php } ?>
				<?php /////////////////////////-5-//////////////////////// ?>
                
                
                
                 <?php /////////////////////////-6-//////////////////////// ?>
              <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل  + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$ads_tags_FF_mode_1 = $ads_tags_FF;
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ 
				include("../include/config.php");
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print_year = "SELECT * FROM `years` WHERE id = \"$ads_tags_FF_mode_1\" ";
		$result_keyinformation_print_year = mysqli_query($mysqli,$query_keyinformation_print_year);
		$print_value_year = mysqli_fetch_array($result_keyinformation_print_year);
		$tag_year_model_1 = $print_value_year[text];
		?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){

	
	?>

    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>/<?php echo $ads_city; ?>" 
    title="<?php echo $ads_tags_FF_mode_1; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year_model_1; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>/<?php echo $ads_tags_FF_mode_1; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?></a>
    <?php
	}
	?>

     

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل   + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		
		

		
		if($result_keyinformation_print_num_rows > 0){
								?>
<div class="text-center">
		
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
		<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[0]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + الموديل + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF_mode_1\"
		and ads_city != \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
                <?php } ?>
				<?php /////////////////////////-6-//////////////////////// ?>
        
        
        
        
        
        

        <?php /////////////////////////-7-//////////////////////// ?>
                    <?php 
	if($type_ads_other_final !== "السيارات"){
	
	?>
  		  <?php
		///  عرض على حسب التصنيف الرئيسية + الفرعي + فرعي الفرعي  + مصور و كتابة معا															
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF\"
		and ads_city != \"$ads_city\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows_1 = mysqli_num_rows($result_keyinformation_print);
		?>
		<?php if($result_keyinformation_print_num_rows_1 > 0){ ?>
				إعلانات عن
    <?php 
	if($type_ads_other_final === "السيارات"){
	
	?>

        
    <?php if($un_model === "model"){ ?>

   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" 
    title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_F; ?> <?php echo $tag_year; ?> في  <?php echo $ads_city_name; ?></a> 
   
    <?php
	}else{
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?>  في  <?php echo $ads_city_name; ?></a>
    
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>" title="<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?>  في  <?php echo $ads_city_name; ?></a> 
    
    
	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?>  في  <?php echo $ads_city_name; ?></a>
    <?php
	}
	?>
    <?php 
	}else{
	?>
     <?php
	if(!empty($title_tag_FF)){
	?>
   	<a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_FF; ?>/<?php echo $title_tag_FF; ?>" title="				<?php echo $title_tag_FF; ?>"><?php echo $title_tag_FF; ?> </a> 
    <?php
	}else{
	?>
	<?php
	if(!empty($title_tag_F)){
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_F; ?>/<?php echo $title_tag_F; ?>" title="<?php echo $title_tag_F; ?>"><?php echo $title_tag_F; ?> </a>
   <?php
	}else{
	?>
    <?php
	if(!empty($title_name_tag_r)){
	?>
    <a class="tag fromad" href="<?php echo $fixed_htaccess; ?>tags/<?php echo $ads_tags_R; ?>/<?php echo $title_name_tag_r; ?>" title="<?php echo $title_name; ?>"><?php echo $title_name_tag_r; ?> </a>
    <?php
	}
	}
	}
	?>

  	<?php
	}
	?>
		<br><br>
		<?php } ?>
		<?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + فرعي الفرعي  + مصور فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF\"
		and ads_city != \"$ads_city\" and image_link != \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 6";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
		<div class="text-center">

                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){
					 
				
			     $image_link = $print_value[image_link];
				 if(!empty($image_link)){
				 $IMAGES_LINK_ARRAY_P_2 = explode(",",$image_link);
				 }
				 ?>
                 
<a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"><img src="<?php
		 echo $IMAGES_LINK_ARRAY_P_2[0]; ?>" alt="<?php echo $print_value[ads_title]; ?>" 
         title="<?php echo $print_value[ads_title]; ?>" class="img-thumbnail"></a><br>
           		<?php
				}
				?>
			 	</div>
				<?php
				}
				?>

                <?php	
		///  عرض على حسب التصنيف الرئيسية + الفرعي + فرعي الفرعي  + كتابة فقط																
		mysqli_query($mysqli,"SET NAMES 'utf8'");
		$query_keyinformation_print = "SELECT * FROM `ads` WHERE id != \"$ads_id\" and close_ads = \"0\"
		and ads_tags_R  = \"$ads_tags_R \" and ads_tags_F = \"$ads_tags_F\" and ads_tags_FF = \"$ads_tags_FF\"
		and ads_city != \"$ads_city\" and image_link = \"\" and type_ads_other_final = \"$type_ads_other_final\" ORDER BY RAND() limit 8";
		$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
		$result_keyinformation_print_num_rows = mysqli_num_rows($result_keyinformation_print);
		if($result_keyinformation_print_num_rows > 0){
								?>
        		  <ul class="list-unstyled">
                 <?php while($print_value = mysqli_fetch_array($result_keyinformation_print)){ ?>
<li><a href="<?php echo $fixed_htaccess; ?>ads/<?php echo $print_value[id]; ?>/<?php echo $print_value[ads_title]; ?>"> »  <?php echo $print_value[ads_title]; ?></a></li>

           		<?php
				}
				?>
                </ul>
				<?php
				}
				?>
				<?php if($result_keyinformation_print_num_rows_1 > 0){ echo "<hr>"; } ?>
                <?php } ?>
				<?php /////////////////////////-7-//////////////////////// ?>

		













</div> <!-- 2 -->
</div><!-- 1 -->






</div>
<?php
ob_end_flush();
include("../footer.php"); // ادراج الفوتر
?>





 </body></html>
 
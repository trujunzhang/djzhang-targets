<?php
session_start();
ob_start();
include("include/config_header.php");	
/// استعدعاء ملف الأتصال بقاعدة البيانات
include("include/config.php");
mysqli_query($mysqli,"SET NAMES 'utf8'");
$query_keyinformation_print = "SELECT * FROM `keyinformation` WHERE id = \"1\" ";
$result_keyinformation_print = mysqli_query($mysqli,$query_keyinformation_print);
$print_value = mysqli_fetch_array($result_keyinformation_print);
$namewebsite = $print_value[namewebsite];
$keywords = $print_value[keywords];
$messagesphone = $print_value[messagesphone];
$description = nl2br($print_value[description]);
$Facebook_account = $print_value[Facebook_account];
$Twitter_account = $print_value[Twitter_account];
?>

<!DOCTYPE html>
<html lang="ar-sa" dir="rtl"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><?php echo $namewebsite; ?></title> 
<meta name="description" content="<?php echo $description; ?>">
<meta name="keywords" content="<?php echo $keywords; ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="templates/default/css/bootstrap.rtl.min.css" rel="stylesheet" media="screen"> 
<link href="templates/default/css/custom3.css?v=1.4" rel="stylesheet" media="screen">
<link href="templates/default/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="templates/default/css/custom-icon-fonts.css?v=1.1">
<script async src="templates/default/js/analytics.js"></script>
<script src="templates/default/js/respond.min.js"></script>
<script src="templates/default/js/html5shiv.js" type="text/javascript"></script>
<script src="templates/default/js/respond.proxy.js"></script>
<script src="templates/default/js/jquery-1.10.1.min.js"></script>
<script src="templates/default/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="templates/default/js/cars.js"></script>
<script src="templates/default/js/bootstrap.min.js"></script>
<script type="text/javascript" src="templates/default/js/v5.js"></script>
</head>
<body>
 
 
 
 
<?php
include("header.php"); // استدعاء ملف الهيدر
?>
      
      
<div class="row" id="wrapper">

   <?php
   include("menu_right_1_index.php"); //  استدعاء ملف القائمة الجانبية
   ?>
    
	<div class="col-xs-12  col-sm-9 col-md-9 col-lg-9 " id="secondDiv">

	<?php
   include("fast_search.php"); //  استدعاء ملف القائمة الجانبية
   ?>

	<?php
	include("gallery.php"); // معرض الصور المصغر
	?>




<div style="clear:both;"></div>
<a href="add.php" class="btn btn-success btn-lg "><i class="fa fa-plus "></i> أضف إعلانك معنا</a>
				<div class="btn-group btn-group pull-left" data-toggle="buttons">
		  <button class="btn btn-primary active" onclick="location.href='<?php echo $url_hraj; ?>index.php'"><i class="fa fa-globe"></i></button>
		  <button class="btn btn-primary "onclick="location.href='<?php echo $url_hraj; ?>____/السيارات'"> <i class="fa fa-camera-retro  "></i> </button>
		</div>
		
<div style="clear:both;"></div> 

<br>





        <?php
	include("include/functions/ftime.php");
	/// استعدعاء ملف الأتصال بقاعدة البيانات
	include("include/config.php");			
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_ads = "SELECT * FROM `ads` WHERE close_ads = \"0\" and type_ads_or = \"1\" ORDER BY Last_updated_Ad DESC";
	$query_ads_ex = mysqli_query($mysqli,$query_ads);
	$query_ads_ex_num_co = mysqli_num_rows($query_ads_ex);
	if($query_ads_ex_num_co > 0){
	 ?>
     
     <table class="table tableAds table-borderedAds ">
      
      <tbody><tr>
         
       <th> </th>
          <th style="text-align:right;">العروض</th>
             <th>المدينة</th>
      <th>المعلن</th>
   
          <th>قبل</th>
      </tr>
      
      
      
      
      
      
      
       <?php
	include("include/config.php");			
	mysqli_query($mysqli,"SET NAMES 'utf8'");
  	$query_ads = "SELECT * FROM `ads` WHERE close_ads = \"0\" and type_ads_or = \"1\" and fixed_home = \"1\" ORDER BY Last_updated_Ad DESC";
	$query_ads_ex = mysqli_query($mysqli,$query_ads);
 	while($row = mysqli_fetch_array($query_ads_ex))
  	{
   	$ads_city = $row[ads_city];
	$id_ads = $row[id];
	$His_announcement = $row[His_announcement];
	$image_link = $row[image_link];
	$Time_added = timeago($row[Time_added]);
	

	$view_query_ads = "SELECT * FROM `comments` WHERE id_ads = \"$id_ads\"";
	$unicode_arabic = mysqli_query($mysqli,"SET NAMES 'utf8'");
	$view_execution_ads = mysqli_query($mysqli,$view_query_ads);
	$num_ex_ads_query = mysqli_num_rows($view_execution_ads);
	
	
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_login_m_ad = "SELECT * FROM `members` where id = \"$His_announcement\" ";
	$result_query_m_ad = mysqli_query($mysqli,$query_login_m_ad);
	$Data_member_m_ad = mysqli_fetch_array($result_query_m_ad);
	$group_num_m_ad = $Data_member_m_ad[groupnumber];
	$username_member_2_m_ad =  $Data_member_m_ad[username];
	$id_user_m_ad =  $Data_member_m_ad[id];
	
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_keyinformation_print_city = "SELECT * FROM `cities` WHERE id = \"$ads_city\" ";
	$result_keyinformation_print_city = mysqli_query($mysqli,$query_keyinformation_print_city);
	$print_value_city = mysqli_fetch_array($result_keyinformation_print_city);
	$ads_city_name = $print_value_city[text];
	$ads_city_id = $print_value_city[id];
	
	
	?>

      

     
   
</tr><tr><td><i class="star fa fa-star fa-lg"></i></td><td>
<a href="<?php echo $url_hraj; ?>ads/<?php echo $row[id]; ?>/<?php echo $row[ads_title]; ?>"><?php echo $row[ads_title]; ?></a>

<a href="<?php echo $url_hraj; ?>ads/<?php echo $row[id]; ?>/<?php echo $row[ads_title]; ?>">

<?php if(empty($image_link)){}else{ ?>&nbsp;<i class="fa fa-camera-retro black"></i>  <?php } ?>

</a><?php if($num_ex_ads_query === 0){}else{ ?>&nbsp; <?php echo $num_ex_ads_query ?> ردود <?php } ?></td>

<td><a href="<?php echo $url_hraj; ?>city/<?php echo $row[ads_city]; ?>/<?php echo $ads_city_name; ?>" class="smallsize">
<?php echo $ads_city_name; ?></a></td>

<td> <a href="<?php echo $url_hraj; ?>users/<?php echo $username_member_2_m_ad; ?>" class="smallsize"><?php echo $username_member_2_m_ad; ?></a> </td>

<td><?php echo $Time_added; ?></td></tr>  
 <?php
  }
 ?>



      
      
      
     
     <?php
 /*
  Place code to connect to your DB here.
 */
 $fixed_query_php = "and type_ads_or = \"1\" and fixed_home = \"0\" and fixed_tub = \"0\" and fixed_sec = \"0\" and fixed_sec2 = \"0\" and fixed_sec3 = \"0\"";
 mysqli_query($mysqli,"SET NAMES 'utf8'");
 include("include/config.php"); // include your code to connect to DB.
 $tbl_name="ads";  //your table name
 // How many adjacent pages should be shown on each side?
 $adjacents = 2;
 /* 
    First get total number of rows in data table. 
    If you have a WHERE clause in your query, make sure you mirror it here.
 */
 
 $query = "SELECT COUNT(*) as num FROM $tbl_name WHERE close_ads = \"0\" $fixed_query_php ORDER BY Last_updated_Ad DESC";
 mysqli_query($mysqli,"SET NAMES 'utf8'");
 $total_pages = mysqli_fetch_array(mysqli_query($mysqli,$query));
 $total_pages = $total_pages[num];
 
 /* Setup vars for query. */
 $targetpage = "index.php";  //your file name  (the name of this file)
 $limit = 40;         //how many items to show per page
 $page = $_GET['page'];
 if($page) 
  $start = ($page - 1) * $limit;    //first item to display on this page
 else
  $start = 0;        //if no page var is given, set start to 0
 
 /* Get data. */
 $sql = "SELECT * FROM `$tbl_name` WHERE close_ads = \"0\" $fixed_query_php ORDER BY Last_updated_Ad DESC LIMIT $start, $limit";
 mysqli_query($mysqli,"SET NAMES 'utf8'");
 $result = mysqli_query($mysqli,$sql);
 
 /* Setup page vars for display. */
 if ($page == 0) $page = 1;     //if no page var is given, default to 1.
 $prev = $page - 1;       //previous page is page - 1
 $next = $page + 1;       //next page is page + 1
 $lastpage = ceil($total_pages/$limit);  //lastpage is = total pages / items per page, rounded up.
 $lpm1 = $lastpage - 1;      //last page minus 1
 
 /* 
  Now we apply our rules and draw the pagination object. 
  We're actually saving the code to a variable in case we want to draw it more than once.
 */
 $pagination = "";
 if($lastpage > 1)
 { 
  $pagination .= "<ul class=\"pagination pagination-lg\">
";
  //previous button
  if ($page > 1) 
   $pagination.= "";
  else
   $pagination.= ""; 
  
  //pages 
  if ($lastpage < 7 + ($adjacents * 2)) //not enough pages to bother breaking it up
  { 
   for ($counter = 1; $counter <= $lastpage; $counter++)
   {
    if ($counter == $page) 
     $pagination.= "<li class=\"active\"><a href=\"\">$counter</a></li>"; // a not link
    else
     $pagination.= "<li><a href=\"$targetpage?page=$counter\">$counter</a></li>";     
   }
  }
  elseif($lastpage > 5 + ($adjacents * 2)) //enough pages to hide some
  {
   //close to beginning; only hide later pages
   if($page < 1 + ($adjacents * 2))  
   {
    for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
    {
     if ($counter == $page)
      $pagination.= "<li class=\"active\"><a href=\"\">$counter</a></li>"; // a not link
     else
      $pagination.= "<li><a href=\"$targetpage?page=$counter\">$counter</a></li>";     
    }
    $pagination.= "...";
    $pagination.= "<li><a href=\"$targetpage?page=$lpm1\">$lpm1</a></li>";
    $pagination.= "<li><a href=\"$targetpage?page=$lastpage\">$lastpage</a></li>";  
   }
   //in middle; hide some front and some back
   elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
   {
    $pagination.= "<li><a href=\"$targetpage?page=1\">1</a></li>";
    $pagination.= "<li><a href=\"$targetpage?page=2\">2</a></li>";
    $pagination.= "...";
    for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
    {
     if ($counter == $page)
      $pagination.= "<li class=\"active\"><a href=\"\">$counter</a></li>"; //a not link
     else
      $pagination.= "<li><a href=\"$targetpage?page=$counter\">$counter</a></li>";     
    }
    $pagination.= "...";
    $pagination.= "<li><a href=\"$targetpage?page=$lpm1\">$lpm1</a></li>";
    $pagination.= "<li><a href=\"$targetpage?page=$lastpage\">$lastpage</a></li>";  
   }
   //close to end; only hide early pages
   else
   {
    $pagination.= "<li><a href=\"$targetpage?page=1\">1</a></li>";
    $pagination.= "<li><a href=\"$targetpage?page=2\">2</a></li>";
    $pagination.= "...";
    for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++)
    {
     if ($counter == $page)
	      
      $pagination.= "<li class=\"active\"><a href=\"$counter\">$counter</a></li>"; // a
     else
      $pagination.= "<li><a href=\"$targetpage?page=$counter\">$counter</a></li>";     
    }
   }
  }
  
  //next button
  if ($page < $counter - 1) 
   $pagination.= "";
  else
   $pagination.= "";
  $pagination.= "</ul>\n";  
 }
?>
 <?php
  while($row = mysqli_fetch_array($result))
  {
   	$ads_city = $row[ads_city];
	$id_ads = $row[id];
	$His_announcement = $row[His_announcement];
	$image_link = $row[image_link];
	$Time_added = timeago($row[Time_added]);
	

	$view_query_ads = "SELECT * FROM `comments` WHERE id_ads = \"$id_ads\"";
	$unicode_arabic = mysqli_query($mysqli,"SET NAMES 'utf8'");
	$view_execution_ads = mysqli_query($mysqli,$view_query_ads);
	$num_ex_ads_query = mysqli_num_rows($view_execution_ads);
	
	
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_login_m_ad = "SELECT * FROM `members` where id = \"$His_announcement\" ";
	$result_query_m_ad = mysqli_query($mysqli,$query_login_m_ad);
	$Data_member_m_ad = mysqli_fetch_array($result_query_m_ad);
	$group_num_m_ad = $Data_member_m_ad[groupnumber];
	$username_member_2_m_ad =  $Data_member_m_ad[username];
	$id_user_m_ad =  $Data_member_m_ad[id];
	
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_keyinformation_print_city = "SELECT * FROM `cities` WHERE id = \"$ads_city\" ";
	$result_keyinformation_print_city = mysqli_query($mysqli,$query_keyinformation_print_city);
	$print_value_city = mysqli_fetch_array($result_keyinformation_print_city);
	$ads_city_name = $print_value_city[text];
	$ads_city_id = $print_value_city[id];
	
	
	?>


     
   
</tr><tr><td><?php echo $row[id]; ?></td><td>
<a href="<?php echo $url_hraj; ?>ads/<?php echo $row[id]; ?>/<?php echo $row[ads_title]; ?>"><?php echo $row[ads_title]; ?></a>

<a href="<?php echo $url_hraj; ?>ads/<?php echo $row[id]; ?>/<?php echo $row[ads_title]; ?>">

<?php if(empty($image_link)){}else{ ?>&nbsp;<i class="fa fa-camera-retro black"></i>  <?php } ?>

</a><?php if($num_ex_ads_query === 0){}else{ ?>&nbsp; <?php echo $num_ex_ads_query ?> ردود <?php } ?></td>

<td><a href="<?php echo $url_hraj; ?>city/<?php echo $row[ads_city]; ?>/<?php echo $ads_city_name; ?>" class="smallsize">
<?php echo $ads_city_name; ?></a></td>

<td> <a href="<?php echo $url_hraj; ?>users/<?php echo $username_member_2_m_ad; ?>" class="smallsize"><?php echo $username_member_2_m_ad; ?></a> </td>

<td><?php echo $Time_added; ?></td></tr>  
 <?php
  }
 ?>





    
     </tbody></table>



    <?=$pagination; ?>
    
    
    <?php
	}else{
		?>
		<div class="alert alert-info">
لا يتوفر اعلانات في الوقت الحالي ليتم عرضها
</div>
		<?php
		}
	
	?>      

 	</div>

   <br>
  <hr>
  <br>
   
      
      <div class="hidden-xs">
  
      
    
      <h3>الطلبات </h3>
      
      
      <?php
	 		include("include/config.php");			
	mysqli_query($mysqli,"SET NAMES 'utf8'");
  	$query_ads = "SELECT * FROM `ads` WHERE close_ads = \"0\" and type_ads_or = \"2\" ORDER BY Last_updated_Ad DESC LIMIT 5";
	$query_ads_ex = mysqli_query($mysqli,$query_ads);
	$query_ads_ex_num = mysqli_num_rows($query_ads_ex);
	if($query_ads_ex_num > 0){
	  ?>
      
   <table class="table tableAds table-borderedAds ">
      
      <tbody><tr>
         
       <th> </th>
          <th>الطلبات</th>
           <th>المدينة</th>
      <th>المعلن</th>
     
          <th>قبل</th>
      </tr>
           
  
   <?php
 	while($row = mysqli_fetch_array($query_ads_ex))
  	{
   	$ads_city = $row[ads_city];
	$id_ads = $row[id];
	$His_announcement = $row[His_announcement];
	$image_link = $row[image_link];
	$Time_added = timeago($row[Time_added]);
	

	$view_query_ads = "SELECT * FROM `comments` WHERE id_ads = \"$id_ads\"";
	$unicode_arabic = mysqli_query($mysqli,"SET NAMES 'utf8'");
	$view_execution_ads = mysqli_query($mysqli,$view_query_ads);
	$num_ex_ads_query = mysqli_num_rows($view_execution_ads);
	
	
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_login_m_ad = "SELECT * FROM `members` where id = \"$His_announcement\" ";
	$result_query_m_ad = mysqli_query($mysqli,$query_login_m_ad);
	$Data_member_m_ad = mysqli_fetch_array($result_query_m_ad);
	$group_num_m_ad = $Data_member_m_ad[groupnumber];
	$username_member_2_m_ad =  $Data_member_m_ad[username];
	$id_user_m_ad =  $Data_member_m_ad[id];
	
	mysqli_query($mysqli,"SET NAMES 'utf8'");
	$query_keyinformation_print_city = "SELECT * FROM `cities` WHERE id = \"$ads_city\" ";
	$result_keyinformation_print_city = mysqli_query($mysqli,$query_keyinformation_print_city);
	$print_value_city = mysqli_fetch_array($result_keyinformation_print_city);
	$ads_city_name = $print_value_city[text];
	$ads_city_id = $print_value_city[id];
	
	
	?>

      

     
   
</tr><tr><td><?php echo $row[id]; ?></td><td>
<a href="<?php echo $url_hraj; ?>ads/<?php echo $row[id]; ?>/<?php echo $row[ads_title]; ?>"><?php echo $row[ads_title]; ?></a>

<a href="<?php echo $url_hraj; ?>ads/<?php echo $row[id]; ?>/<?php echo $row[ads_title]; ?>">

<?php if(empty($image_link)){}else{ ?>&nbsp;<i class="fa fa-camera-retro black"></i>  <?php } ?>

</a><?php if($num_ex_ads_query === 0){}else{ ?>&nbsp; <?php echo $num_ex_ads_query ?> ردود <?php } ?></td>

<td><a href="<?php echo $url_hraj; ?>city/<?php echo $row[ads_city]; ?>/<?php echo $ads_city_name; ?>" class="smallsize">
<?php echo $ads_city_name; ?></a></td>

<td> <a href="<?php echo $url_hraj; ?>users/<?php echo $username_member_2_m_ad; ?>" class="smallsize"><?php echo $username_member_2_m_ad; ?></a> </td>

<td><?php echo $Time_added; ?></td></tr>  
 <?php
  }
 ?>
 
 
            </tbody></table>
            
            
  
       <a href="order.php" class="tag">المزيد من الطلبات</a>
    <?php
	}else{
		?>
		<div class="alert alert-info">
		لا يتوفر طلبات في الوقت الحالي
		</div>
		<?php
		}
	
	?>   
       
    </div>
      

 

    </div>
   
  </div>


<?php
include("footer.php"); // ادراج الفوتر
?>
 




 </body></html>
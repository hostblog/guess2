function load_page(ajaxurl,page_sl){
 $('#page_brek a').attr('class','num_page');
 $(page_sl).attr('class','num_page_select');
 //alert(page_sl);
 $('#result').html('<center><img src="/images/ajax-loader.gif" width="16" height="11" /></center>');
 $('#result').load(ajaxurl);
}
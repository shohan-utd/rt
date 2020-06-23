
$(".filter_section li").on('click',function(){

	

	var selector = $(this) .attr("data-filter");
		$(".iso_active").isotope({
			filter : selector,
		});
});


$(".iso_active").isotope();


$(".filter_menu ul li").click(function(){
  $(".filter_menu ul li").removeClass("active");
  $(this).addClass("active");

  
});


$(".main_menu ul li").click(function(){
  $(".main_menu ul li").removeClass("shohan_active");
  $(this).addClass("shohan_active");

  
});

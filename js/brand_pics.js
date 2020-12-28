$(document).ready(function(){
	

$('#company_name li').click(function(){
	
$('#company_name li').css('border-style','none');	// border none
$('#company_name strong').css('display','none');	//all arrow pic vanish	
$(this).find('strong').css('display','block');		//arrow pic displayed on clicked li
var comp_name = $(this).attr('data-info');			//getting stored value from data attribute of clicked li

$(this).css('border-bottom','2px solid black');		//border applied on clicked li
$('.max_h_t , .sea_h_t , .g_h_t , .wd_h_t').css('display','none');		// all testimonial vanish
$('.'+comp_name+'_h_t').css('display','block');					  		// testimonial displayed of specific brand
$('.max , .sea , .g , .wd').css('display','none');				   		// all brand pic vanish
$('.'+comp_name).css('display','block');								// specific brand displayed


	
	});
	
	
	});

	
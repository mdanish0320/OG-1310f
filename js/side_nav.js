$('pre').mousedown(function(){
	
state = $(this).siblings('ul').css('height');	
	

if(state == '0px'){
	$('#side_nav li').css('font-weight','normal');
	$('#side_nav strong').css("background-image","url('images/arrow1.png')").css('display','none');
	
	$('#side_nav >ul >li').css('background','white');
	$('#side_nav >ul >li ul').css('height','0px');
	$(this).siblings('strong').css("background-image","url('images/dwn-arrow1.png')").css('display','block');
	$(this).parent('li').css('background','#09F')
	.css('font-weight','bold')
	$(this).parent('li').find('li').css('font-weight','normal');
	$(this).siblings('ul').css('height','90px');
	
	}else{
	//$('#side_nav >ul >li ul').css('height','0px');	
	$(this).siblings('strong').css("background-image","url('images/arrow1.png')").css('display','none');	
	$(this).parent('li').css('background','white').css('font-weight','normal');	
	$(this).siblings('ul').css('height','0px');	
	
	$('#side_nav strong').mouseleave(function(){
			
		$(this).css('display','none');	
				
		})
		
		}
	


	
	});


$('#side_nav >ul >li').hover(function(){
	
$(this).children('strong').css('display','block');	
	
	},function(){




asd=$(this).children('ul').css('height');

$(this).children('strong').css('display','none');		
		
if(asd != '0px'){

$(this).children('strong').css('display','block');	
	}
		
	});
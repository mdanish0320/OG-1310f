// JavaScript Document

$(document).ready(function(){
c=0;







function pos_Center_width(obj_width){  //position centre width
//var screen_width= $(window).width();
Pos_cen_width= Math.floor((screen_width / 2) - (obj_width / 2));
return Pos_cen_width;

}

function pos_Center_height(obj_height){ //position centre height
var screen_height= screen.height;
Pos_cen_height=Math.floor((screen_height / 2) - (obj_height / 2));
return Pos_cen_height;
}

$('.danish').click(function(){



$("<div id='black_window1'></div>").appendTo('body');
$("<div id='new_pic_div'></div>").appendTo('#black_window1');
$("<img id='left_arrow'  src='images/left.png' >").appendTo('#black_window1').css('border','1px solid black').css('position','fixed').css('top',(screen_height/2) -110 ).css('left','0px');;
$("<div id='black_window2'></div>").appendTo('body');
$("<img id='right_arrow' src='images/right.png' >").appendTo('#black_window2').css('border','1px solid black').css('position','fixed').css('top',(screen_height/2) -110 ).css('right','0px');
$("<div id='right_div'></div>").appendTo('#black_window2');
$("<div id='des_div'></div>").appendTo('#right_div');
$("<h2></h2><br>").appendTo('#des_div');
//$("<p></p>").appendTo('#des_div');
$("<table></table>").appendTo('#des_div');
$("<br><br><div id='download_div'></div><br>").appendTo('#right_div');
$("<a id='download' href='#'>Download </a>").appendTo('#download_div');
$("<div id='cancel_pic' style='background:dimgray;width:100px; position:absolute;bottom:-40px;border:1px solid black;left:35%;' >Esc to cancel</div>").appendTo('#right_div');
$('#cancel_pic').click(function(){


$('#new_pic_div').fadeOut(900)
		$('#new_pic_div img').fadeOut(900)
		$('#black_window1').fadeOut(900)
		$('#black_window2').fadeOut(900)
		$('#loading').remove();
		setTimeout(function(){
		
			
			
			$('#black_window1').remove();
			$('#black_window2').remove();
			
			
		},1000);



});





$('#download').click(function(){
	
folder1 = $('#slider_pic'+c).data('folder1');
folder2 = $('#slider_pic'+c).data('folder2');

$('#download').attr('href','word_file/slider/'+ folder1+'_'+folder2+ c +'.docx')	
	});


$('#right_arrow , #left_arrow').click(function(){
	

checking = $(this).attr('id');

if (checking == 'right_arrow'){
	
	nxtpic()
	
	}else{
		
		prevpic()
		
		}
	
	
	});

a = $('#black_window1').width();
s = $('#black_window1').height();



frst_pic=$(this).data('index');
c=frst_pic;

changepic();	



function changepic(){	
Cen_Pos_Width=pos_Center_width(pic_width[c-1]);
Cen_Pos_Height=pos_Center_height(pic_height[c-1]);

$('#loading').remove();

//alert(Cen_Pos_Width +" "+Cen_Pos_Height );

$("<img id='pic" +c+ "'src='"+ pic_list[c-1] +"' />").appendTo('#new_pic_div');

new_heading=$('.danish')[c-1].getAttribute('data-heading');
new_para=$('#slider_pic'+c).attr('data-para');

$('#des_div table').html(new_para);
$('#des_div h2').html(new_heading).css('text-align','center');

$('#new_pic_div').css('top',(Cen_Pos_Height-60)).css('left',Cen_Pos_Width).css('width',(pic_width[c-1]+2)+'px').css('height',(pic_height[c-1]+2)+'px');

$("<img id='loading' src='images\\loading1.gif'>").appendTo('#black_window1').css('top',((s/2)-30)+'px').css('left',((a/2)-20)+'px').css('z-index','1').css('border-color','white').css('position','absolute').css('-webkit-transition','none');


$('#pic'+c).css('opacity','0').css('width',pic_width[c-1]).css('height',pic_height[c-1]).css('z-index','2').css('position','relative').css('left','-1px');

setTimeout(function(){
	
$('#pic'+c).fadeTo(600,1);	

},600);

}


function nxtpic(){
$('#new_pic_div').empty();
c++;

if(c>pic_len){

c=1;	

	}
	
changepic();	
}



function prevpic(){
	
$('#new_pic_div').empty();
c--;

if(c<1){

c=pic_len;	

	}
	
changepic();	

}






document.onkeyup=removediv;

function removediv(){ 
		if(event.keyCode==27){
			
											//removing div	
		$('#new_pic_div').fadeOut(900)
		$('#new_pic_div img').fadeOut(900)
		$('#black_window1').fadeOut(900)
		$('#black_window2').fadeOut(900)
		$('#loading').remove();
		setTimeout(function(){
		
			
			
			$('#black_window1').remove();
			$('#black_window2').remove();
			
			
		},1000);
		
								
								}
	
				else if(event.keyCode==37){				//pic change left
				prevpic();
				}		
				
				else if(event.keyCode==39){				//pic change right
				nxtpic();
				}	
	
}





});






});


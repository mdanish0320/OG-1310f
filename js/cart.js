$(document).ready(function(){
	
		loop = new Array();				// working click count
		class_array = new Array();		// class of clicked anchor element
		anchor_len = $('#product-gallery a').length		//anchor length
		img_id_list= new Array();						//img id
		img_src_list= new Array();						//img src

			for(var i=0; i<anchor_len; i++){			
	
	
				$('#product-gallery a').eq(i).attr('data-imgid','imgg'+i)	//creating data attribute in anchor element 
				$('#product-gallery img').eq(i).attr('id','imgg'+i);		//giving id (stored in anchor's data attr) to all img 
	
			}	
	
$(document.body).on('click',('#header-inner #cart ul ul li strong'),function(){ 
	
		x_class = $(this).data('class');		// getting value of data attr(of anchor) stored in strong element
		x_imgid = $(this).data('imgid');		// getting value of data attr stored in strong element
		$('.'+x_class).removeAttr('data-cart');	// removing data attribute of anchor element of specified class
		$('.'+x_class).find('div').css('background','#09f');	// change background of parent of specified class 
		$('#'+x_imgid).parent().removeClass('filter_brightness');	//removing class
		$(this).parent().remove();									//removing element
		count--;													// decreasing counting by 1

		for(var mm = 0; mm<loop.length ; mm++){
			
			$('#header-inner #cart span').eq(mm).html(counting[mm]);	//restart counting
			
		}
		
		loop.splice(0,1);												//removing 1 value from array
		if(loop.length == 0){
			
			$('#header-inner #cart ul ul ').append('<li>empty</li>')	
		}

});		
	

count = 0;
		$('.gallery a').click(function(){
count++;
			
				
						
			
			
				
				if($(this).attr('data-cart')){  // if data-cart attribute exist
					
					count--;
					
					}else{						// if not
						
						
						
							cart_pos = $('#header-inner #cart').offset(); // getting position of cart
				
				cart_top = cart_pos.top;								  // getting top value of cart
				cart_left= cart_pos.left;								  // getting left value of cart
				
					event=event||window.event,								// position of clicked area in document
						x=event.pageX||event.clientX+document.body.scrollLeft,
						y=event.pageY||event.clientY+document.body.scrollTop;
				
				
					
				img_src=$(this).parent('center').siblings('img').attr('src'); // getting img src related to clicked anchor
				
				
					
				$("<img style='width:100px; height:100px' class='new_pic' src='"+ img_src +"' />").css('opacity','0.6').css('left',x).css('top',(y-250)).appendTo('#main').animate({left: cart_left, top: cart_top},800,function(){
					
					$('.new_pic').remove();   // animate the pic then remove
					
					
					});
						
						
						$(this).attr('data-cart', count); 	//giving value to anchor's data cart attribute
								
						$(this).attr('class','cart'+count);	//giving specific class to anchor element
						
						img_id = $(this).data('imgid');		//getting value of data attribute(which is the id of img) stored in anchor element	
						
						
						img_src = $('#'+img_id).attr('src'); //getting img src 
						
						
						
						img_id_list[count-1] = img_id;						
						img_src_list[count-1]=img_src;
						
						class_array[count-1] = $(this).attr('class');
						
						
						
						$('#'+img_id).parent().addClass('filter_brightness');
						$(this).find('div').css('background','gray');
						
						
								
								$('#header-inner #cart ul ul  li').remove();
								counting =['1st)','2nd)','3rd)','4th)','5th)','6th)']
								
								
								
								
								loop[count-1]=count;
								
								

								
								
								for( var i=0; i<loop.length; i++){		// cart li
									
							
									$('#header-inner #cart ul ul ').append("<li><a target='_black' href='" + img_src_list[i] + "'><span>" + counting[i]  + "</span> item added</a> <strong style='position:absolute;right:20px;' data-imgid='" +img_id_list[i]+ "' data-class='"+ class_array[i] +"'  >x</strong></li>");
									
								}
						
						
						
						}	
				
				
		
					
					
	
		});






});

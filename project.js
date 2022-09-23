$(function(){

$('.accordionDrop').hide();
              $('.accordion').on('click', function(){
			$(this).next().slideToggle("fast");
		})

})

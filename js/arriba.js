jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#IrArriba").hide();


jQuery(function () {
jQuery(window).scroll(function () {
if ($(this).scrollTop() > 10) {

jQuery('#IrArriba').fadeIn('slow');

} 

else {
  

	
	
jQuery('#IrArriba').fadeOut('slow');


}
});

jQuery('#IrArriba a').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
jQuery('#com').click(function () {
jQuery('body,html').animate({
scrollTop: 350
}, 800);
return false;
});



});

});
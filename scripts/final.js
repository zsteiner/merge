$('.button-save').click(function(){
   $('.button-save').addClass('is-hidden').next('.merged-record').removeClass('is-hidden');
});

$('.button-split').click(function(){
   $(this).parent().addClass('is-hidden').prev('.button-save').removeClass('is-hidden'); 
});
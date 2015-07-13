//Creates new selector :icontains that is case insensitive for use with the list.js filter highlighting below
//This extends jQuery without changing function of :contains selector
//Adapted from https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/

$.expr[":"].icontains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

//Filter Highlighting
$('.search').keyup(function(){
    var filterResult = $(this).val();
    $('.filter-highlight').removeClass('filter-highlight');    
    
    if(! filterResult) {
        $('.filter-highlight').removeClass('filter-highlight');    
    }
    
    else {
        $('.record-item span:icontains(' + filterResult + ')').addClass('filter-highlight');     
    }
});

//Merge Button Interactions
$('.button-merge').click(function(){
   $(this).addClass('is-hidden').next('.merged-record').removeClass('is-hidden'); 
});

$('.button-split').click(function(){
   $(this).parent().addClass('is-hidden').prev('.button-merge').removeClass('is-hidden'); 
});

$('.button-merge-all').click(function(){
   $('.button-merge').addClass('is-hidden').next('.merged-record').removeClass('is-hidden');

   $('.notification').removeClass('is-hidden');
});

$('.button-save').click(function(){
   $('.notification').removeClass('is-hidden');
});

$('.button-split-all').click(function(){
   $('.button-merge').removeClass('is-hidden').next('.merged-record').addClass('is-hidden');
   
   $('.notification').addClass('is-hidden');
});
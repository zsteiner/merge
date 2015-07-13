$('header nav a').each(function(){
   var pagePathName= window.location.pathname;
   
   pagePathName = pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
   
   console.log(pagePathName);
   
   var hrefName = $(this).attr('href');
   
   if (pagePathName === hrefName) {
       $(this).addClass('is-current');
   }

   else {
       $(this).removeClass('is-current');
   }
    
});
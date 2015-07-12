var selectedConflict = $('.card:first-of-type').find('.is-current').index() + 1,
    totalConflicts = $('.card:first-of-type li').size(),
    selectedPercent = 0 + '%',
    interval = 300;

function setProgressBar(selectedPercent) {
    selectedPercent = ((selectedConflict * 0.95) / totalConflicts) * 100 + '%';
    $('.progress-bar').css('width', selectedPercent);
    
    $('.selected-conflict').text(selectedConflict);
    $('.total-conflicts').text(totalConflicts);
}

function setNavigation() {
    if (selectedConflict === 1) {
        $('.app-nav-first').removeClass('is-hidden').siblings().addClass('is-hidden');
    }
    
    else if (selectedConflict === totalConflicts) {
        $('.app-nav-penultimate').removeClass('is-hidden').siblings().addClass('is-hidden');    
    }

    else if (selectedConflict === totalConflicts + 1) {
        $('.app-nav-last').removeClass('is-hidden').siblings().addClass('is-hidden');    
    }
    
    else {
        $('.app-nav-prev, .app-nav-next').removeClass('is-hidden').siblings().addClass('is-hidden');
    }    
}

function setOption() {
    $('.card').removeClass('is-selected');
    $('.card-option:nth-of-type(' + selectedConflict + ')').addClass('is-current').siblings('.card-option').removeClass('is-current');   
    $('.card-option.is-current.is-selected').parents('.card').addClass('is-selected').siblings('.card').removeClass('is-selected');        
}

function nextConflict() {
    selectedConflict = selectedConflict + 1;
    
    if(selectedConflict > totalConflicts) {
        $('.card-container').addClass('is-hidden');
        $('.success-message').removeClass('is-hidden');
        $('.complete-message').removeClass('is-hidden');
        $('.progress-label').addClass('is-hidden');
    }

    //Card
    setOption();     
    
    //Navigation
    setNavigation();
    
    //Progress Bar
    setProgressBar();
}

function prevConflict() {
    $('.card-container').removeClass('is-hidden');
    $('.success-message').addClass('is-hidden');
    $('.complete-message').addClass('is-hidden');
    $('.progress-label').removeClass('is-hidden');

    selectedConflict = selectedConflict - 1;    

    //Card
    setOption();             

    //Navigation
    setNavigation();
    
    //Progress Bar
    setProgressBar();
}

//Set Initial Value of Progress Bar
setProgressBar(selectedPercent);

$('.card').click(function(){
   $(this).addClass('is-selected').find('.card-option.is-current').addClass('is-selected');
   $(this).siblings('.card').removeClass('is-selected').find('.card-option.is-current').removeClass('is-selected');

    setTimeout(function () {
        nextConflict();
    }, interval);
   
});

$('.app-next').click(function(){
   nextConflict(); 
});

$('.app-prev').click(function(){
   prevConflict();
});

$(document).keyup(function(e) {
  if(e.which === 65) {
    console.log('Pressed A');
    $('.card:first-of-type').click();
  }
  
  else if (e.which === 66) {
    console.log('Pressed B');  
    $('.card:last-of-type').click();
  }
});
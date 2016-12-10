/*Menu Animation*/

function openMenu(){
    $(".menu-primary").addClass("show-menu");
    $(".fadded-background").addClass("show-menu");
    $(".fadded-background").addClass("show") .addClass("opacity-background");
}

function closeMenu(){
    $(".menu-primary").removeClass("show-menu");
    $(".fadded-background").removeClass("show-menu");
    setTimeout(function(){
        $(".fadded-background") .removeClass("show")
    }, 300);
    }

function buttonHover(){
    $(this).addClass("button-bigger");
}

function buttonHoverLeave(){
    $(this).removeClass("button-bigger");
}



$(document).ready(function() {
        $(".toggle-menu").click(openMenu);
        $(".close").click(closeMenu);
        $(".fadded-background").click(closeMenu);
        $(".prices-table-button, .go-to-images-event, .go-to-images-grad, .go-to-images-bridal, .go-to-images-editorial").mouseover(buttonHover);
        $(".prices-table-button, .go-to-images-event, .go-to-images-grad, .go-to-images-bridal, .go-to-images-editorial").mouseleave(buttonHoverLeave);
        

});




//Click with buffer 



function fancyScroll(evt) {
    evt.preventDefault();
    var desiredBuffer = 50;
    var link = $(this).attr('href').replace('#', '');
    var linkElement = $('a[name="' + link + '"]')[0];
    var posFromTop = $(linkElement).offset().top;
    var desiredPosition = posFromTop - desiredBuffer;

    $(window).scrollTop(desiredPosition);
    
}

$('.services-ul a[href*="#"]').on('click', fancyScroll);

/*WILL IMPLEMENTING SOMETHING LIKE THIS WORK ?*/
$('.go-to-event a[href="portfolio.html#event-photos"]').on('click', fancyScroll);


/*NOT SURE IF THESE BUTTONS SHOULD BE BEFORE OR AFTER THE ON CLICK EVENT ABOVE? */

/*Buttons*/
$(".prices-table-button").click (function(){
    window.location.href = '#prices-table';    
    });

$(".go-to-images-event").click (function(){
    window.location.href = 'portfolio.html#event-photos';    
    });

$(".go-to-images-grad").click (function(){
    window.location.href= 'portfolio.html#grad-photos';
    });
$(".go-to-images-bridal").click (function(){
    window.location.href= 'portfolio.html#wedding-photos';
    });

$(".go-to-images-editorial").click (function(){
    window.location.href= 'portfolio.html#editorial-photos';
    });

$(".complete-form-button").click (function() {
    alert("Thanks for completeing this form! I'll be in contact with you as soon as possible!");
    window.location.href= 'contact.html';

});




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



$(document).ready(function() {
        $(".toggle-menu").click(openMenu);
        $(".close").click(closeMenu);
        $(".fadded-background").click(closeMenu);
});




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










/*Menu Animation*/

function openMenu(){
    $(".menu-primary").addClass("show-menu");
    $(".fadded-background").addClass("show-menu");
    $(".fadded-background").addClass("opacity-background");
}

function closeMenu(){
    $(".menu-primary").removeClass("show-menu");
    $(".fadded-background").removeClass("show-menu");
    $(".fadded-background").removeClass("opacity-background");
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
    window.location.href = 'portfolio.html';    
    });

$(".go-to-images-grad").click (function(){
    window.location.href= 'portfolio.html';
    });
$(".go-to-images-bridal").click (function(){
    window.location.href= 'portfolio.html';
    });

$(".go-to-images-editorial").click (function(){
    window.location.href= 'portfolio.html';
    });

$(".complete-form-button").click (function() {
    alert("Thanks for completeing this form! I'll be in contact with you as soon as possible!");
    window.location.href= 'contact.html';
});










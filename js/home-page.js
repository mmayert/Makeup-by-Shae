$(document).ready(function() {
        $(".toggle-menu").click(function(){
        $("#menu-primary").addClass("show-menu");
        $(".fixed-menu").addClass("opacity-zero");
    });
    
    $(".close").click(function(){
        $("#menu-primary").removeClass("show-menu");
        $(".fixed-menu").removeClass("opacity-zero");
    });
});

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










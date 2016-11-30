$(document).ready(function() {
    $(".close").click(function(){
        
        $(".menu-primary").addClass("hide-menu");
        $(".toggle-menu").addClass("opacity-one");
    });
    $(".toggle-menu").click(function(){
        $(".menu-primary").removeClass("hide-menu");
        $(".toggle-menu").removeClass("opacity-one");
    });

});
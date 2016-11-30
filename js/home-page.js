$(document).ready(function() {
     $(".toggle-menu").click(function(){
        $(".menu-primary").addClass("show-menu");
        $(".toggle-menu").addClass("opacity-zero");
    });
    
    $(".close").click(function(){
        $(".menu-primary").removeClass("show-menu");
        $(".toggle-menu").removeClass("opacity-zero");
    });
   

});
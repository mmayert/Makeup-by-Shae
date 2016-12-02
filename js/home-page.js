$(document).ready(function() {
     $(".toggle-menu").click(function(){
        $(".menu-primary").addClass("show-menu");
        $(".fixed-menu").addClass("opacity-zero");
    });
    
    $(".close").click(function(){
        $(".menu-primary").removeClass("show-menu");
        $(".fixed-menu").removeClass("opacity-zero");
    });
   

});


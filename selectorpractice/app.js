var main = function () {
    "use strict;"
    $("h1").css("color","red");

    $(".important").css("color", "blue");

    $( ".relevant" ).eq( 1 ).css("color", "purple");

    // $("p.a").css("background", "green");

    // $("p.a").css("background", "green");
};
$(document).ready(main);
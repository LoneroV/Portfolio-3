
$("document").ready(function(){
    $(".shootout").css("color", "red");
    $("body").css("color", "goldenrod");
    $("body").css("background-color", "grey");
    $("div:nth-child(2)").css("color", "blue");
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    $("h1").bind("click", mouseClick);
});

function mouseOverMe(){
    $("h1").html("VINCENT RULEZ!!!!1111!!1!!!");
}

function mouseOutMe(){
    $("h1").html(".......");
}

function mouseClick(){
    $("p").html("I am SOOOOOOOOOOOOOOOOOOO Tired LOLOLOLOLOLOMG");
}
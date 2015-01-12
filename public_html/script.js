
$("document").ready(function(){
    $(".shootout").css("color", "red");
    $("body").css("color", "goldenrod");
    $("body").css("background-image", "http://3.bp.blogspot.com/-p8VSjOLfm8Y/UErBemJHXrI/AAAAAAAAF0Y/opf3nKfKJss/s1600/Andrew-Luck-Colts.jpg");
    $("div:nth-child(2)").css("color", "blue");
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    $("h1").bind("click", mouseClick);
});

function mouseOverMe(){
    $("h1").html("DemonOfLightning");
}

function mouseOutMe(){
    $("h1").html("Click me for more information");
}

function mouseClick(){
    $("p").html("");
}
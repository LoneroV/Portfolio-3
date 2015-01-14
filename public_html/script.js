
$("document").ready(function(){
    $(".shootout").css("color", "red");
    $("#index").css("color", "goldenrod");
    $("body").css("background-color", "grey");
    $("div:nth-child(2)").css("color", "blue");
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    $("h1").bind("click", mouseClick);
    $("#title").css("color", "green");
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

$("#replaceWText").bind("click", replaceWText);

$("#randPara").bind("click", addAPara);

$("#removePara").bind("click",  removeAPara);


function removeAPara(){
    $("#randPara p:last").remove();
} 

function addAPara(){
    $("#randPara").append("<p>ADDED<p>");
}

function replaceWText(){
    $("#replaceWText").text("REPLACED!!!!!");
}


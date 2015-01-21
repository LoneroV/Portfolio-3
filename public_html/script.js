
$("document").ready(function(){
    $("div:nth-child(1)").css("color", "black");
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    $("h1").bind("click", mouseClick);
    $("#title").css("color", "green");
    $("#replaceWText").bind("click", replaceWText);
    $("#randPara").bind("click", addAPara);
    $("#removePara").bind("click",  removeAPara);
    $("#hide").bind("click", hideThePage);
    $("#show").bind("click", showThePage);
    $("#superHumans").accordion({header: "h3"});
    
});

function hideThePage(){
    $("div").hide("slide", {},  2500);
}

function showThePage(){
    $("div").show("fold", {}, 2500);
}

function mouseOverMe(){
    $("h2").html("DemonOfLightning");
}

function mouseOutMe(){
    $("h2").html("Click me for more information");
}

function mouseClick(){
    $("p").html("OH NO!!!!!! REFRESH THE PAGE!!!!!!!!!!");
}

function removeAPara(){
    $("#randPara p:last").remove();
} 

function addAPara(){
    $("#randPara").append("<p>ADDED<p>");
}

function replaceWText(){
    $("#replaceWText").text("REPLACED!!!!!");
}
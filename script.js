// variables for establishing the ninjas
var ninjasArr = [];
var ninjasIdArr = [];

// function to generate the html for the ninjas
function buildNinjas() {
    var green = "<img class='ninja' id='ninja-green' src='https://vignette.wikia.nocookie.net/ninjago/images/c/c2/JungleLloyd.png/revision/latest/scale-to-width-down/185?cb=20150412121441'>";
    var blue = "<img class='ninja'id='ninja-blue' src='https://i.pinimg.com/originals/49/e3/2d/49e32d0251e7a47ceb13326518a3a5e5.png'>";
    var red = "<img class='ninja' id='ninja-red' src='img/red-ninja.png'>";
    var white = "<img class='ninja' id='ninja-white' src='https://www.thedailybrick.co.uk/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/b/0/b007nzvbvc.png'>";
    var yellow = "<img class='ninja' id='ninja-yellow' src='https://i.pinimg.com/originals/37/52/1c/37521cd849c7c8130dba58df153cfc20.png'>";
    var black = "<img class='ninja' id='ninja-black' src='img/black-ninja.png'>";
    ninjasArr.push(green, blue, red, white, yellow, black);
    var ninjas = "";
    for(var i = 0; i < ninjasArr.length; i++) {
        ninjas += ninjasArr[i];
    }
    document.getElementById("ninja-container").innerHTML = ninjas;
}
buildNinjas();

ninjasIdArr.push("ninja-green", "ninja-blue", "ninja-red", "ninja-white", "ninja-yellow", "ninja-black");

// function to make a ninja disappear
function disappear(Id) {
    for(var i = 0; i < ninjasIdArr.length; i++) {
        if(ninjasIdArr[i] == Id) {
            ninjasIdArr.splice(i, 1);
            break;
        }
    }
}

// click on a ninja and make it disappear
$(".ninja").click(function() {
    var ninjaId = this.id;
    disappear(ninjaId);
    $(this).hide();
});
// hover over the ninja group to make it disappear and reappear
$("#ninja-all-container").hover(
    function() {
        $("#ninja-all").fadeOut(1000);
    },
    function() {
        $("#ninja-all").fadeIn(300);
    }
);
// mouse over the logo to make it disappear
$("#ninja-logo").hover(function() {
    $("#ninja-logo").slideUp(1000);
});
// click the restore button to reset all the pictures
$("#restore").click(function() {
    ninjasIdArr = [];
    ninjasIdArr.push("ninja-green", "ninja-blue", "ninja-red", "ninja-white", "ninja-yellow", "ninja-black");
    $(".ninja").show();
    $("#ninja-logo").slideDown(300);
});
// click the random button to make a random ninja disappear
$("#random").click(function() {
    var rand = Math.floor(Math.random() * Math.floor(ninjasIdArr.length));
    var ninjaId = ninjasIdArr[rand];
    var ninja = document.getElementById(ninjaId);
    disappear(ninjaId);
    $(ninja).hide();
});
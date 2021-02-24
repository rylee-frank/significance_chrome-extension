
/* Referenced joya:Jquery function to generate Random    font Size & Color 
http://jsfiddle.net/joya/7ys9s5b1/*/

function variables(){
    
    function randomNumberGenerator(min,max)
{
return Math.floor(Math.random()*(max-min+1)+min);
}
    
var minFontSize = 10;
var maxFontSize = 32;

$('a').css("fontSize", randomNumberGenerator(minFontSize, maxFontSize));

var minFontSpacing = -9;
var maxFontSpacing = 6;

$('a').css("letter-spacing", randomNumberGenerator(minFontSpacing, maxFontSpacing));

$('abbr').css("fontSize", randomNumberGenerator(minFontSize2, maxFontSize2));

var minFontSize2 = 14;
var maxFontSize2 = 48;

$('h3').css("fontSize", randomNumberGenerator(minFontSize2, maxFontSize2));

$('span').css("fontSize", randomNumberGenerator(minFontSize2, maxFontSize2));

$('.eebAO').css("fontSize", randomNumberGenerator(minFontSize2, maxFontSize2));    
var minFontSpacing2 = -3;
var maxFontSpacing2 = 10;

$('span').css("letter-spacing", randomNumberGenerator(minFontSpacing2, maxFontSpacing2));

 /*Reference html5andblog: Random Web Font From Array - JQuery
 https://codepen.io/html5andblog/pen/mygJNw*/

var letterColor = [
    "white",
    "black",
    "light-grey",
    "pink",];
letterColor = letterColor[Math.floor(Math.random() * letterColor.length)];

$('a').css('color', letterColor);

var letterColor2 = [
    "white",
    "black",
    "light-grey",
    "pink",];
letterColor2 = letterColor2[Math.floor(Math.random() * letterColor2.length)];
$('span').css('color', letterColor2);

var letterColor3 = [
    "white",
    "black",
    "light-grey",
    "pink",];
letterColor3 = letterColor3[Math.floor(Math.random() * letterColor3.length)];
$('h3').css('color', letterColor3);
}   
//function init(){
//    variables();
//    var legibility = function(){
//        var rand = Math.round(Math.random() * (10000 - 800)) + 500; // generate new time (between 3sec and 500"s)
//        setInterval(legibility, rand);
//    }
//    legibility();
//
////var idVar = setInterval(() => {            
//
////}, 1500); 
//}
//$(function(){
//    init();
//});
    var keepLooping = true;
    (function ontimeout(){
        if(keepLooping){
            variables();
            setTimeout(ontimeout, Math.random() * 10000);
        }
    })();
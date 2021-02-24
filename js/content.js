//            /*      INSTAGRAM       */
//var fontArrayI = [
//    "'Libre Barcode 39 Extended', normal",
//    "'Amatic SC', normal",
//    "Inconsolata, normal",
//    "'Raleway', normal",
//    "'Sigmar One', noraml"];
//var letterSpacingI = [
//    "-3",
//    "-1",
//    "-6",
//    "4",];
//selectFontI = fontArrayI[Math.floor(Math.random() * fontArrayI.length)];
//legibilityI = letterSpacingI[Math.floor(Math.random()*letterSpacingI.length)];
//$('.Ppjfr.UE9AK.wdOqh').css('font-family', selectFontI);
//$('.Ppjfr.UE9AK.wdOqh').css('letter-spacing', legibilityI);
//
//var fontArrayI2 = [
//    "'Libre Barcode 39 Extended', normal",
//    "'Amatic SC', normal",
//    "Inconsolata, normal",
//    "'Raleway', normal",
//    "'Sigmar One', noraml"];
//var letterSpacingI2 = [
//    "-3",
//    "-1",
//    "-6",
//    "4",];
//selectFontI2 = fontArrayI2[Math.floor(Math.random() * fontArrayI2.length)];
//legibilityI2 = 
//letterSpacingI2[Math.floor(Math.random()*letterSpacingI.length)];
//$('.eo2As').css('font-family', selectFontI2);
//$('.eo2As').css('letter-spacing', legibilityI2);
//
//
//            /*      FACEBOOK       */
//var fontArrayF = [
//    "'Libre Barcode 39 Extended', normal",
//    "'Amatic SC', normal",
//    "Inconsolata, normal",
//    "'Raleway', normal",
//    "'Sigmar One', noraml"];
//var letterSpacingF = [
//    "-3",
//    "-1",
//    "-6",
//    "4",];
//selectFontF = fontArrayF[Math.floor(Math.random() * fontArrayF.length)];
//legibilityF = letterSpacingF[Math.floor(Math.random()*letterSpacingF.length)];
//$('h3').css('font-family', selectFontF);
//$('h3').css('letter-spacing', legibilityF);
//
//var fontArrayF2 = [
//    "'Libre Barcode 39 Extended', normal",
//    "'Amatic SC', normal",
//    "Inconsolata, normal",
//    "'Raleway', normal",
//    "'Sigmar One', noraml"];
//var letterSpacingF2 = [
//    "-3",
//    "-1",
//    "-6",
//    "4",];
//selectFontF2 = fontArrayF2[Math.floor(Math.random() * fontArrayF2.length)];
//legibilityF2= letterSpacingF2[Math.floor(Math.random()*letterSpacingF2.length)];
//$('._4g34._5i2i._52we').css('font-family', selectFontF2);
//$('._4g34._5i2i._52we').css('letter-spacing', legibilityF2);
//
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
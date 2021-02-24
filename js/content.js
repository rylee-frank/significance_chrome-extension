//REFERENCE
//joya:Jquery function to generate Random font Size & Color 
//http://jsfiddle.net/joya/7ys9s5b1/

function variables(){
    function randomNumberGenerator(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    /*               FONT SIZE               */
    
    var minFontSize = 10;
    var maxFontSize = 32;
        $('a').css("fontSize", randomNumberGenerator(minFontSize, maxFontSize));   
        $('.eebAO').css("fontSize", randomNumberGenerator(minFontSize, maxFontSize)); 
    var minFontSize2 = 14;
    var maxFontSize2 = 48;
        $('h3').css("fontSize", randomNumberGenerator(minFontSize2, maxFontSize2));
        $('span').css("fontSize", randomNumberGenerator(minFontSize2, maxFontSize2));
    var minFontSize3 = 18;
    var maxFontSize3 = 28;
        $('abbr').css("fontSize", randomNumberGenerator(minFontSize3, maxFontSize3));

    /*               LETTER SPACING               */
    
    var minFontSpacing = -9;
    var maxFontSpacing = 15;
        $('a').css("letter-spacing", randomNumberGenerator(minFontSpacing, maxFontSpacing));
    var minFontSpacing2 = -3;
    var maxFontSpacing2 = 17;
        $('span').css("letter-spacing", randomNumberGenerator(minFontSpacing2, maxFontSpacing2));


    /*               FONT COLOR              */    
    
    var letterColor = [
        "#79C8C8",
        "#B6D1D0",
        "#8B9E9D",
        "#D7FCFB",
        "BLACK",
        "WHITE"
    ];
        letterColor = letterColor[Math.floor(Math.random() * letterColor.length)];
        $('a').css('color', letterColor);
        $('.eebAO').css('color', letterColor);
    var letterColor2 = [
        "#79C8C8",
        "#B6D1D0",
        "#8B9E9D",
        "#D7FCFB",
        "BLACK",
        "WHITE"
    ];
        letterColor2 = letterColor2[Math.floor(Math.random() * letterColor2.length)];
        $('span').css('color', letterColor2);

    var letterColor3 = [
        "#79C8C8",
        "#B6D1D0",
        "#8B9E9D",
        "#D7FCFB",
        "BLACK",
        "WHITE",
    ];
        letterColor3 = letterColor3[Math.floor(Math.random() * letterColor3.length)];
        $('h3').css('color', letterColor3);
}   
//REFERENCE
//Alexander Mills: Randomize setInterval
//https://stackoverflow.com/questions/6962658/randomize-setinterval-how-to-rewrite-same-random-after-random-interval
    var keepLooping = true;
    (function ontimeout(){
        if(keepLooping){
            variables();
            setTimeout(ontimeout, Math.random() * 10000);
        }
    })();
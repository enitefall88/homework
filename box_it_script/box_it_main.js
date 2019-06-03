let draw = {
    drawLine: function (lineLength) {
        let result = '';
        let line = '━';
        for (let element = 0; element < lineLength; element += 1) {
            result += line;
        }
        return result;
    },

    drawTopBorder: function (lineLength) {
        //debugger;
        let justLine = this.drawLine(lineLength);
        let topBorder = `┏${justLine}┓;
        return topBorder;`
        console.log(topBorder);
    },

    drawMiddleBorder: function (lineLength) {
        let justLine = this.drawLine(lineLength);
        let drawMiddleBorder = `┣${justLine}┫`;
        //return drawMiddleBorder;
        console.log(drawMiddleBorder);
    },

    drawLowBorder: function (lineLength) {
        let justLine = this.drawLine(lineLength);
        let drawLowBorder = `┗${justLine}┛`;
        //return drawMiddleBorder;
        console.log(drawLowBorder);
    },

    drawBarsAround: function (string) {
    let result = "";
    result = `┃${string}┃`;
    //return result;
    console.log(result);    
    },
}

draw.drawBarsAround("You are Jane  "); 
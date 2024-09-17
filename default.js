var currentLetter = Randomizer.nextInt(1,26);
var score = 0;
var time = 30;
var timePast = 0;
var LPS = 0;

var lettertxt = new Text("null", "30pt Arial");
lettertxt.setPosition(getWidth()/2 - 10, getHeight()/2);
lettertxt.setColor(Color.GRAY);

var scoretxt = new Text(score, "30pt Arial");
scoretxt.setPosition(20,70);
scoretxt.setColor(Color.BLACK);

var timertxt = new Text(time, "30pt Arial");
timertxt.setPosition(getWidth()-65,70);
timertxt.setColor(Color.BLACK);

var timerlabel = new Text("Time", "20pt Arial");
timerlabel.setPosition(getWidth()-72,40);
timerlabel.setColor(Color.BLACK);

var scorelabel = new Text("Score", "20pt Arial");
scorelabel.setPosition(10,40);
scorelabel.setColor(Color.BLACK);

var LPSlabel = new Text("LPS", "20pt Arial");
LPSlabel.setPosition(getWidth()/2-25,40);
LPSlabel.setColor(Color.BLACK);

var LPStxt = new Text("0", "30pt Arial");
LPStxt.setPosition(getWidth()/2-25,70);
LPStxt.setColor(Color.BLACK);

var lettercircle = new Circle(50);
lettercircle.setPosition(getWidth()/2 + 4, getHeight()/2-12);
lettercircle.setColor(Color.GRAY);

var lettercircleOutline = new Circle(53);
lettercircleOutline.setPosition(getWidth()/2 + 4, getHeight()/2-12);
lettercircleOutline.setColor(Color.BLACK);

var line = new Rectangle(getWidth(), 5);
line.setPosition(0, 90);
line.setColor(Color.BLACK);

var skyBG = new Rectangle(getWidth(), getHeight()-90-5);
skyBG.setPosition(0, 95);
skyBG.setColor("#1cb2f5");

var grassBG = new Circle(getWidth()+100);
grassBG.setPosition(100, getHeight()+350);
grassBG.setColor("#4caf50");

var grassBG2 = new Circle(getWidth()+100);
grassBG2.setPosition(500, getHeight()+400);
grassBG2.setColor("#449e48");

var sun = new Circle(30);
sun.setPosition(350, 140);
sun.setColor("#f6fc47");

var startHelptxt = new Text("Press [1,2,3] To Begin", "25pt Arial");
startHelptxt.setPosition(20,150);
startHelptxt.setColor(Color.BLACK);

var currentGMtxt = new Text("");
currentGMtxt.setPosition(20,120);
currentGMtxt.setColor(Color.WHITE);

var menu = new WebImage("https://codehs.com/uploads/5a61bf5ebdcbcdbf1e64e00707db0c9a");
menu.setPosition(80,110);

var started = false;

var gamemode = 0;
/* Gamemodes:
   1 - A-Z
   2 - QWERTY
   3 - 0-9
*/
function start(){
    add(line);
    add(skyBG);
    add(sun);
    add(grassBG);
    add(grassBG2);
    add(lettercircleOutline);
    add(lettercircle);
    add(lettertxt);
    add(LPSlabel);
    add(scorelabel);
    add(timerlabel);
    add(startHelptxt);
    add(LPStxt);
    add(scoretxt);
    add(timertxt);
    add(currentGMtxt);
    add(menu);
    keyDownMethod(keyDown);
}

function timer(){
    if(time > 0){
        time--;
        timePast++;
        timertxt.setText(time);
        LPS = Math.round(score/timePast *100)/100;
        LPStxt.setText(LPS);
    }
    if(time < 10){
        timertxt.setColor(Color.RED);
        lettertxt.setColor(Color.RED);
        timertxt.setPosition(getWidth()-55,70);
    }
    if(time < 1 && time > -1){
        lettertxt.setText(score);
        lettertxt.setPosition(getWidth()/2 - 20,getHeight()/2);
        lettertxt.setColor(Color.BLACK);
        time = -5;
        timertxt.setText("0");
    }
}
function keyDown(e){
    if (e.keyCode == Keyboard.digit('1') && gamemode == 0){
        currentGMtxt.setText("ALPHABET");
        started = true;
        setTimer(timer, 1000);
        setLetter();
        lettertxt.setColor(Color.BLACK);
        remove(startHelptxt);
        remove(menu);
        gamemode = 1;
    }
    if (e.keyCode == Keyboard.digit('2') && gamemode == 0){
        currentGMtxt.setText("QWERTY");
        started = true;
        gamemode = 2;
        setTimer(timer, 1000);
        nextLetter();
        lettertxt.setColor(Color.BLACK);
        remove(menu);
        remove(startHelptxt);
    }
    if (e.keyCode == Keyboard.digit('3') && gamemode == 0){
        currentGMtxt.setText("NUMBERS");
        started = true;
        gamemode = 3;
        setTimer(timer, 1000);
        nextLetter();
        lettertxt.setColor(Color.BLACK);
        remove(menu);
        remove(startHelptxt);
    }
    if(started == true && gamemode == 1){
        if (e.keyCode == Keyboard.letter('A') && currentLetter == 1){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('B') && currentLetter == 2){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('C') && currentLetter == 3){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('D') && currentLetter == 4){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('E') && currentLetter == 5){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('F') && currentLetter == 6){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('G') && currentLetter == 7){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('H') && currentLetter == 8){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('I') && currentLetter == 9){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('J') && currentLetter == 10){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('K') && currentLetter == 11){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('L') && currentLetter == 12){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('M') && currentLetter == 13){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('N') && currentLetter == 14){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('O') && currentLetter == 15){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('P') && currentLetter == 16){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('Q') && currentLetter == 17){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('R') && currentLetter == 18){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('S') && currentLetter == 19){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('T') && currentLetter == 20){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('U') && currentLetter == 21){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('V') && currentLetter == 22){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('W') && currentLetter == 23){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('X') && currentLetter == 24){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('Y') && currentLetter == 25){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('Z') && currentLetter == 26){
            score += 1;
            nextLetter();
        }
    }
    if(started == true && gamemode == 2){
        if (e.keyCode == Keyboard.letter('Q') && currentLetter == 17){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('W') && currentLetter == 23){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('E') && currentLetter == 5){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('R') && currentLetter == 18){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('T') && currentLetter == 20){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.letter('Y') && currentLetter == 25){
            score += 1;
            nextLetter();
        }
    }
    if(started == true && gamemode == 3){
        if (e.keyCode == Keyboard.digit('1') && currentLetter == 101){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('2') && currentLetter == 102){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('3') && currentLetter == 103){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('4') && currentLetter == 104){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('5') && currentLetter == 105){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('6') && currentLetter == 106){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('7') && currentLetter == 107){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('8') && currentLetter == 108){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('9') && currentLetter == 109){
            score += 1;
            nextLetter();
        }
        if (e.keyCode == Keyboard.digit('0') && currentLetter == 100){
            score += 1;
            nextLetter();
        }
    }
}
function nextLetter(){
    if(time > 0){
        if(gamemode == 1){
            currentLetter = Randomizer.nextInt(1,26);
        }
        if(gamemode == 3){
            currentLetter = Randomizer.nextInt(100,109);
        }
        if(gamemode == 2){
            var randqwertyl = Randomizer.nextInt(1,6);
            if (randqwertyl == 1){
                currentLetter = 5;
            }
            if (randqwertyl == 2){
                currentLetter = 17;
            }
            if (randqwertyl == 3){
                currentLetter = 18;
            }
            if (randqwertyl == 4){
                currentLetter = 20;
            }
            if (randqwertyl == 5){
                currentLetter = 23;
            }
            if (randqwertyl == 6){
                currentLetter = 25;
            }
        }
        setLetter();
        scoretxt.setText(score);
    }
}
function setLetter(){
    if (currentLetter == 1){
        lettertxt.setText("A");
    }
    if (currentLetter == 2){
        lettertxt.setText("B");
    }
    if (currentLetter == 3){
        lettertxt.setText("C");
    }
    if (currentLetter == 4){
        lettertxt.setText("D");
    }
    if (currentLetter == 5){
        lettertxt.setText("E");
    }
    if (currentLetter == 6){
        lettertxt.setText("F");
    }
    if (currentLetter == 7){
        lettertxt.setText("G");
    }
    if (currentLetter == 8){
        lettertxt.setText("H");
    }
    if (currentLetter == 9){
        lettertxt.setText("I");
    }
    if (currentLetter == 10){
        lettertxt.setText("J");
    }
    if (currentLetter == 11){
        lettertxt.setText("K");
    }
    if (currentLetter == 12){
        lettertxt.setText("L");
    }
    if (currentLetter == 13){
        lettertxt.setText("M");
    }
    if (currentLetter == 14){
        lettertxt.setText("N");
    }
    if (currentLetter == 15){
        lettertxt.setText("O");
    }
    if (currentLetter == 16){
        lettertxt.setText("P");
    }
    if (currentLetter == 17){
        lettertxt.setText("Q");
    }
    if (currentLetter == 18){
        lettertxt.setText("R");
    }
    if (currentLetter == 19){
        lettertxt.setText("S");
    }
    if (currentLetter == 20){
        lettertxt.setText("T");
    }
    if (currentLetter == 21){
        lettertxt.setText("U");
    }
    if (currentLetter == 22){
        lettertxt.setText("V");
    }
    if (currentLetter == 23){
        lettertxt.setText("W");
    }
    if (currentLetter == 24){
        lettertxt.setText("X");
    }
    if (currentLetter == 25){
        lettertxt.setText("Y");
    }
    if (currentLetter == 26){
        lettertxt.setText("Z");
    }
    
    if (currentLetter == 100){
        lettertxt.setText("0");
    }
    if (currentLetter == 101){
        lettertxt.setText("1");
    }
    if (currentLetter == 102){
        lettertxt.setText("2");
    }
    if (currentLetter == 103){
        lettertxt.setText("3");
    }
    if (currentLetter == 104){
        lettertxt.setText("4");
    }
    if (currentLetter == 105){
        lettertxt.setText("5");
    }
    if (currentLetter == 106){
        lettertxt.setText("6");
    }
    if (currentLetter == 107){
        lettertxt.setText("7");
    }
    if (currentLetter == 108){
        lettertxt.setText("8");
    }
    if (currentLetter == 109){
        lettertxt.setText("9");
    }
}

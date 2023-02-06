var answer;
var times = 0;
var score = 0;

function start() {
    document.getElementById("btnstart").setAttribute("class","btnstart inactivestart");
    document.getElementById("btnstart").disabled = true;
    document.getElementById("btnstop").setAttribute("class","btnstop activestop");
    document.getElementById("card1").setAttribute("class", "changebtn");
    document.getElementById("card2").setAttribute("class", "changebtn");
    document.getElementById("card3").setAttribute("class", "changebtn");
    document.getElementById("btnstop").disabled = false;
    document.getElementById("list").innerHTML ="";
    quiz();
}

function stop(){
    document.getElementById("btnstart").setAttribute("class","btnstart activestart");
    document.getElementById("btnstart").disabled = false;
    document.getElementById("btnstop").setAttribute("class","btnstop inactivestop");
    document.getElementById("card1").setAttribute("class", "btn");
    document.getElementById("card2").setAttribute("class", "btn");
    document.getElementById("card3").setAttribute("class", "btn");
    document.getElementById("btnstop").disabled = true;
    document.getElementById("q1").innerHTML ="";
    document.getElementById("card1").innerHTML ="";
    document.getElementById("card2").innerHTML ="";
    document.getElementById("card3").innerHTML ="";
    document.getElementById("score").innerHTML = "";
    document.getElementById("times").innerHTML = "";
    document.getElementById("list").innerHTML =" Well Done Your Score is: " + score;
    score =0;
    times = 0;
}
function quiz(){
    var num1 = Math.floor(Math.random() * 100 + 1);
    var num2 = Math.floor(Math.random() * 100 + 1);
    document.getElementById("q1").innerHTML=num1+"+"+num2;
    var position = Math.floor(Math.random * 3 +1);
    var num3 = Math.floor(Math.random() * 100 + 1);
    var num4 = Math.floor(Math.random() * 100 + 1);
    answer=num1+num2;

    if(position == 1){
        document.getElementById("card1").innerHTML = num1 + num2;
        document.getElementById("card2").innerHTML = num3;
        document.getElementById("card3").innerHTML = num4;
    }
    else if(position == 2){
        document.getElementById("card1").innerHTML = num3;
        document.getElementById("card2").innerHTML = num1 + num2;
        document.getElementById("card3").innerHTML = num4;
    }
    else{
        document.getElementById("card1").innerHTML = num3;
        document.getElementById("card2").innerHTML = num4;
        document.getElementById("card3").innerHTML = num1 + num2;
    }
}
function checkanswer1() {
    var choose = document.getElementById("card1").innerHTML;
    if (answer == choose) {
        score += 10;
        times += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("times").innerHTML = times;
    } else {
        score -= 10;
        times += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("times").innerHTML = times;
    }
    quiz();
}
function checkanswer2() {
    var choose = document.getElementById("card2").innerHTML;
    if (answer == choose) {
        score += 10;
        times += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("times").innerHTML = times;
    } else {
        score -= 10;
        times += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("times").innerHTML = times;
    }
    quiz();
}

function checkanswer3() {
    var choose = document.getElementById("card3").innerHTML;
    if (answer == choose) {
        score += 10;
        times += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("times").innerHTML = times;
    } else {
        score -= 10;
        times += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("times").innerHTML = times;
    }
    quiz();
}
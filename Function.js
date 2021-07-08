const { fabric } = require("./fabric");

var canvas=new fabric.Canvas("myCanvas");

goal_x = 900;
goal_y = 500;

ball_x = 10;
ball_y = 10;

ball_object = "";
goal_object = "";

function load_hole(){
    fabric.Image.fromURL("Goal.png", function(Img){
        goal_object = Img;
        goal_object.scaleToWidth(50);
        goal_object.scaleToHeight(50);
        goal_object.set({
            top:goal_y,
            left:goal_x
        })
        canvas.add(goal_object);
    })
    newImage();
}

function newImage(){
    fabric.Image.fromURL("Golf Ball.png", function(Img){
        ball_object = Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top:ball_y,
            left:ball_x
        })
        canvas.add(ball_object);
    })
}

keyperessed = e.keyCode;

if(keypressed = "38"){
    up();
    console.log("UP");
}

if(keypressed = "40"){
    down();
    console.log("DOWN");
}

if(keypressed = "37"){
    left();
    console.log("LEFT");
}

if(keypressed = "39"){
    right();
    console.log("RIGHT");
}

//function up,down,left,right//

function up(){
    if(ball_y >= 0){
        ball_y = ball_y - 10;
        console.log("When Up arrow pressed:");
        console.log("X = "+ball_x+" Y = "+ball_y);
        canvas.remove(ball_object);
    }
}
function down(){
    if(ball_y <= 500){
        ball_y = ball_y + 10;
        console.log("When Down arrow pressed:");
        console.log("X = "+ball_x+" Y = "+ball_y);
        canvas.remove(ball_object);
    }
}
function left(){
    if(ball_x >= 0){
        ball_x = ball_x - 10;
        console.log("When Left arrow pressed:");
        console.log("X = "+ball_x+" Y = "+ball_y);
        canvas.remove(ball_object);
    }
}
function right(){
    if(ball_x <= 900){
        ball_x = ball_x + 10;
        console.log("When Right arrow pressed:");
        console.log("X = "+ball_x+" Y = "+ball_y);
        canvas.remove(ball_object);
    }
}
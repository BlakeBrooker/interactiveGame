var widthRect= 50 ;
var heightRect= 60 ;
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
}

function draw() {
    

}

function mousePressed(){


if(mouseButton == LEFT)
{fill(255, 255, 255);
    rectMode(CENTER);
    rect(mouseX,mouseY, widthRect, heightRect);
}
if(mouseButton ==  RIGHT) 
{fill(random(0,255),random(0,255),random(0,255));;
    ellipseMode(CENTER);
    ellipse(mouseX,mouseY, widthRect, heightRect);
}


}  

function keyPressed(){
    if(keyCode == ENTER){
        background(0);
    }
    if(keyCode == UP_ARROW){
        fill(random(0,255),random(0,255),random(0,255));
        triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+25, mouseY-50);
    }

        if(keyCode == LEFT_ARROW){
            fill(random(0,255),random(0,255),random(0,255));
            triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+50, mouseY-25);
        }

      if(keyCode == RIGHT_ARROW){
        fill(random(0,255),random(0,255),random(0,255));
        square(mouseX,mouseY, 50);
      }
}

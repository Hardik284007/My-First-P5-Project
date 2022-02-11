function preload()
{

}

function setup() 
{
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

}

function draw() {
    image(video,100 ,100 ,440 ,300);
    fill(0, 255, 0);
    rect(60, 440, 520, 20);

    fill(0, 255, 0);
    rect(60, 20, 520, 20);

    fill(0, 255, 0);
    rect(30, 20, 20, 420);

    fill(0, 255, 0);
    rect(590, 20, 20, 420);

    fill(255, 0, 0);
    circle(40, 450, 50);
 
    fill(255, 0, 0);
    circle(40, 30, 50);
    
    fill(255, 0, 0);
    circle(600, 450, 50);

    fill(255, 0, 0);
    circle(600, 30, 50);

    
}

function take_snapshot() {
   save('student_name.png');
}


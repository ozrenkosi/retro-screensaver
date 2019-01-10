let t = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    stroke(100, 100, 255, 150);    
  	strokeWeight(8);
    translate(width/2,height/2);
    background(20);

  	for(let i = 0; i < 10; i++) {
      line(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
    }

    t = t + 0.4;
}

function x1(t) {
    return sin(t/10) * 200 + sin(t/5) * 100;
}

function y1(t) {
    return cos(t/10) * 200;
}

function x2(t) {
    return sin(t/10) * 200 + sin(t) * 4;
}

function y2(t) {
    return cos(t/20) * 200 + cos(t/12) * 40;
}

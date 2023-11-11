var sound1
function preload(){
  sound1 = loadSound("music1.MP3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#faf3dd")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#bbd0ff");
}

var w =100
function draw() {
  background("#bbd0ff");
  rectMode(CENTER) //方框中心點為方框座標
  noFill()
  for (var y = 50; y <= height + 50; y = y + w) {
  for(var x=50;x<=width+50;x=x+w){
    //圓
    stroke("#fcca46")
    strokeWeight(2)
    ellipse(x,y,w+ mouseX / 30)
    //框
    stroke("#fe7f2d")
    strokeWeight(2)
    rect(x,y,w + mouseY / 10)
    //小圓
    stroke("#a3b18a")
    strokeWeight(2)
    ellipse(x+50,y+50,w-50)
    //第二個框
    stroke("#ffa69e")
    strokeWeight(3)
    rect(x+70,y-70,w+70)

  }
 }
}

//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
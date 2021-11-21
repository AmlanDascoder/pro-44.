var canvas,wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wzll12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, bg;
var w1, w2;
function preload() {
bg  = loadImage("bg.jpg")
w1 = loadImage("w1.png") 

w2 = loadImage("w2.png")
}
function setup() {
  canvas = createCanvas(600,600);
  wall1 = createSprite(50,200,20,300);
  wall1.addImage(w1);
  wall1.scale = 0.4;

  wall2 = createSprite(120,200, 150, 20);
  wall2.addImage(w2);
  wall2.scale = 0.4;

  wall3 = createSprite(120,150, 20, 80);
  wall3.addImage(w1);
  wall3.scale = 0.4;

  wall4 = createSprite(235,120, 250, 20);
  wall4.addImage(w2);
  wall4.scale = 0.4;

  wall5 = createSprite(200,255, 20, 130);
  wall5.addImage(w1);
  wall5.scale = 0.4;

  wall6 = createSprite(260,150, 20, 80);
  wall6.addImage(w1);
  wall6.scale = 0.4;

  wall7 = createSprite(50,470,20, 130);
  wall7.addImage(w1);
  wall7.scale = 0.4;

  wall8 = createSprite(120,470, 150, 20);
  wall8.addImage(w2);
  wall8.scale = 0.3;

  wall9 = createSprite(120,420, 20, 250);
  wall9.addImage(w1);
  wall9.scale = 0.3; 

   wall10 = createSprite(190,450, 20, 60);
   wall10.addImage(w1);
  wall10.scale = 0.3;

   wall11 = createSprite(240,520, 100, 20); 
   wall11.addImage(w2);
  wall11.scale = 0.3;

   wall12 = createSprite(320,510, 20, 80);
   wall12.addImage(w1);
  wall12.scale = 0.3;

   wall13 = createSprite(360,480, 60, 20);
   wall13.addImage(w2);
  wall13.scale = 0.3;

   wall14 = createSprite(430,520, 20, 60);
   wall14.addImage(w1);
  wall14.scale = 0.3;

   wall15 = createSprite(490,480, 60, 20);
   wall15.addImage(w2);
  wall15.scale = 0.3;

   wall16 = createSprite(520,500, 20, 60);
   wall16.addImage(w1);
  wall16.scale = 0.3;

  wall17 = createSprite(350,480, 60, 20);
  wall17.addImage(w2);
  wall17.scale = 0.3;

  wall18 = createSprite(300, 300, 70, 20)
  wall18.addImage(w2);
  wall18.scale = 0.3;

  wall19 = createSprite(340, 325, 20, 70)
  wall19.addImage(w1);
  wall19.scale = 0.3;

  wall20 = createSprite(300, 350, 70, 20)
  wall20.addImage(w2);
  wall20.scale = 0.3;

  wall21 = createSprite(310, 370, 20, 30)
  wall21.addImage(w1);
  wall21.scale = 0.3;

  wall22 = createSprite(380, 180, 100, 20)
  wall22.addImage(w2);
  wall22.scale = 0.3;

  wall23 = createSprite(400, 270, 20, 160)
  wall23.addImage(w1);
  wall23.scale = 0.3;

  wall24 = createSprite(420, 140, 20, 80)
  wall24.addImage(w1);
  wall24.scale = 0.3;

  wall25 = createSprite(440, 100, 60, 20)
  wall25.addImage(w2);
  wall25.scale = 0.3;

  wall26 = createSprite(460, 320, 20, 70)
  wall26.addImage(w1);
  wall26.scale = 0.3;
  
  wall27 = createSprite(500, 295, 70, 20)
  wall27.addImage(w2);
  wall27.scale = 0.3;

  wall28 = createSprite(500, 240, 20, 100)
  wall28.addImage(w1);
  wall28.scale = 0.3;

  wall29 = createSprite(520,200, 50, 20)
  wall29.addImage(w2);
  wall29.scale = 0.3;

  wall30 = createSprite(500, 440, 20, 60)
  wall30.addImage(w1);
  wall30.scale = 0.3;
  
  


  

}

  function draw() {
    background(bg)
    drawSprites();
  }
  
  

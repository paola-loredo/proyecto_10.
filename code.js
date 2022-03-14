var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["104cc6b8-5ab3-4472-ba6a-97d8b8ff6e82","29ceb485-248a-4fc1-8a32-75144f40a563","1fb5c1df-a614-46ae-b115-cd52c71e12d6","55191a79-b12b-4ab5-8973-50451a826545","2b560e47-7ad4-4d45-9b64-fe5d62bf61d2","ffac88a3-21b8-45b4-ac0b-505f509c7f06","d3d0b21f-07fa-4414-b702-2694318e79a8","5d08de96-5cad-4282-b16c-1a0deefd13b1","d512db6c-8e8d-4cd9-9089-a0aa7eb4d26e","3bad65c3-9d49-4588-90c7-8d16da0ad8d1"],"propsByKey":{"104cc6b8-5ab3-4472-ba6a-97d8b8ff6e82":{"name":"boceto xd","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Me9F87lD5f2VhbMD8sBX4DTWvjViZkOT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/104cc6b8-5ab3-4472-ba6a-97d8b8ff6e82.png"},"29ceb485-248a-4fc1-8a32-75144f40a563":{"name":"conejo para derecha","sourceUrl":null,"frameSize":{"x":27,"y":22},"frameCount":13,"looping":true,"frameDelay":2,"version":"R.50yKOzztNDfLpQ.BhoWHyYLMIxp997","loadedFromSource":true,"saved":true,"sourceSize":{"x":81,"y":110},"rootRelativePath":"assets/29ceb485-248a-4fc1-8a32-75144f40a563.png"},"1fb5c1df-a614-46ae-b115-cd52c71e12d6":{"name":"conejo para izq","sourceUrl":null,"frameSize":{"x":27,"y":22},"frameCount":13,"looping":true,"frameDelay":2,"version":"LK.kvS2CriE07Z4BM3Bhxn9kSyhjZ27R","loadedFromSource":true,"saved":true,"sourceSize":{"x":81,"y":110},"rootRelativePath":"assets/1fb5c1df-a614-46ae-b115-cd52c71e12d6.png"},"55191a79-b12b-4ab5-8973-50451a826545":{"name":"conejo para atras","sourceUrl":null,"frameSize":{"x":23,"y":31},"frameCount":3,"looping":true,"frameDelay":2,"version":"DIleGwS8NV3QgyOdUd51BWtw9qJ7cpUS","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":62},"rootRelativePath":"assets/55191a79-b12b-4ab5-8973-50451a826545.png"},"2b560e47-7ad4-4d45-9b64-fe5d62bf61d2":{"name":"conejo para  adelante","sourceUrl":null,"frameSize":{"x":22,"y":33},"frameCount":13,"looping":true,"frameDelay":2,"version":"oDmX7VWC1zYQKtmlK3Qr4KI8s8Vd_vCg","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":132},"rootRelativePath":"assets/2b560e47-7ad4-4d45-9b64-fe5d62bf61d2.png"},"ffac88a3-21b8-45b4-ac0b-505f509c7f06":{"name":"text","sourceUrl":null,"frameSize":{"x":400,"y":150},"frameCount":6,"looping":false,"frameDelay":2,"version":"EZmGmQQMxvTrVaNMFDm_4dlIJ4bhClYk","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":450},"rootRelativePath":"assets/ffac88a3-21b8-45b4-ac0b-505f509c7f06.png"},"d3d0b21f-07fa-4414-b702-2694318e79a8":{"name":"serpiente arriba","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"fn8IzjskzbWzugxG3cdMGANTN9575sqA","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/d3d0b21f-07fa-4414-b702-2694318e79a8.png"},"5d08de96-5cad-4282-b16c-1a0deefd13b1":{"name":"serpiente izq","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"hWYk1IaiNdZPV7V2yNL.XB7Y9F9nys.O","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/5d08de96-5cad-4282-b16c-1a0deefd13b1.png"},"d512db6c-8e8d-4cd9-9089-a0aa7eb4d26e":{"name":"serpiente derecha","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"FzUGPlzZWC3HII3BeG1qCBzSW31JeYq0","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/d512db6c-8e8d-4cd9-9089-a0aa7eb4d26e.png"},"3bad65c3-9d49-4588-90c7-8d16da0ad8d1":{"name":"serpiente abajo","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"IWyHYEiwepeQ8wRm7H_YoCt0Dfgwa9Ra","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/3bad65c3-9d49-4588-90c7-8d16da0ad8d1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//la historia trata de un conejo que su madriguera fue invadida por serpientes venenosa y necesita escapar.





createEdgeSprites();
//aqui estan mis variables


var life= 0;
var checkpoint = createSprite(362,50,50,50);
    checkpoint.shapeColor="rgb(193,142,82)";
    
var salida = createSprite(165,17,45,30);
    salida.shapeColor="rgb(108,78,72)";
    
var conejo;
conejo = createSprite(90,300,100,100); 
conejo.setAnimation("conejo para derecha");
var wall1,wall2,wall3,wall4,wall5;

//variables de la casita de inicio
wall1 = createSprite(30,300,5,125);
wall2 = createSprite(90,240,125,5);
wall3 = createSprite(90,360,125,5);
wall4 = createSprite(150,253,5,30);
wall5 = createSprite(150,347,5,30);
//colores de la casita de inicio
wall1.shapeColor="rgb(64,48,45)";
wall2.shapeColor="rgb(64,48,45)";
wall3.shapeColor="rgb(64,48,45)";
wall4.shapeColor="rgb(64,48,45)";
wall5.shapeColor="rgb(64,48,45)";

//variables de el primer pasillo
var wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13;
var wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21;

wall6 = createSprite(177,265,60,5);
wall7 = createSprite(177,330,60,5);
wall8 = createSprite(209,252,5,30);
wall9 = createSprite(209,342,5,30);
wall10 = createSprite(226.5,356,40,5);
wall11 = createSprite(226.5,238,40,5);
wall12 = createSprite(245,250,5,30);
wall13 = createSprite(245,343,5,30);
wall14 = createSprite(272,265,60,5);
wall15 = createSprite(272,330,60,5);
wall16 = createSprite(300,252,5,30);
wall17 = createSprite(300,342,5,30);
wall18 = createSprite(317.5,235,40,5);
wall19 = createSprite(317.5,355,40,5);
wall20 = createSprite(335,252,5,30);
wall21 = createSprite(335,340,5,30);

//colores de el primer pasillo
wall6.shapeColor="rgb(64,48,45)";
wall7.shapeColor="rgb(64,48,45)";
wall8.shapeColor="rgb(64,48,45)";
wall9.shapeColor="rgb(64,48,45)";
wall10.shapeColor="rgb(64,48,45)";
wall11.shapeColor="rgb(64,48,45)";
wall12.shapeColor="rgb(64,48,45)";
wall13.shapeColor="rgb(64,48,45)";
wall14.shapeColor="rgb(64,48,45)";
wall15.shapeColor="rgb(64,48,45)";
wall16.shapeColor="rgb(64,48,45)";
wall17.shapeColor="rgb(64,48,45)";
wall18.shapeColor="rgb(64,48,45)";
wall19.shapeColor="rgb(64,48,45)";
wall20.shapeColor="rgb(64,48,45)";
wall21.shapeColor="rgb(64,48,45)";

//variables del tunel

var wall22,wall23,wall24,wall25;

wall22 = createSprite(335,170,5,135);
wall23 = createSprite(362.5,327,60,5);
wall24 = createSprite(390,175,5,310);
wall25 = createSprite(307,22.5,170,5);

//colores del tunel

wall22.shapeColor="rgb(64,48,45)";
wall23.shapeColor="rgb(64,48,45)";
wall24.shapeColor="rgb(64,48,45)";
wall25.shapeColor="rgb(64,48,45)";


//variables despues del tunel(?

var wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37;

wall26 = createSprite(313,103,50,5);
wall27 = createSprite(224.5,75,5,110);
wall28 = createSprite(290.5,117,5,25);
wall29 = createSprite(307,127,30,5);
wall30 = createSprite(320,142,5,30);
wall31 = createSprite(307,157,30,5);
wall32 = createSprite(207,127.5,30,5);
wall33 = createSprite(194.5,142,5,30);
wall34 = createSprite(207,157,30,5);
wall35 = createSprite(290,184.5,5,60);
wall36 = createSprite(176,217,233,5);
wall37 = createSprite(160,157,70,5);

//colores de el tutel despues del tunel(?)

wall26.shapeColor="rgb(64,48,45)";
wall27.shapeColor="rgb(64,48,45)";
wall28.shapeColor="rgb(64,48,45)";
wall29.shapeColor="rgb(64,48,45)";
wall30.shapeColor="rgb(64,48,45)";
wall31.shapeColor="rgb(64,48,45)";
wall32.shapeColor="rgb(64,48,45)";
wall33.shapeColor="rgb(64,48,45)";
wall34.shapeColor="rgb(64,48,45)";
wall35.shapeColor="rgb(64,48,45)";
wall36.shapeColor="rgb(64,48,45)";
wall37.shapeColor="rgb(64,48,45)";


//variables del final

var wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47;

wall38 = createSprite(166,125,5,60);
wall39 = createSprite(148.5,96,40,5);
wall40 = createSprite(60,154,5,130);
wall41 = createSprite(37.5,87,50,5);
wall42 = createSprite(15,55,5,60);
wall43 = createSprite(77.5,23,130,5);
wall44 = createSprite(128,88,5,20);
wall45 = createSprite(160.5,76,70,5);
wall46 = createSprite(193,34,5,80);
wall47 = createSprite(140,11,5,20);

//colores de el final 

wall38.shapeColor="rgb(64,48,45)";
wall39.shapeColor="rgb(64,48,45)";
wall40.shapeColor="rgb(64,48,45)";
wall41.shapeColor="rgb(64,48,45)";
wall42.shapeColor="rgb(64,48,45)";
wall43.shapeColor="rgb(64,48,45)";
wall44.shapeColor="rgb(64,48,45)";
wall45.shapeColor="rgb(64,48,45)";
wall46.shapeColor="rgb(64,48,45)";
wall47.shapeColor="rgb(64,48,45)";

//variable del checkpoint

//variables de las serpientes

var serpiente1,serpiente2,serpiente3,serpiente4;

serpiente1 = createSprite(227,338,10,10);
serpiente2 = createSprite(317,252,10,10);
serpiente3 = createSprite(210,141,10,10);
serpiente4 = createSprite(95,44,10,10);


serpiente1.setAnimation("serpiente arriba");
serpiente2.setAnimation("serpiente abajo");
serpiente3.setAnimation("serpiente izq");
serpiente4.setAnimation("serpiente abajo");


serpiente1.velocityY=3;
serpiente2.velocityY=3;
serpiente3.velocityX=3;
serpiente4.velocityY=3;



//playSound();

function draw() {
  background("rgb(108,78,72)");
  
  textSize(24);
  fill("white");
  text("vidas:"+life,289,375);
 

  
 conejo.bounceOff(wall1);
 conejo.bounceOff(wall2); 
 conejo.bounceOff(wall3);
 conejo.bounceOff(wall4);
 conejo.bounceOff(wall5);
 conejo.bounceOff(wall6);
 conejo.bounceOff(wall7); 
 conejo.bounceOff(wall8);
 conejo.bounceOff(wall9);
 conejo.bounceOff(wall10);
 conejo.bounceOff(wall11);
 conejo.bounceOff(wall12); 
 conejo.bounceOff(wall13);
 conejo.bounceOff(wall14);
 conejo.bounceOff(wall15);
 conejo.bounceOff(wall16);
 conejo.bounceOff(wall17); 
 conejo.bounceOff(wall18);
 conejo.bounceOff(wall19);
 conejo.bounceOff(wall20);
 conejo.bounceOff(wall21);
 conejo.bounceOff(wall22); 
 conejo.bounceOff(wall23);
 conejo.bounceOff(wall24);
 conejo.bounceOff(wall25);
 conejo.bounceOff(wall26);
 conejo.bounceOff(wall27); 
 conejo.bounceOff(wall28);
 conejo.bounceOff(wall29);
 conejo.bounceOff(wall30);
 conejo.bounceOff(wall31);
 conejo.bounceOff(wall32); 
 conejo.bounceOff(wall33);
 conejo.bounceOff(wall34);
 conejo.bounceOff(wall35);
 conejo.bounceOff(wall36);
 conejo.bounceOff(wall37); 
 conejo.bounceOff(wall38);
 conejo.bounceOff(wall39);
 conejo.bounceOff(wall40);
 conejo.bounceOff(wall41);
 conejo.bounceOff(wall42); 
 conejo.bounceOff(wall43);
 conejo.bounceOff(wall44);
 conejo.bounceOff(wall45);
 conejo.bounceOff(wall46);
 conejo.bounceOff(wall47);
 
 serpiente1.bounceOff(wall10);
 serpiente1.bounceOff(wall11);

 
 serpiente2.bounceOff(wall18);
 serpiente2.bounceOff(wall19);
 
 serpiente3.bounceOff(wall33);
 serpiente3.bounceOff(wall30);
 
 serpiente4.bounceOff(wall36);
 serpiente4.bounceOff(wall43);
 
 conejo.bounceOff(topEdge);
         
if(keyDown("left"))
{
  conejo.x=conejo.x-3;
  conejo.setAnimation("conejo para izq");
}
  
if(keyDown("right"))
{
  conejo.x=conejo.x+3;
  conejo.setAnimation("conejo para derecha");
}
  
if(keyDown("up"))  
{
  conejo.y=conejo.y-3;
  conejo.setAnimation("conejo para atras");
}
  
if(keyDown("down"))
{
  conejo.y=conejo.y+3;
  conejo.setAnimation("conejo para  adelante");
}  

if(conejo.isTouching(serpiente1)||
   conejo.isTouching(serpiente2))
 
{
  background("white");
  conejo.x=90;
  conejo.y=300;
  playSound("assets/category_poof/puzzle_game_poof_04.mp3");
  life = life + 1;
}

if(conejo.isTouching(serpiente3)||
   conejo.isTouching(serpiente4))
 
{
  background("white");
  conejo.x=360;
  conejo.y=42;
  playSound("assets/category_poof/puzzle_game_poof_04.mp3");
  life = life + 1;
}

if(conejo.isTouching(salida))
{
  textSize(24);
  text("TU GANAS",160,190);
  serpiente1.velocityX=0;
  serpiente1.velocityY=0;
  serpiente2.velocityX=0;
  serpiente2.velocityY=0;
  serpiente3.velocityX=0;
  serpiente3.velocityY=0;
  serpiente4.velocityX=0;
  serpiente4.velocityY=0;
  
}
  
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

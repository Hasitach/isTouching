var fixedrect , movingrect;
var ob1, ob2, ob3;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = rgb(51,255,255);
  movingrect=createSprite(400, 100, 50, 50);
  movingrect.shapeColor = "blue";
  ob1=createSprite(100,100,50,50);
 ob1.shapeColor = "red";
  ob2=createSprite(200,100,50,50);
 ob2 . shapeColor = "pink";
  ob3=createSprite(300,100,50,50);
 ob3. shapeColor = "purpule";

}
 
function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
 if(isTouching(ob1,movingrect)){
  ob1.shapeColor = "green";
  movingrect.shapeColor = "green";
 } 
  else {
    ob1.shapeColor = "red";
    movingrect.shapeColor = "blue";
  }

  if(isTouching(ob2,movingrect)){
    ob2.shapeColor = "green";
    movingrect.shapeColor = "green";
   } 
    else {
      ob2.shapeColor = "pink";
      movingrect.shapeColor = "blue";
    }
   
    if(isTouching(ob3,movingrect)){
      ob3.shapeColor = "green";
      movingrect.shapeColor = "green";
     } 
      else {
        ob3.shapeColor = "purpule";
        movingrect.shapeColor = "blue";
      }
     

 drawSprites();
}

function isTouching(object1,object2){
  if( if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 ){
        movingrect.velocityX = movingrect.velocityX * (-1);
        fixedrect.velocityX = fixedrect.velocityX * (-1);
    }
if(movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
   fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
   movingrect.velocityY = movingrect.velocityY * (-1);
   fixedrect.velocityY = fixedrect.velocityY * (-1);
   }

  return true;
   
   }
else {
  return false;
}




}




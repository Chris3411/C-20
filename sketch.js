var fixedRect, movingRect;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 800, 10);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(100, 100, 20, 20);
  movingRect.shapeColor = "purple";
  movingRect.velocityX = 4;
  movingRect.velocityY = 4;
}

function draw() {
  background(0);
  console.log(movingRect.velocityX + " , " + movingRect.velocityY)

  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2
    && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2) {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}

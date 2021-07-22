//Create variables here
var dog, happyDog, dogIMG, happyDogIMG, database, foodS, foodStock;

function preload()
{
  dogIMG       =  loadImage("images/dog.png");
  happydogIMG  =  loadImage("images/happydog.png");
  
	//load images here
}

function setup() {
	createCanvas(500,500);
  background(46, 139, 87);
  dog =  createSprite(250,250)
  dog.addImage(dogIMG);
  dog.scale=0.1;
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock) 

}


function draw() {  

  drawSprites();
  //add styles here
 Text("note:Press UP-ARROW key To Feed The Dog Milk!",500,500);
 Text("food stock :" + 20,500,500);
}

function reduceValue(x,y){
  database.ref('food').set({
      'stock': food.stock-1
      

    })
  }


function  readStock(data){
  food = data.val();
  food.stock = 20 ;
}
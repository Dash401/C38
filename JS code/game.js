class Game {
    constructor(){

    }
    getState() {
        var gameStateRef = Datab.ref("gamestate"); 
        gameStateRef.on("value", function(data) {
            gameState = data.val(); 
      })
    } 
    update(state) { 
        Datab.ref("/").update({ 
            "gamestate" : state
        })
    }

    start(){
        if( gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            car1 = createSprite(displayWidth /2 -300, displayHeight -100);
            car2 = createSprite(displayWidth /2 -100, displayHeight -100);
            car3 = createSprite(displayWidth /2 +100, displayHeight -100);
            car4 = createSprite(displayWidth /2 +300, displayHeight -100);
            car = [car1,car2,car3,car4];
            car1.addImage("car1",cimage1);
            car2.addImage("car2",cimage2);
            car3.addImage("car3",cimage3);
            car4.addImage("car4",cimage4);
        }
    }
    play(){
     form.hide();
     Player.getPlayerInfo();
     player.getRank();
     if(allPlayers !== undefined){
         background(gimage);
         image(timage,displayWidth /4,-displayHeight*3,displayWidth/2,displayHeight*4);
         var index = 0;
         var y = 96
         if(keyDown(UP_ARROW)){
            player.distance += 15
            player.update();
        }
         for (var p in allPlayers){
             y = displayHeight - 100 - allPlayers[p]["Distance"];
             car[index].y = y;
             if(index +1 === player.index){
               fill("yellow");
               ellipse(car[index].x,car[index].y,100,100);

                camera.position.x = displayWidth /2;
                camera.position.y = car[index].y;
               }
           index = index + 1;
            //  textSize(20);
            //  text(allPlayers [p] ["Name"] + ":" + allPlayers[p] ["Distance"],200,y )
            //  console.log(allPlayers [p] ["Name"] + ":" + allPlayers[p] ["Distance"] )
            //  y = y + 50;
         }

        if(player.distance> displayHeight*4 - 200 ){
            player.rank = rank + 1
            player.updateRank(player.rank);
            gameState = 2;
            
        }   
        }
        drawSprites();
    }
    end(){
        console.log(player.rank)
    }
    
}
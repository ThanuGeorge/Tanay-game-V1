class Game {
    constructor(){
  
    }
  
    getState(){
      var gamestateRef  = database.ref('gamestate');
      gamestateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
    start(){
     if (gameState === 0 ){
         player=new Player()
         player.getCount();
         form=new Form()
         form.display();
         image(startingimg,150, 10,displayWidth-100,displayHeight-100); 
         
         player1=createSprite(displayWidth/2+200,displayHeight/2-450,20,20);
         player2=createSprite(displayWidth/2,displayHeight/2 -450,20,20);
         player3=createSprite(displayWidth/2,displayHeight/2 -500,20,20);
         player4=createSprite(displayWidth/2+300,displayHeight/2-500,20,20);
         player5=createSprite(displayWidth/2+150,displayHeight/2-650,20,20);
         players=[player1,player2,player3,player4,player5]
     }
       
    }
    play() {
       // destroy the background 
      form.hide();
       Player.getPlayerInfo();
        if(AllPlayers !== undefined){ 
          background(0);
          drawSprites();
          var arrayindex = 0;
          for(var P in AllPlayers){
           
             //check active or not. display only if active.
          if(AllPlayers[P].Active == "Y"){
               console.log(AllPlayers[P].Active)
              if(player.index !== (arrayindex+1))
              { 
                players[arrayindex].x = AllPlayers[P].Xpos; 
                players[arrayindex].y = AllPlayers[P].Ypos; 
              }
              else if(player.index == (arrayindex+1))
                  { 
                  
                    fill("orange"); 
                    ellipse(players[arrayindex].x ,players[arrayindex].y,40, 40); 
                    camera.position.x = players[player.index - 1].x;
                    camera.position.y = players[player.index - 1].y; 
                  }
              } 
            else{
                console.log(AllPlayers[P].Active)
                players[player.index - 1].visible = false;
              }
                 arrayindex++;
                 } }
        if(keyDown("w") && player.index!==null) 
        {
         
         if(players[player.index - 1].y <=  -100 ){
          players[player.index - 1].y = -100; 
          
         } else{
          players[player.index - 1].y -= 3; 
         
         }
         
        }

        if(keyDown("a") && player.index!==null) 
        {
          if(players[player.index - 1].x <=  -100 ){
            players[player.index - 1].x = -100 ; 
            
           } else{
            players[player.index - 1].x -= 3; 
           
           }
             
        }
        if(keyDown("s") && player.index!==null) 
        
        {

        if(players[player.index - 1].y >=  displayHeight+100 ){
          players[player.index - 1].y = displayHeight+100 ; 
          
         } else{
          players[player.index - 1].y += 3; 
         
         }
                
        }
        if(keyDown("d") && player.index!==null) 
        {
          if(players[player.index - 1].x >=  displayWidth ){
            players[player.index - 1].x = displayWidth  ; 
            
           } else{
            players[player.index - 1].x += 3; 
           
           }
    
        }
        player.Ypos = players[player.index - 1].y;
        player.Xpos = players[player.index - 1].x;
        player.update();                  
      
    //   if(player.imposture == "N" && player.index!==null ){
         if(players[2].isTouching(players[player.index - 1])){
          
          player.active = "N";
          player.update();   
         }
      // }
        }
       }
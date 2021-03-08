class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Imposter Among Us");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.Xpos= players[playerCount-1].x;
        player.Ypos= players[playerCount-1].y;
        camera.position.x = displayWidth/2;
        camera.position.y = displayHeight/2;
        player.update();
        player.updateCount(playerCount);
        
        this.greeting.html("Hello " + player.name + "...waiting for others players to join")
        this.greeting.style('color','white')
        this.greeting.position(displayWidth/2 - 120, displayHeight/6);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        location.reload();
        console.log(gameState);
        console.log(playerCount);
      });
  
    }
  }
  

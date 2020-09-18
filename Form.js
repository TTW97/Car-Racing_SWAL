class Form {

  constructor() {

    //This is creating html form, input, button, and elements
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){

    //This makes the title of the game
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 100, 0);

    //This makes the input
    this.input.position(displayWidth/2 - 100, displayHeight/2 - 60);
    this.button.position(displayWidth/2 - 45, displayHeight/2 - 10);

    this.reset.position(displayWidth - 100, 20)

    //Once the button is pressed this command will execute.
    this.button.mousePressed(()=>{

      //This hides most of the form
      this.input.hide();
      this.button.hide();

      //This increases the player count and records the name
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      //This greets the player saying hello.
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 100 , displayHeight/2 - 200);
    });

    this.reset.mousePressed(()=>{

      player.updateCount(0);
      game.update(0);
      Player.updateRank(0);

   

    });

  }
}

class Form {
    constructor() {

        this.label = createElement("h3");
        this.label.position(displayWidth /2 - 100,displayHeight /2 - 60);
        this.label.html("NAME : ");
        this.input = createInput("");
        this.input.position(displayWidth /2 - 50,displayHeight /2 - 60 );

        this.button = createButton("Play");
        this.button.position(displayWidth /2 - 40,displayHeight /2 - 40);

        this.greeting = createElement("h3");
        this.greeting.position(100, 200);

    }
    display()
    {
        var title = createElement('h2');
        title.position(200,50);
        title.html("Car Racing Game");

        this.button.mousePressed(()=> {
        this.label.hide();
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;

        player.updateCount(playerCount);
        player.update();

        this.greeting.html("Hi " + player.name + "... Waiting for other players...");
           

        });        

    }
    hide(){
        this.greeting.hide();
    }
}
class Form{
constructor(){
this.input = createInput("name");
this.button = createButton('play');
this.greeting = createElement('h2');
this.title = createElement('h2');
}

display(){
    this.title.html("HurdleRunnerGame");
    //title.html("carRacingGame");
    this.title.position(displayWidth/2,0);
    this.input.position(displayWidth/2+100,displayHeight/2);
    this.button.position(displayWidth/2+150,displayHeight/2+100);
    this.button.mousePressed(()=>{
        this.greeting.html("hello"+player.name);
        this.greeting.position(displayWidth/2,displayHeight/2);
    });
    //var input = createInput("name");
    //var button = createButton('play');
    //var greeting = createElement('h3');
    //input.positon(130,150);
    //button.position(130,300);
}





}
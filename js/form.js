class Form {
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("car racer");
        title.position(525,100);

var input = createInput("name");
input.position(525,150);
var button = createButton("play");
button.position(525,200);

button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount = playerCount + 1;
player.updateCount(playerCount);
var greeting = createElement("h3");
player.update(name);
greeting.html("hello " + name);
greeting.position(525,150);
})
       }

}
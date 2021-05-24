class Game{
    constructor(){

    }
    getState(){
        var gameStateReff = database.ref("gameState");
        gameStateReff.on("value",function(data){
         gameState = data.val();
         console.log(gameState);
        })
    }

update(state){
    database.ref("/").update({
        gameState:state
    })
}

start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
}

}

}
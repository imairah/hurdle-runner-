class Player{
constructor(){
this.name = null;
this.rank = null;
this.x = 0;
this.y = 0;
this.distance = 0;
this.index = 0;
}
 
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
    playerCount = data.val();
    })

}

updateCount(count){
    database.ref('/').update({
        playerCount: count
    })
}

updateName(name){
    var playerIndex = "player"+ playerCount;
    database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance
    })
}








}
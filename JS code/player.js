class Player {

    constructor() {
      this.name     = "";
      this.distance =  0;
      this.index    =  0;
      this.rank     =  0;
    }

    getCount() {
        var playerCountRef = Datab.ref("playercount"); 
        playerCountRef.on("value", function(data) {
            playerCount = data.val(); 
      })
    } 

    getRank(){
    var ranked = Datab.ref("playerReached");
    ranked.on("value",function(data){
        rank = data.val();
      })
    }

    updateCount(count) { 
        Datab.ref("/").update({ 
            "playercount" : count
        })
    }
    
    updateRank(rank){
     Datab.ref("/").update({
        //  "playerReached" : rank+1
        "playerReached" : rank
    })
    } 

    update() {
        var node = "players/player" + this.index;
        Datab.ref(node).set({
            "Name" : this.name ,
            "Distance" : this.distance 
        });
    }
    static getPlayerInfo(){
      Datab.ref("players").on("value",function(data)
      {
       allPlayers = data.val();
      }
      )
    }
}
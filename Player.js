class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;


  }

  //This function refers back to the database and keeps on checking for values
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //This does pretty much the same thing as above
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //This also does the same thing as above
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //Static means that this function can only be executed in this class, not anywhere else.
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getRank() {

    var distanceInfo = database.ref('CarFinished').on("value", (data)=> {

      this.rank = data.val();

    })
  }

  static updateRank(rank) {

    database.ref('/').update({

      CarFinished: rank

    });

  }

  
}

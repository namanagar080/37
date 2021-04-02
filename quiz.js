class Quiz{
    constructor(){}

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
}

updateState(state){
    database.ref("/").update({
        gameState:state
    })
    }

    async start(){
        if(gameState===0){
           var contestant=new Contestant();
            var contestantCountRef=await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
           var question=new Question();
            question.display();
        }
    }
}
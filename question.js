class Question{
    constructor(){
        this.input=createInput("Name please");
        this.greeting=createElement("h2");
        this.button=createButton("submit");
    }
    
    display(){
        var title=createElement("h2");
        title.html("MyQuiz Game");
        title.position(350,0);
        this.question=createElement("h2");
        this.question.html("Question-What starts and ends with letter E but only has one letter?");
        
        this.question.position(150,80);
        this.option1=createElement("h2");
        this.option1.html("1:Everyone");
        this.option1.position(150,130);
        this.option2=createElement("h2");
        this.option2.html("2:Envolope");
        this.option2.position(150,150);

        this.input.position(150,20);
        this.button.position(250,300);

      
    }



    hide(){
        this.input.hide();
        this.greeting.hide();
    }
}
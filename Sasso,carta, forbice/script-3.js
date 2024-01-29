let user1 = prompt(" USER1:write your choice(paper, rock or scissor ");
let user2 = prompt( " USER2:write your choice(paper, rock or scissor ")
let rock = "rock";
let scissor = "scissor";
let paper = "paper";




if( user1 == scissor && user2 == paper || user2 == scissor && user1 == paper ){
              document.getElementById("result").innerHTML = "Scissor Win";
            }else if(user1 == rock && user2 == scissor || user2 == rock && user1 == scissor ){
                document.getElementById("result").innerHTML = "Rock Win";
            }else if( user1 == rock && user2 == paper || user2 == rock && user1 == paper ){
                document.getElementById("result").innerHTML = "Paper Win";
            }
            else if(user1 === user2){document.getElementById("result").innerHTML = "Equality";

            }
            else if(user1 || user2 != rock || scissor || paper){
                document.getElementById("result").innerHTML =  alert("ERROR: You made a syntax error in your choice");
            } 
            else{ document.getElementById("result").innerHTML = "Null";}



console.log(user1);
console.log(user2);
   



   

   



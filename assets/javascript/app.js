
//60 second countdown display
window.onload = function(){
    
    $("#start").on("click",start);
}

var intervalID;

var clockRunning = false;
var time = 0;

$("#display").text("00:00");

function start() {
    if (!clockRunning){
        intervalID = setInterval(count, 1000);
        clockRunning = true;
    }
}

function count(){
    time++;

    var converted = timeConverter(time);
    
    var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;

// start function for right answers.

$(document).ready(function () {


    //question/answer array set up
    questions = [
        {
            question: "What is Spider-Man's real name?",
            wrongAnswer: "Peter Pepper?",
            rightAnswer: "Peter Parker",
            wrongAnswer: "Peter Pan",
            wrongAnswer: "Pepé Le'Parkour",
            
        },
        {
            question: "Thor is also known as the 'God of Thunder'. What other name is he known as?",
            wrongAnswer: "M.C. Hammer",
            wrongAnswer: "Zeus",
            wrongAnswer: "Beowulf",
            rightAnswer: "Odinson",
            
        },
        {
            question: "In 'Gardians of the Galaxy;, what is the character Groot known for saying",
            rightAnswer: "I am Groot",
            wrongAnswer: "I love boots",
            wrongAnswer: "What you talkin' 'bout Willis",
            wrongAnswer: "Hodor",
    
        },
        {
            question: "X-Men member Storm has great power over the weather, but what is her greatest weakness",
            wrongAnswer: "Fear of Snakes",
            rightAnswer: "Claustrophobia",
            wrongAnswer: "Professor X's breath",
            wrongAnswer: "Fear of non-mutants",
            
        },
        {
            question: "Wolverine's bones and claws are made of what type of indistructable metal?",
            rightAnswer: "Adamantium",
            wrongAnswer: "Vibranium",
            wrongAnswer: "Platinum",
            wrongAnswer: "Tungston",
            
        },
        {
            question: "Dr. Jekyll is to Mr. Hyde, as Bruce Banner is to _______?",
            wrongAnswer: "The Smash",
            rightAnswer: "The Hulk",
            wrongAnswer: "The Thing",
            wrongAnswer: "El Hombre Fuerte y Verde",
            
        },
        {
            question: "T'Challa is the king of Wakanda and is thus knowns as...",
            rightAnswer: "The Black Panther",
            wrongAnswer: "The Pink Panther",
            wrongAnswer: "Black Ranger",
            wrongAnswer: "Little Red Riding Hood",
            
        },
        {
            question: "The X-Men's main arch-enemy is known as who",
            wrongAnswer: "Megatron",
            wrongAnswer: "Frieza",
            wrongAnswer: "The Jester",
            rightAnswer: "Magneto",
            
        },
        {
            question: "Frank Castle is a vigilante crime figher known as The '_______'",
            wrongAnswer: "Publisher",
            wrongAnswer: "Deliverer",
            rightAnswer: "Punisher",
            wrongAnswer: "Exonerater",
            
        },
        {
            question: "Thanos, the scurge of the universe, seeks 5 stones known as the ______ Stones.",
            rightAnswer: "Inifinity",
            wrongAnswer: "Multiple",
            wrongAnswer: "Precious",
            wrongAnswer: "Sparkly",
            
        },
        {
            question: "After voluntarily being experimented on by the U.S. Army, Steve Rogers transformed to who?",
            wrongAnswer: "Captain Planet",
            wrongAnswer: "Captain Kangaroo",
            rightAnswer: "Captain America",
            wrongAnswer: "Colonal Sanders",
            
        },
        {
            question: "The super hero vampire fighting Blade, is half human and half ______.",
            wrongAnswer: "Lycan",
            wrongAnswer: "Fairy",
            rightAnswer: "Vampire",
            wrongAnswer: "Elf",
            
        },
        {
            question: "The hero known as Rocket is what kind of earth animal?",
            rightAnswer: "Racoon",
            wrongAnswer: "Opossum",
            wrongAnswer: "Rabbit",
            wrongAnswer: "Rhino",
            
        },
        {
            question: "Tony Stark proundly annouced that he is which super hero?",
            wrongAnswer: "Slim Shady",
            wrongAnswer: "Iron Giant",
            rightAnswer: "Iron Man",
            wrongAnswer: "Tin Man",
            
        },
        {
            question: "Peter Quill is an intergalactic outlaw. His cloest friends calls him 'Quill', but he'd prefer you call him 'Star_____'.",
            wrongAnswer: "Trek",
            rightAnswer: "Lord",
            wrongAnswer: "Gate",
            wrongAnswer: "Light",
            
        }
    ]   
}
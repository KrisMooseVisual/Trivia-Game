$(document).ready(function () {


    //question/answer array set up
    questions = [
        {
            question1: "What is Spider-Man's real name?",
            answer1: "Peter Pepper?",
            answer2: "Peter Parker",
            answer3: "Peter Pan",
            answer4: "Pepé Le'Parkour",
            rightAnswer: "Peter Parker"
        },


        {
            question2: "Thor is also known as the 'God of Thunder'. What other name is he known as?",
            answer1: "M.C. Hammer",
            answer2: "Zeus",
            answer3: "Beowulf",
            answer4: "Odinson",
            rightAnswer: "Odinson"
        },
        {
            question3: "In 'Gardians of the Galaxy;, what is the character Groot known for saying",
            answer1: "I am Groot",
            answer2: "I love boots",
            answer3: "What you talkin' 'bout Willis",
            answer4: "Hodor",
            rightAnswer: "I am Groot"
        },
        {
            question4: "X-Men member Storm has great power over the weather, but what is her greatest weakness",
            answer1: "Fear of Snakes",
            answer2: "Claustrophobia",
            answer3: "Professor X's breath",
            answer4: "Fear of non-mutants",
            rightAnswer: "Claustrophobia"
        },
        {
            question5: "Wolverine's bones and claws are made of what type of indistructable metal?",
            answer1: "Adamantium",
            answer2: "Vibranium",
            answer3: "Platinum",
            answer4: "Tungston",
            rightAnswer: "Adamantium"
        },
        {
            question6: "Dr. Jekyll is to Mr. Hyde, as Bruce Banner is to _______?",
            answer1: "The Smash",
            answer2: "The Hulk",
            answer3: "The Thing",
            answer4: "El Hombre Fuerte y Verde",
            rightAnswer: "The Hulk"
        },
        {
            question7: "T'Challa is the king of Wakanda and is thus knowns as...",
            answer1: "The Black Panther",
            answer2: "The Pink Panther",
            answer3: "Black Ranger",
            answer4: "Little Red Riding Hood",
            rightAnswer: "The Black Panther"
        },
        {
            question8: "The X-Men's main arch-enemy is known as who",
            answer1: "Megatron",
            answer2: "Frieza",
            answer3: "The Jester",
            answer4: "Magneto",
            rightAnswer: "Magneto"
        },
        {
            question9: "Frank Castle is a vigilante crime figher known as The '_______'",
            answer1: "Publisher",
            answer2: "Deliverer",
            answer3: "Punisher",
            answer4: "Exonerater",
            rightAnswer: "Punisher"
        },
        {
            question10: "Thanos, the scurge of the universe, seeks 5 stones known as the ______ Stones.",
            answer1: "Inifinity",
            answer2: "Multiple",
            answer3: "Precious",
            answer4: "Sparkly",
            rightAnswer: "Inifinity"
        },
        {
            question11: "After voluntarily being experimented on by the U.S. Army, Steve Rogers transformed to who?",
            answer1: "Captain Planet",
            answer2: "Captain Kangaroo",
            answer3: "Captain America",
            answer4: "Colonal Sanders",
            rightAnswer: "Captain America"
        },
        {
            question12: "The super hero vampire fighting Blade, is half human and half ______.",
            answer1: "Lycan",
            answer2: "Fairy",
            answer3: "Vampire",
            answer4: "Elf",
            rightAnswer: "Vampire"
        },
        {
            question13: "The hero known as Rocket is what kind of earth animal?",
            answer1: "Racoon",
            answer2: "Opossum",
            answer3: "Rabbit",
            answer4: "Rhino",
            rightAnswer: "Racoon"
        },
        {
            question14: "Tony Stark proundly annouced that he is which super hero?",
            answer1: "Slim Shady",
            answer2: "Iron Giant",
            answer3: "Iron Man",
            answer4: "Tin Man",
            rightAnswer: "Iron Man"
        },
        {
            question15: "Peter Quill is an intergalactic outlaw. His cloest friends calls him 'Quill', but he'd prefer you call him 'Star_____'.",
            answer1: "Trek",
            answer2: "Lord",
            answer3: "Gate",
            answer4: "Light",
            rightAnswer: "Lord"
        }
    ]

    var count = 60, timer = setInterval(function () {
        $("#counter").html(count--);
        if (count == 1) clearInterval(timer);
    }, 1000);

    $(".btn").on("click", function () {
        var userChoice = $(this).text();
        console.log(userChoice);
        if (userChoice === questions[questionIndex].correct) {
            correct++;
        }

        var time = 90;

        var rightAnswer;
        var wrongAnswer;
        var intervalId

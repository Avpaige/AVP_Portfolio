$(document).ready(function () {

    $("#projects").hide();
    //Projects Array and Function to Generate Buttons
    var projects = [
        {
            name: "bWoke",
            git: "https://github.com/Avpaige/bWoke",
            live: "https://avpaige.github.io/bWoke/",
            img: "./assets/images/bwoke2.PNG",
            project: "bWoke is a coalition of web developers at the intersection of entertainment and philanthorpy. Utilzing the Google Location, Spotify and Charity Navigator APIs to connect users with charities in a energizing and immersive experince.",

        },
        {
            name: "Rapper$ Delight",
            git: "https://github.com/Avpaige/RapperDelight",
            live: "https://avpaige.github.io/RapperDelight/",
            img: "./assets/images/rapper.PNG",
            project: "Leveraging the Giphy API, find gifs based on your favorite rappers or other search terms and dynamically populate the page as well get rating information.",

        },
        {
            name: "Order Rush",
            git: "https://github.com/Avpaige/unit-4-game",
            live: "https://avpaige.github.io/unit-4-game/",
            img: "./assets/images/order.PNG",
            project: "Generating a random order and menu price total using JQuery this game allows the use to test their math skills based on based arthmetic and randomization.",

        },
        {
            name: "Ocean's Guess",
            git: "https://github.com/Avpaige/ClickyGame",
            live: "https://oceansguess.netlify.com/",
            img: "https://oceansguess.netlify.com/",
            project: "Test your memory and your heist planning skills!",

        },
        {
            name: "Beat Miss Cleo",
            git: "https://github.com/Avpaige/Psychic-Game",
            live: "https://avpaige.github.io/Psychic-Game/",
            img: "./assets/images/cleo.PNG",
            project: "Test your sixth sense by seeing if you can beat Miss Cleo in this vanilla Javascript based game that uses randomization.",

        },
        {
            name: "Train Scheduler",
            git: "https://github.com/Avpaige/TrainTime",
            live: "https://avpaige.github.io/TrainTime/",
            img: "./assets/images/train.PNG",
            project: "Never be late again with this train scheduler that leverages moment.js and jQuery to calculate a variety of times.",
        },
        {
            name: "Movie Trivia",
            git: "https://github.com/Avpaige/TriviaGame",
            live: "https://avpaige.github.io/TriviaGame/",
            img: "./assets/images/trivia.PNG",
            project: "Test your movie knowledege with this jQuery powered game with time events to keep you on the clock.",
        },
        {
            name: "LIRI",
            git: "https://github.com/Avpaige/LIRI",
            live: "https://github.com/Avpaige/LIRI/tree/master/demo",
            img: "./assets/images/liri.PNG",
            project: "A node based application LIRI bot that allows you to quickly search a variety of entertainment databases to find something to quickly listen to (Spotify API), Movie to watch (oMDB API) or upcoming concerts to attend (Bands in Town API)",
        },
        {
            name: "Burger Time",
            git: "https://github.com/Avpaige/burger",
            live: "https://aqueous-castle-37387.herokuapp.com/",
            img: "./assets/images/burger.PNG",
            project: "A burger menu that utilizes MySQL, Node, Express, Handlebars and ORM. Deployed on Heroku and organized in the MVC model.",
        },
        {
            name: "MOODvie",
            git: "https://github.com/Avpaige/MOODvie",
            live: "https://cryptic-taiga-37501.herokuapp.com/",
            img: "./assets/images/moodvie.PNG",
            project: "MOODvie is a platform that allows you browse films based on unique genres AND find where they're currently available regardless of streaming platform.",
        },

    ]



    function getProjects() {

        for (var i = 0; i < projects.length; i++) {
            var newBtn = $("<button>");
            newBtn.addClass("btn btn-outline-primary");

            newBtn.attr("data-name", projects[i].name);
            newBtn.text(projects[i].name);
            newBtn.attr("img-src", projects[i].img);
            newBtn.attr("live-link", projects[i].live);
            newBtn.attr("git-link", projects[i].git);
            newBtn.attr("description", projects[i].project);
            $("#prodBtn").append(newBtn);
        }
    }

    getProjects();

    //Function to display projects on clik
    $(".btn").on("click", function () {
        event.preventDefault();
        $("#projImg").empty();
        $("#projects").show();
        $(".intro").hide();
        var liveLink = $(this).attr("live-link");
        var img = $(this).attr("img-src");
        var gitLink = $(this).attr("git-link");
        var descript = $(this).attr("description");
        var name = $(this).attr("data-name");
        var newImg = $("<img>")
        newImg.attr("src", img).addClass("newIMG")

        $("#projName").text(name);
        $("#descript").text(descript);
        $("#git").attr("data-link", gitLink);
        $("#projImg").append(newImg);
        $("#live").attr("data-link", liveLink);

    });


    $("#live").click(function () {
        event.preventDefault();
        var link = $(this).attr("data-link");
        window.location.href = link;
        console.log(link);
    });

    $("#git").click(function () {
        event.preventDefault();
        var link = $(this).attr("data-link");
        window.location.href = link;
        console.log(link);
    });

});

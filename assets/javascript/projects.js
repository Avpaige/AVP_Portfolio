$(document).ready(function(){

    
//Projects Array and Function to Generate Buttons
var projects = [
{   name: "bWoke",
    git: "https://github.com/Kalamath/bWoke",
    live: "https://kalamath.github.io/bWoke/",
    img: "./images/bwoke.jpg",
    project: "bWoke is a coalition of wed developers at the intersection of entertainment and philanthorpy. Utilzing the Google Location, Spotify and Charity Navigator APIs to connect users with searched charities in a energizing and immersive experince.",

},
{
    name: "Rapper$ Delight",
    git: "https://github.com/Avpaige/RapperDelight",
    live: "https://avpaige.github.io/RapperDelight/",
    img: "./images/rapper.png",
    project: "Leveraging the Giphy API, find gifs based on your favorite rappers or other search terms and dynamically populate the page as well get rating information.",

},
{
    name: "Order Rush",
    git: "https://github.com/Avpaige/unit-4-game",
    live: "https://avpaige.github.io/unit-4-game/",
    img: "./images/bwoke.jpg",
    project: "Generating a random order and menu price total using JQuery this game allows the use to test their math skills based on based arthmetic and randomization.",

},
{
    name: "Beat Miss Cleo",
    git: "https://github.com/Avpaige/Psychic-Game",
    live: "https://avpaige.github.io/Psychic-Game/",
    img: "./images/bwoke.jpg",
    project: "Test your sixth sense by seeing if you can beat Miss Cleo in this vanilla Javascript based game that uses randomization.",

},
{
    name: "Train Scheduler",
    git: "https://github.com/Avpaige/TrainTime",
    live: "https://avpaige.github.io/TrainTime/",
    img: "./images/bwoke.jpg",
    project: "Never be late again with this train scheduler that leverages moment.js and jQuery to calculate a variety of times.",
},
{
    name: "Movie Trivia",
    git: "https://github.com/Avpaige/TriviaGame",
    live: "https://avpaige.github.io/TriviaGame/",
    img: "./images/bwoke.jpg",
    project: "Test your movie knowledege with this jQuery powered game with time events to keep you on the clock.",
},

]



function getProjects (){   

 for (var i=0; i<projects.length; i++){
    var newBtn = $("<button>");
    newBtn.addClass("btn btn-outline-primary");

    newBtn.attr("data-name", projects[i].name);
    newBtn.text(projects[i].name);
    newBtn.attr("img-src", projects[i].img);
    newBtn.attr("live-link", projects[i].live);
    newBtn.attr("git-link", projects[i].git);
    newBtn.attr("description",projects[i].project);
    $("#prodBtn").append(newBtn);
     }
}

getProjects();

//Function to display projects on clik
$(".btn").on("click", function (response){
    event.preventDefault();
    console.log(this)
    // console.log (response)
    var liveLink = $(this).attr("live-link");
    var img = $(this).attr("img-src");
    var gitLink =  $(this).attr("git-link");
    var descript = $(this).attr("description");
    var name = $(this).attr("data-name");
    var glink = $("<a>");
    glink.attr("href", gitLink);
    var lnk = $("<a>");
    lnk.attr("href", liveLink);

    $("#projName").text(name);
    $("#descript").text(descript);
    $("#gitHub").append(glink);
    $("#projImg").append(img);
    $("#liveLink").append(lnk);

});

});
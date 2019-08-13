$(document).ready(function(){

$(".contact").hide();

$("#email").click(function(){
    $(".contact").show();
  });

$("#phone").click(function(){
    $(".contact").show();
});

  $("#gitImg").click(function(){
    event.preventDefault();
    window.location.href="https://github.com/Avpaige?tab=repositories";
    console.log(link);
  });

  $("#inImg").click(function(){
    event.preventDefault();
    window.location.href="https://www.linkedin.com/in/arivirgilpaige/";
    console.log(link);
  });

  $("#resume").click(function(){
    event.preventDefault();
    window.location.href="https://drive.google.com/file/d/19KdVVlet6__fpfUSMuWJ8x0_4qPDMzv4/view?usp=sharing";
    console.log(link);
  });

  
});    

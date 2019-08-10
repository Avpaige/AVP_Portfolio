  $(document).ready(function(){

 var titles = ["Project Manager", "Web Developer",  "Operations & Logistics Expertise", "Problem Solver"]
 
 setTimeout(twoSeconds, 1000 * 5);
 function twoSeconds() {
 }


 $(document).ready(function(){
 for (var i =0 ; i< titles.length; i++){
        twoSeconds( $(".titles").empty().text(i)) 
 
    }
 });















});    

//add jQuery in script tags to change CSS or page behavior based on end user actions -->
// Button inputs and background colors
 /* $(document).ready(function(){
    $(":input").css("background-color", "limegreen");
});
*/
//Function when end user clicks content in paragraph tags, then content disappears
/*$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});*/

// Change heading:
/* document.getElementById("myH").innerHTML = "Gig Harbor, Washingon, U.S.A.";
// Change paragraph:
 document.getElementById("myP").innerHTML = "One of my absolute favorite places to visit.  I enjoy having lunch at the Tide's Tavern, relaxing at Jax Salon & Spa, drinking coffee and painting pottery at Java & Clay Cafe, and buying treats at The Harbor General Store!";   
  */
//To change paragraph string when user clicks button
/*function myFunction() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("Gig Harbor", "Jax Salon & Spa");
  document.getElementById("demo").innerHTML = res;
}*/


//To change the image SRC:
function myFunction() {
  var value =$(this).val();
}
$(document).ready(function(){
switch (expr) {
  case 'Java':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Jax':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Tides':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Harbor':
    console.log('Cherries are $3.00 a pound.');
    break;
  default:
    console.log('Sorry, Gig Harbor is closed.');
}
   event.preventDefault();
console.log("Is there anything else you'd like?");

//to read input of radio button
$('input').on('click', myFunction());
  
//Tried to use attr   
/*  $("myImage").on({
    'click': function()
  $("#myImage")
 .attr('src','http://staticmap.openstreetmap.de/staticmap.php?size=1000x800&center=47.32959,-122.58059&zoom=19&markers=47.32959,-122.58059,ol-marker-gold&maptype=mapnik');
}
    event.preventDefault();
});*/

//Jax Salon:  http://www.openstreetmap.org/search?query=Jax%20Salon%20%26%20Spa#map=19/47.32959/-122.58059
//Tides Tavern: http://www.openstreetmap.org/search?query=Tides%20Tavern#map=19/47.32925/-122.57836
//The Harbor General Store: http://www.openstreetmap.org/search?query=The%20Harbor%20General%20Store#map=19/47.32917/-122.58171
//Java & Clay Cafe: http://www.openstreetmap.org/search?query=Java%20%26%20Clay%20Cafe#map=19/47.33017/-122.58196
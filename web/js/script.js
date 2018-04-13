menu.onclick = function(){
	var x = document.getElementById("myTopnav");
	if (x.className==="topnav") {
		x.className+=" responsive";
	} else {
		x.className="topnav";
	}
}


document.querySelector(".prev").addEventListener("click", moveLeft);
document.querySelector(".next").addEventListener("click", moveRight);
var list = document.querySelector(".slider ul");
var length = list.children.length,
	current = 0;
function moveLeft(){
	if(current>0){
		list.style.marginLeft = -640 * --current + "px";
		return current;
	} else if(current == 0){
		current = length;
		list.style.marginLeft = -640 * --current + "px";
	}
}
function moveRight(){
	if(current < length-1){
		list.style.marginLeft = -640 * ++current + "px";
		return current;
	} else if(current == length-1){
		current = -1 ;
		list.style.marginLeft = -640 * ++current + "px";
	}
}




function initMap() {
        var uluru = {lat: 48.390210, lng: 35.038011};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
  
    // async defer
    // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDaB5WlrT93E88is0RpUMo8b4RLiP-CNOQ&callback=initMap">
    // 
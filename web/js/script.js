menu.onclick = function(){
	var x = document.getElementById("myTopnav");
	if (x.className==="topnav") {
		x.className+=" responsive";
	} else {
		x.className="topnav";
	}
}




var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
	showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active";
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
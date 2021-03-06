//----------------Booking Modal----------------------------
// Get the modal
var modal = document.getElementById("b-modal");

// Get the buttons that opens the modal
var btn = document.getElementsByClassName("price-tag");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// Get the book button of modal
var book = document.getElementById("calcbtn");

// Get the calculated div element
var finAmount = document.getElementById("finamt");

//Get all Names of Tour packages
var names = document.querySelectorAll(".card-img > div > h3");

//Get booking prices of Tour packages
var prices = document.querySelectorAll(".price-tag > span");

// Adding event listeners to all price-tag buttons
btn[0].addEventListener("click", bookingWindow, false);
btn[1].addEventListener("click", bookingWindow, false);
btn[2].addEventListener("click", bookingWindow, false);
btn[3].addEventListener("click", bookingWindow, false);
btn[4].addEventListener("click", bookingWindow, false);
btn[5].addEventListener("click", bookingWindow, false);
btn[6].addEventListener("click", bookingWindow, false);
btn[7].addEventListener("click", bookingWindow, false);

// When the user clicks on the booking button, this function opens the modal with its title
function bookingWindow(event) {
  modal.style.display = "block";
  book.style.display = "block"; //Initiallt displaying book button
  finAmount.style.display = "none"; // Initially hidden pay now button

  const place = document.getElementById("place");
  var bookingPrice;

  switch (event.target){
  	case btn[0]: 
  		place.innerHTML = names[0].innerHTML;
  		bookingPrice = prices[0].innerHTML;
  		break;
  	case btn[1]: 
  		place.innerHTML = names[1].innerHTML;
  		bookingPrice = prices[1].innerHTML;
  		break;
  	case btn[2]: 
  		place.innerHTML = names[2].innerHTML;
  		bookingPrice = prices[2].innerHTML;
  		break;
  	case btn[3]: 
  		place.innerHTML = names[3].innerHTML;
  		bookingPrice = prices[3].innerHTML;
  		break;
  	case btn[4]: 
  		place.innerHTML = names[4].innerHTML;
  		bookingPrice = prices[4].innerHTML;
  		break;
  	case btn[5]: 
  		place.innerHTML = names[5].innerHTML;
  		bookingPrice = prices[5].innerHTML;
  		break;
  	case btn[6]: 
  		place.innerHTML = names[6].innerHTML;
  		bookingPrice = prices[6].innerHTML;
  		break;
  	case btn[7]: 
  		place.innerHTML = names[7].innerHTML;
  		bookingPrice = prices[7].innerHTML;
  		break;
  }

	// final amount calculator
	book.onclick = function() {
		calcbtn.style.display = "none"; // book button gets hidden
		finAmount.style.display = "block";// finla amount and pay now button get displayed

		//....................
		var adults = parseInt(document.getElementById('adults').value);
		var children = parseInt(document.getElementById('children').value);

		var price = parseInt(bookingPrice)*(adults + children/2);
		
		// Displaying final calculated amount
		const finalPrice = document.querySelector("#finamt > div");
		finalPrice.innerHTML = String(price) + ' Rs';
	}
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

	if (event.target == modal) {
	modal.style.display = "none";
	}
}

//----------------Booking Modal end--------------------------
document.addEventListener("DOMContentLoaded", updateQuantities());

function updateQuantities() {	
	let cartItemDetails = document.getElementsByClassName("cart-item__details");
	let cartFooter = document.getElementsByClassName("cart-drawer__footer")[0];

	let totalItemsCounter = 0;

	for (let item of cartItemDetails) {
		let quantity = item.parentNode.getElementsByClassName("cart-item__quantity ")[0].querySelectorAll("[data-cart-quantity]")[0].value;
		let divElement = document.createElement("p");
		
		totalItemsCounter += parseInt(quantity);
		
		divElement.textContent = "Quantity: " + quantity;
		item.appendChild(divElement);	
	};
	
    updateTotals(totalItemsCounter, cartItemDetails);
}

function updateTotals(totalItemsCounter, cartItemDetails) {
	let cartFooter = document.getElementsByClassName("cart-drawer__footer")[0];
	
	let headerContainer = document.createElement("div");
	let totalItemsElement = document.createElement("p");
	let uniqueItemsElement = document.createElement("p");

	totalItemsElement.textContent = "Total Quantity: "  + totalItemsCounter;
	uniqueItemsElement.textContent = "Unique items: "  + cartItemDetails.length;

	headerContainer.appendChild(totalItemsElement);	
	headerContainer.appendChild(uniqueItemsElement);	

	cartFooter.appendChild(headerContainer);	
}

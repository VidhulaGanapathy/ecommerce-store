// 1. Ask for confirmation before removing an item from the cart
const deleteLinks = document.querySelectorAll('.confirm-delete');   // find all links with class "confirm-delete"
deleteLinks.forEach(function (link) {                               // loop through each link
  link.addEventListener('click', function (event) {                 // when it's clicked...
    if (!confirm('Remove this item from cart?')) {                  // show a popup; if the user clicks Cancel...
      event.preventDefault();                                       // ...stop the link from opening
    }
  });
});

// 2. Make sure the address is not empty before placing an order
const form = document.getElementById('checkout-form');              // find the checkout form (null on other pages)
if (form) {                                                         // only run if the form exists on this page
  form.addEventListener('submit', function (event) {                // when the form is submitted...
    const address = document.getElementById('address').value.trim();// get the typed address, remove extra spaces
    if (address === '') {                                           // if it's empty...
      alert('Please enter your delivery address');                  // warn the user
      event.preventDefault();                                       // stop the form from being sent
    }
  });
}
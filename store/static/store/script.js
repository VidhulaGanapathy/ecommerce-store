// 1. Ask for confirmation before removing an item from the cart
const deleteLinks = document.querySelectorAll('.confirm-delete');
deleteLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    if (!confirm('Remove this item from cart?')) {
      event.preventDefault();
    }
  });
});

// 2. Make sure the address is not empty before placing an order
const form = document.getElementById('checkout-form');
if (form) {
  form.addEventListener('submit', function (event) {
    const address = document.getElementById('address').value.trim();
    if (address === '') {
      alert('Please enter your delivery address');
      event.preventDefault();
    }
  });
}

// 3. Live search: hide product cards that don't match what the user types
const searchBox = document.getElementById('search-box');
if (searchBox) {                                                // only runs on the shop page
  const cards = document.querySelectorAll('.card');             // every product card
  const noResults = document.getElementById('no-results');      // the hidden "no match" message

  searchBox.addEventListener('input', function () {             // runs on every key the user types
    const text = searchBox.value.toLowerCase().trim();          // typed text, lowercase, no extra spaces
    let visible = 0;                                            // counts the cards still showing

    cards.forEach(function (card) {
      const matches = card.dataset.name.includes(text);         // does the card's name contain the text?
      card.style.display = matches ? '' : 'none';               // show it if yes, hide it if no
      if (matches) {
        visible++;                                              // count it
      }
    });

    noResults.style.display = visible === 0 ? 'block' : 'none'; // show the message only if nothing matched
  });
}
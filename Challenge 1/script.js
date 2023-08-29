// Update book 1
const book1Status = document.querySelector('#book1 .status');
const book1Reserve = document.querySelector('#book1 .reserve');
const book1Checkout = document.querySelector('#book1 .checkout');
const book1Checkin = document.querySelector('#book1 .checkin');

book1Status.style.color = STATUS_MAP[book1Status.textContent.trim()].color;
book1Reserve.disabled = !STATUS_MAP[book1Status.textContent.trim()].canReserve;
book1Checkout.disabled = !STATUS_MAP[book1Status.textContent.trim()].canCheckout;
book1Checkin.disabled = !STATUS_MAP[book1Status.textContent.trim()].canCheckIn;

book1Reserve.style.color = 'black';
book1Checkout.style.color = 'black';
book1Checkin.style.color = 'black';

// Update book 2
const book2Status = document.querySelector('#book2 .status');
const book2Reserve = document.querySelector('#book2 .reserve');
const book2Checkout = document.querySelector('#book2 .checkout');
const book2Checkin = document.querySelector('#book2 .checkin');

book2Status.style.color = STATUS_MAP[book2Status.textContent.trim()].color;
book2Reserve.disabled = !STATUS_MAP[book2Status.textContent.trim()].canReserve;
book2Checkout.disabled = !STATUS_MAP[book2Status.textContent.trim()].canCheckout;
book2Checkin.disabled = !STATUS_MAP[book2Status.textContent.trim()].canCheckIn;

book2Reserve.style.color = 'black';
book2Checkout.style.color = 'black';
book2Checkin.style.color = 'black';

// Update book 3
const book3Status = document.querySelector('#book3 .status');
const book3Reserve = document.querySelector('#book3 .reserve');
const book3Checkout = document.querySelector('#book3 .checkout');
const book3Checkin = document.querySelector('#book3 .checkin');

book3Status.style.color = STATUS_MAP[book3Status.textContent.trim()].color;
book3Reserve.disabled = !STATUS_MAP[book3Status.textContent.trim()].canReserve;
book3Checkout.disabled = !STATUS_MAP[book3Status.textContent.trim()].canCheckout;
book3Checkin.disabled = !STATUS_MAP[book3Status.textContent.trim()].canCheckIn;

book3Reserve.style.color = 'black';
book3Checkout.style.color = 'black';
book3Checkin.style.color = 'black';
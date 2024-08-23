const prices = document.querySelectorAll('.price');
const totalPriceElement = document.getElementById('total-price');
const applyDiscountButton = document.getElementById('apply-discount');

let total = 0;
let discountApplied = false;

function calculateTotal() {
    total = 0;
    prices.forEach(priceElement => {
        total += +priceElement.innerHTML;
    });
    totalPriceElement.innerHTML = total;
}

function applyDiscount() {
    if (!discountApplied) {
        total = total * 0.8;
        totalPriceElement.innerHTML = total.toFixed(2);
        discountApplied = true;
    }
}

calculateTotal();

applyDiscountButton.addEventListener('click', applyDiscount);

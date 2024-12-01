// Import Data
import {cart, totalQuantity} from "../data/Cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from "../data/deliveryOption.js";

if(cart == ''){
  document.querySelector('.check-out-js').innerHTML = `<div class="check-out-none"><p>No Product Has Been Added</p></div>`
}

// Generate HTML
let checkOut = '';
cart.forEach((product) =>{
    const productId = product.productId;
    let matchingProduct;

    products.forEach((stock) => {
        if(stock.id === productId){
            matchingProduct = stock;
        }
    });

    const deliveryOptionId = product.deliveryOptionId;

    let deliveryOption;

    deliveryOptions.forEach(option =>{
      if(option.id === deliveryOptionId){
        deliveryOption = option;
      }
    });
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDate, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    checkOut += `<div class="cart-item-container" id="${product.productId}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents * product.quantity)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${product.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary delete-ithem-js" id="${product.productId}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                
                ${deliveryOptionHTML(matchingProduct, product)}
                </div>
              </div>
            </div>
          </div>`;
          totalPrice();
          totalAmount();
});

document.querySelector('.order-summary-js').innerHTML = checkOut;



function deliveryOptionHTML(matchingProduct, product){
  let html = '';
  deliveryOptions.forEach( deliveryOption =>{
    // External library
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDate, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    const priceString = deliveryOption.priceCents === 0
      ?
      'FREE'
      :
       `$${formatCurrency(deliveryOption.priceCents)} -`;
    const isChecked = deliveryOption.id === product.deliveryOptionId;

  html += `   
            <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}" ${isChecked? 'checked': ''}>
                  <div>
                    <div class="delivery-option-date">
                    ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                  </div>
            </div>`;
  });
  return html;
}



function totalAmount(){
  let quantity = 0;
      cart.forEach((ithem) => {
          quantity += ithem.quantity;
      });
  document.querySelector('.product-amount-js').innerText = quantity;
  if(quantity > 1){
    document.querySelector('.return-to-home-link').textContent = `${quantity} ithems`;
  }else{
    document.querySelector('.return-to-home-link').textContent = `${quantity} ithem`;
  }
}

function totalPrice(){
  let price = 0;
      cart.forEach(ithem => {
        products.forEach(product => {
          if(ithem.productId === product.id){
            price += product.priceCents * ithem.quantity;
          };
        });
      });
  document.querySelector('.payment-summary-money-js').innerText = formatCurrency(price);
}

document.querySelectorAll('.delete-ithem-js').forEach(deleteBtn => {deleteBtn.addEventListener('click', ()=>{
  document.querySelectorAll('.cart-item-container').forEach(container =>{
    if(deleteBtn.id === container.id){
      container.remove();
      let final = cart.filter(ithem => ithem.productId != container.id);
      localStorage.setItem('StoreToCart', JSON.stringify(final));
      cart = final;
      console.log(cart);
    }
  })
})
});


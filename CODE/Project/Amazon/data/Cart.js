export let cart = JSON.parse(localStorage.getItem('StoreToCart'));

if(!cart){
    cart = [];
}

export function addToCart(productId){
    let matchingIthem;
        cart.forEach((ithem) => {
            if(ithem.productId === productId){
                matchingIthem = ithem;
            }
        });
        if(matchingIthem){
            matchingIthem.quantity += 1;
        }else{
            cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        localStorage.setItem('StoreToCart', JSON.stringify(cart));
        console.log(cart);
}
export function totalQuantity(){
    let quantity = 0;
        cart.forEach((ithem) => {
            quantity += ithem.quantity;
        });
    document.querySelector('.cart-quantity-js').innerText = quantity;
}
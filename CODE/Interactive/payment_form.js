let serviceCard = document.querySelectorAll('.service-card-checkout');
serviceCard.forEach((card) => {
    card.addEventListener("click", () =>{
        card.classList.toggle("selected-service");
    });
});


let paymentCard = document.querySelectorAll('.payment-card');
let rightPay = document.getElementById("info-right");

paymentCard.forEach((card) =>{
    card.addEventListener("click", () =>{
        card.classList.toggle("selected-method");
    })
})

function contentRightPay(content){
    rightPay.innerHTML = `
    <img src="../../Midea/Service_Cards/${content}.jpg">
    `;
}
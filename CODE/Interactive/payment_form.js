let serviceCard = document.querySelectorAll('.service-card-checkout');
let rightPay = document.getElementById("info-right");
let formPay = document.getElementById('check-out-form');
let cardContainer = document.querySelector('.container-card-service');


serviceCard.forEach((card) => {
    card.addEventListener("click", () =>{
        card.classList.toggle("selected-service");
    });
});

function toggleButton(selector, content) {
    const button = document.querySelector(`.${selector}`);
    if (!button.classList.contains('is-toggled')) {
        // Turn off any previously toggled button
        turnOffPreviousButton();
        // Turn this button ON
        button.classList.add('is-toggled');
    } else {
        // Turn this button OFF
        button.classList.remove('is-toggled');
    }

    if (button.classList.contains('is-toggled')) {
        contentRightPay(content);
    } else {
        contentRightPay('');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}

function contentRightPay(content){
    if(!content){
        rightPay.innerHTML = ' ';
    }else{
        rightPay.innerHTML = `
        <img src="../../Midea/Service_Cards/${content}">
        `;
    }
}

function hideForm(){
    formPay.style.display = 'none';
}
function showForm(){
    formPay.style.display = 'block';
}
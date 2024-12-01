const listing = document.querySelector('.addList');
let box = document.querySelector('.list');

function appendElement(){
    const toDoWhat = listing.value.trim();
    if (toDoWhat) {
        const containerDiv = document.createElement('div');
        const newDiv = document.createElement('div');
        const deleteBtn =  document.createElement('button');
        deleteBtn.innerText = "X";

        containerDiv.append(newDiv);

        newDiv.classList.add('text-in-list');
        newDiv.textContent = toDoWhat;

        containerDiv.append(deleteBtn);
        box.appendChild(containerDiv);

        listing.value = '';

        deleteBtn.addEventListener('click', () => {
            box.removeChild(containerDiv);
        });
    }
}

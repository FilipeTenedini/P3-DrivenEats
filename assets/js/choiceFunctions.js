import { allItems } from "./data/allItems.js";

let cart = [];

document.querySelectorAll('.option').forEach((item, index)=>{
    item.addEventListener('click', ()=>{

        const selectedPrincipal = document.querySelector('.principal .selected');
        const selectedDrink = document.querySelector('.drink .selected');
        const selectedDessert = document.querySelector('.dessert .selected');
        const itemPos = allItems.findIndex((i) => i.id == item.getAttribute('data-key'));
        const type = allItems[itemPos].type;


        if(selectedPrincipal !== null && type === 'principal'){
            selectedPrincipal.classList.remove('selected');
            selectedPrincipal.querySelector('ion-icon').classList.remove('ion-active');

            
        } if (selectedDrink !== null && type === 'drink'){
            selectedDrink.classList.remove('selected');
            selectedDrink.querySelector('ion-icon').classList.remove('ion-active');
        } else if (selectedDessert !== null && type === 'dessert') {
            selectedDessert.classList.remove('selected');
            selectedDessert.querySelector('ion-icon').classList.remove('ion-active');
        }

        item.classList.toggle('selected');
        item.querySelector('ion-icon').classList.add('ion-active');

        if (document.querySelectorAll('.selected').length === 3){
            updateCart();
            changeButton();
        }

    });
})

function changeButton(){
    const button = document.querySelector('.order');
    button.removeAttribute('disabled');
    button.classList.add('active');
    button.innerHTML = 'Fechar pedido';
}


function updateCart(){
    document.querySelectorAll('.selected').forEach((item)=>{

        const itemPos = allItems.findIndex((i) => i.id == item.getAttribute('data-key'));
        const itemTitle = allItems[itemPos].title;
        const itemPrice = allItems[itemPos].price;

        cart.push({
            item: itemTitle,
            price: itemPrice
        });
    });
    // console.log(cart)
}

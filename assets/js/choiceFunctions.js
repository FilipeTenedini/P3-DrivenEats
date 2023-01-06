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
            selectedPrincipal.querySelector('ion-icon').style.display='none';
        } else if (selectedDrink !== null && type === 'drink'){
            selectedDrink.classList.remove('selected');
            selectedDrink.querySelector('ion-icon').style.display='none';
        } else if (selectedDessert !== null && type === 'dessert') {
            selectedDessert.classList.remove('selected');
            selectedDessert.querySelector('ion-icon').style.display='none';
        }

        item.classList.toggle('selected');
        item.querySelector('ion-icon').style.display='block';

        if (document.querySelectorAll('.selected').length === 3){
            updateCart();
        }
    })
})

function updateCart(){
    document.querySelectorAll('.selected').forEach((item)=>{

        const itemPos = allItems.findIndex((i) => i.id == item.getAttribute('data-key'));
        const itemTitle = allItems[itemPos].title
        const itemPrice = allItems[itemPos].price

        cart.push({
            item: itemTitle,
            price: itemPrice
        });
    });
    console.log(cart)
}

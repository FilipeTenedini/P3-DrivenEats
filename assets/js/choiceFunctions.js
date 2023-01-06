import { allItems } from "./data/allItems.js";

let cart = {
    items: [],
    prices:[]
};
let types = [];


document.querySelectorAll('.option').forEach((item)=>{
    item.addEventListener('click', ()=>{

        const itemPos = allItems.findIndex((i) => i.id == item.getAttribute('data-key'));
        const type = allItems[itemPos].type;

        if (types.includes(type)){
            const selectedItem = document.querySelector(`.${type} .selected`);
            
            selectedItem.classList.remove('selected');
            selectedItem.querySelector('ion-icon').classList.remove('ion-active');
        } else {
            types.push(type)
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

        cart.items.push(itemTitle);
        cart.prices.push(itemPrice);
    });
}

import { allItems } from './allItems.js';

allItems.forEach((item, index)=>{
    const foodItem = document.querySelector('.models .option').cloneNode(true);
    
    foodItem.querySelector('.option-img img').src = item.foto;
    foodItem.querySelector('.option-title').innerHTML = item.title;
    foodItem.querySelector('.option-desc p').innerHTML = item.desc;
    foodItem.querySelector('.option-price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    foodItem.setAttribute('data-key', item.id);

    document.querySelector(`.${item.type} .options`).append(foodItem);    
});

export {};
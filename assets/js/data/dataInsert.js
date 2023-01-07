import { allItems } from './allItems.js';

allItems.forEach((item)=>{
    const foodItem = document.querySelector('.models .option').cloneNode(true);
    
    foodItem.querySelector('.option-img img').src = item.foto;
    foodItem.querySelector('.option-title').innerHTML = item.title;
    foodItem.querySelector('.option-desc p').innerHTML = item.desc;
    foodItem.querySelector('.option-price').innerHTML = `R$ ${item.price.toFixed(2).replace('.', ',')}`;
    foodItem.setAttribute('data-key', item.id);
    document.querySelector(`.${item.type} .options`).append(foodItem);    

    // data-test
    foodItem.setAttribute('data-test', item.type);
    foodItem.querySelector('.option-title').setAttribute('data-test', "item-name");
    foodItem.querySelector('.option-price').setAttribute('data-test', "item-price");
});

export {};
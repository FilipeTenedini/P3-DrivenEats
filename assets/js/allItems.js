allItems = [
    {id: 1, type: 'principal', foto: 'assets/images/frango.png', title: 'frangot' , desc: 'frangodesc', price: 18.50},
    {id: 2, type: 'principal', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 19.29},
    {id: 3, type: 'principal', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 30.40},
    {id: 4, type: 'principal', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 15.20},
    {id: 5, type: 'principal', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 42.55},
    {id: 6, type: 'drink', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 7.90},
    {id: 7, type: 'drink', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 4.50},
    {id: 8, type: 'drink', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 3.80},
    {id: 9, type: 'drink', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 2.50},
    {id: 10, type: 'drink', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 3.10},
    {id: 11, type: 'dessert', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 27.00},
    {id: 12, type: 'dessert', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 19.00},
    {id: 13, type: 'dessert', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 15.00},
    {id: 14, type: 'dessert', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 24.50},
    {id: 15, type: 'dessert', foto: 'assets/images/frango.png', title: 'frangot', desc:'frangodesc' , price: 32.00},
]

allItems.forEach((item, index)=>{
    foodItem = document.querySelector('.models .option').cloneNode(true);
    
    foodItem.querySelector('.option-img img').src = item.foto;
    foodItem.querySelector('.option-title').innerHTML = item.title;
    foodItem.querySelector('.option-desc p').innerHTML = item.desc;
    foodItem.querySelector('.option-price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    document.querySelector(`.${item.type} .options`).append(foodItem);    
});
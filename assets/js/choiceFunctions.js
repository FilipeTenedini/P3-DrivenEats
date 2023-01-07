import { allItems } from "./data/allItems.js";

let cart = [];
const types = [];
let name;
let local;

// função de clique para selecionar e tirar seleção de cada item
document.querySelectorAll('.option').forEach((item)=>{
    item.addEventListener('click', ()=>{

        const itemPosition = allItems.findIndex((i) => i.id === Number(item.getAttribute('data-key')));
        const type = allItems[itemPosition].type;

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
            changeButton();
        }

    });
})

// trocando botão e viabilizando uso do mesmo
function changeButton(){
    const button = document.querySelector('.orderBtn');
    button.removeAttribute('disabled');
    button.classList.add('active');
    button.innerHTML = 'Fechar pedido';
}

// criando carrinho de compra e adicionando a compra;
function updateCart(){
    document.querySelectorAll('.selected').forEach((item)=>{
        const itemPosition = allItems.findIndex((i) => i.id === Number(item.getAttribute('data-key')));

        console.log(allItems[itemPosition])
        allItems[itemPosition].qt = 1;
        
        cart.push(allItems[itemPosition])
    });

}

// capturando dados do usuário
function captData() {
    name = prompt('Qual seu nome?');
    local = prompt('Qual o endereço?');
}

// inserindo dados no modal 
function insertModalData() {
    let total = 0;
    const modal = document.querySelector('.modal');
    modal.classList.remove('invisible');
    modal.classList.add('visible');

    document.querySelectorAll('.order-items-item').forEach((item, index)=>{
        total += cart[index].price;
        item.querySelector('.order-item--name').innerHTML = cart[index].title
        item.querySelector('.order-item--price').innerHTML = cart[index].price.toFixed(2);
    });

    modal.querySelector('.total-number').innerHTML = total.toFixed(2);
}

// inserindo função no primeiro button
document.querySelector('.orderBtn').addEventListener('click', () => {
    updateCart();
    insertModalData();
    captData();
});

// função de cancelar
document.querySelector('.cancel').addEventListener('click', ()=> {
    const modal = document.querySelector('.modal');
    modal.classList.remove('visible');
    modal.classList.add('invisible');
    cart = [];
})

function sendMsg(){
    let minhaString = encodeURIComponent(`
Olá, gostaria de fazer o pedido:\n
- Prato: ${document.querySelector('.dish .selected .option-title').innerHTML}
- Bebida: ${document.querySelector('.drink .selected .option-title').innerHTML}
- Sobremesa: ${document.querySelector('.dessert .selected .option-title').innerHTML}
Total: R$ ${document.querySelector('.modal .total-number').innerHTML}
\n
Nome: ${name}
Endereço: ${local}
`)

    let link = `https://wa.me/5551996693390?text=${minhaString}`;

    document.querySelector('.modal a').setAttribute('href', link)
}

document.querySelector('.modal .confirm').addEventListener('click', ()=>{
    sendMsg();
})
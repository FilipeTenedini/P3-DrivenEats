import { allItems } from "./data/allItems.js";

const allTypesQt = Array.from(new Set(allItems.map((item)=>item.type))).length;
const selectedTypes = [];
let cart = [];
let name;
let local;
const decimalPlaces = 2;

// função de clique para selecionar e tirar seleção de cada item
document.querySelectorAll('.option').forEach((item)=>{
    item.addEventListener('click', ()=>{

        const itemPosition = allItems.findIndex((i) => i.id === Number(item.getAttribute('data-key')));
        const type = allItems[itemPosition].type;

        if (selectedTypes.includes(type)){
            const selectedItem = document.querySelector(`.${type} .selected`);

            selectedItem.classList.remove('selected');
            selectedItem.querySelector('ion-icon').classList.remove('ion-active');
        } else {
            selectedTypes.push(type);
        }

        item.classList.toggle('selected');
        item.querySelector('ion-icon').classList.add('ion-active');

        if (document.querySelectorAll('.selected').length === allTypesQt){
            changeButton();
        }

    });
});

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

        allItems[itemPosition].qt = 1;

        cart.push(allItems[itemPosition]);
    });

}

// capturando dados do usuário
function captData() {
    name = prompt('Qual seu nome?');
    if (name === null || name === '') {
        name = 'Não informado';
    }
    local = prompt('Qual o endereço?');
    if (local === null || local === ''){
        local = 'Não informado';
    }
}

// inserindo dados no modal
function insertModalData() {
    let total = 0;
    const modal = document.querySelector('.modal');
    modal.classList.remove('invisible');
    modal.classList.add('visible');

    document.querySelectorAll('.order-items-item').forEach((item, index)=>{
        total += cart[index].price;
        item.querySelector('.order-item--name').innerHTML = cart[index].title;
        item.querySelector('.order-item--price').innerHTML = cart[index].price.toFixed(decimalPlaces).replace('.',',');
    });

    modal.querySelector('.total-number').innerHTML = 'R$ '+total.toFixed(decimalPlaces).replace('.',',');
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
});

function sendMsg(){
    const minhaString = encodeURIComponent(`
Olá, gostaria de fazer o pedido:\n
- Prato: ${document.querySelector('.dish .selected .option-title').innerHTML}
- Bebida: ${document.querySelector('.drink .selected .option-title').innerHTML}
- Sobremesa: ${document.querySelector('.dessert .selected .option-title').innerHTML}
Total: R$ ${document.querySelector('.modal .total-number').innerHTML}
\n
Nome: ${name}
Endereço: ${local}
`);

    const link = `https://wa.me/5511999151515?text=${minhaString}`;

    document.querySelector('.modal a').setAttribute('href', link);
}

document.querySelector('.modal .confirm').addEventListener('click', ()=>{
    sendMsg();
});
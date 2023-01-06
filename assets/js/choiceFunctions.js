let cart = [
    
];

document.querySelectorAll('.option').forEach((item, index)=>{

    item.addEventListener('click', ()=>{
        const selectedPrincipal = document.querySelector('.principal .selected');
        const selectedDrink = document.querySelector('.drink .selected');
        const selectedDessert = document.querySelector('.dessert .selected');


        if(selectedPrincipal != null && item.getAttribute('data-key') === 'principal'){
            selectedPrincipal.classList.remove('selected');
            selectedPrincipal.querySelector('ion-icon').style.display='none';
        } 
        else if (selectedDrink != null && item.getAttribute('data-key') === 'drink'){
            selectedDrink.classList.remove('selected');
            selectedDrink.querySelector('ion-icon').style.display='none';
        } 
        else if (selectedDessert != null && item.getAttribute('data-key') === 'dessert') {
            selectedDessert.classList.remove('selected');
            selectedDessert.querySelector('ion-icon').style.display='none';
        }

        item.classList.toggle('selected');
        item.querySelector('ion-icon').style.display='block';
        
    })
})

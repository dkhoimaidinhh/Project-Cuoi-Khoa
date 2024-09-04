let listProductHTML = document.querySelector('.listProduct')

let listProducts = [];

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProductHTML.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = ``
        })
    }
}

const initApp = () => {
    fetch('cart.json')
    .then(respone => respone.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}

initApp();
const formProduct = document.getElementById('formProduct');

formProduct.addEventListener('submit', (e) => {
    e.preventDefault();
    let product = document.getElementById('product').value;
    let code = document.getElementById('code').value;
    let amount = document.getElementById('amount').value;
    let price = document.getElementById('price').value;

    let dataTwo = {
        product,
        code,
        amount,
        price
    }

    let conversion = JSON.stringify(dataTwo);
    localStorage.setItem('lead', conversion);
})
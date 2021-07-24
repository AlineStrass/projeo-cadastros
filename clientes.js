const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let adress = document.getElementById('adress').value;

    let data = {
        name,
        email,
        phone,
        adress
    }

    let convert = JSON.stringify(data);
    localStorage.setItem('lead', convert);
})
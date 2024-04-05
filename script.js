const items = document.querySelectorAll('.item');

items.forEach(item =>{
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
    })
})

removeFocus = () => {
    items.forEach(item => {
        item.classList.remove ('selected');
    })
}



const button = document.querySelector('#btnOne');
button.addEventListener('click',calculateAmount);

const btnService = document.querySelector('#addServiceOne');
btnService.addEventListener('click',showService);

function showService(e){
    e.preventDefault();
    service.style.display = "block";
}

function calculateAmount(e){
    e.preventDefault();
    const room = document.querySelector('#room').value;
    const night = document.querySelector('#night').value;
    const service = document.querySelector('#service').value;

    if(room ==="" || night ==="" || night <1){
        Swal.fire({
                icon: 'error',
                title: 'Sorry!',
                text: 'Please enter your information (number only)!!'
        })
    }
    else if(isNaN(room, night)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter number only!'
        })
    }

    let amountForRoom = room * night;
    let amountForService = service * night;
    let totalSum = amountForRoom + amountForService;

    amountForRoom = amountForRoom.toFixed(2);
    amountForService = amountForService.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#sumPrice').textContent = amountForRoom;
    document.querySelector('#sumNight').textContent = night;
    document.querySelector('#sumService').textContent = amountForService;
    document.querySelector('#roomAndService').textContent = totalSum;
    document.querySelector('#sumNights').textContent = night;
}

// Tax

const buttonTwo = document.querySelector('#btnTwo');
buttonTwo.addEventListener('click',calculateTax);

const buttonTax = document.querySelector('#chooseTax');
buttonTax.addEventListener('click',showTax);

function showTax(e){
    e.preventDefault();
    tax.style.display = 'block';
}


function calculateTax(e){
    e.preventDefault();
    const people = document.querySelector('#adultsNumber').value;
    const kidsNumber = document.querySelector('#kidsNumber').value;
    const nightTax = document.querySelector('#nightTax').value;
    const tax = document.querySelector('#tax').value;

    if(people ==="" || nightTax === "" || people <1 || nightTax <1){
        Swal.fire({
            icon: 'error',
            title: 'Sorry!',
            text: 'Please enter your information (number only)!!'
    })
    }
    else if(tax == ''){
        Swal.fire({
            icon: 'error',
            title: 'Sorry!',
            text: 'Please choose your tax!!'
    })
    }

    let amountAdult = (people*1) *nightTax;
    let amountKid = kidsNumber*nightTax*tax;
    let totalTax = amountAdult+amountKid;

    document.querySelector('#adultTax').textContent = amountAdult;
    document.querySelector('#kidTax').textContent = amountKid;
    document.querySelector('#adultAndKid').textContent = totalTax;
    document.querySelector('.sumNightAdult').textContent = nightTax;
    document.querySelector('.sumNightKid').textContent = nightTax;
    document.querySelector('.sumNights').textContent = nightTa;

    amountAdult = amountAdult.toFixed(2);
    amountKid = amountKid.toFixed(2);
    totalTax = totalTax.toFixed(2);
}

calculateAmount();
calculateTax();